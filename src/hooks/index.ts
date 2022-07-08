import cookie, { serialize } from 'cookie'
import type { Handle } from '@sveltejs/kit'
import { DOMAIN, WWW_URL } from '$lib/config'
import { v4 as uuidv4 } from 'uuid'
import { get } from '$lib/util/api'
// Can not use KQL_Ip to get ip address because it is blocked by nginx proxy
// import type { RequestEvent } from '@sveltejs/kit/types/private'

// import Cookie from 'cookie-universal'
// const coookies = Cookie()

export const handle: Handle = async ({ event, resolve }) => {
  let store,
    cart,
    headers,
    serializedCookie,
    settings,
    megamenu,
    sid,
    token,
    domain,
    geo,
    me,
    ip
  // me.gql and cart.gql can not be called here because of unabailability of session cookie. Hence there are executed at __layout.reset.svelte or $lib/Nav.svelte
  const request = event.request
  const cookies = cookie.parse(request.headers.get('cookie') || '') || {}
  event.locals['kitqlCartId'] = cookies.kitqlCartId || uuidv4()
  const host = request.headers.get('host')
  domain = host === 'localhost:3000' ? DOMAIN : host
  if (cookies.store) store = cookies.store && JSON.parse(cookies.store)
  try {
    let uri = new URL(`${WWW_URL}/api/init?domain=${domain}`)
    let resBeforeJson = await fetch(uri.toString(), { method: 'get' })
    let INITRes = await resBeforeJson.json()
    // console.log('Hooks Handle..........', domain, INITRes)
    const INIT = INITRes.data
    store = INIT?.storeOne
    settings = INIT?.settings
    megamenu = INIT?.megamenu
    // 	fetch,
    // 	variables: { store: store?.id }
    // })
    if (cookies.me) {
      me = cookies.me && JSON.parse(cookies.me)
      sid = cookies.sid
      token = cookies.token
    }
    geo = cookies.geo && JSON.parse(cookies.geo)
  } catch (e) {
    console.log('Hooks err...............', e)
  }
  // me = cookies.me && JSON.parse(cookies.me)
  if (event.url.searchParams.has('_method')) {
    event.method = event.url.searchParams.get('_method').toUpperCase()
  }
  event.locals = {
    store,
    headers,
    serializedCookie,
    settings,
    megamenu,
    geo,
    sid,
    token,
    domain,
    loginUrl: settings?.otpLogin ? '/auth/otp-login' : '/auth/login',
    kitqlCartId: event.locals['kitqlCartId'],
    me,
  }
  const response = await resolve(event)
  if (!cookies.kitqlCartId) {
    // if this is the first time the user has visited this app,
    // set a cookie so that we recognise them when they return
    response.headers.set(
      'Set-Cookie',
      cookie.serialize('kitqlCartId', event.locals['kitqlCartId'], {
        path: '/',
        httpOnly: true,
      })
    )
  }
  if (sid && !cookies.sid) {
    response.headers.set(
      'Set-Cookie',
      cookie.serialize('sid', sid.toString(), { path: '/', httpOnly: true })
    )
  }
  // if (geo && !cookies.geo) {
  // 	response.headers.set(
  // 		'Set-Cookie',
  // 		cookie.serialize('geo', JSON.stringify(geo), { path: '/', httpOnly: true })
  // 	)
  // }
  // , { // Creates issue with logout
  // 	ssr: !event.url.pathname.startsWith('/my'),
  // })
  if (store) {
    const COOKIE_NAME = 'store'
    const secure = process.env.NODE_ENV === 'production'
    const maxAge = 7200 // (3600 seconds / hour) * 2 hours
    const sameSite = 'Strict'
    const {
      id,
      email,
      address,
      phone,
      websiteName,
      websiteLegalName,
      stripePublishableKey,
    } = store
    const stringifiedStoreData =
      JSON.stringify({
        id,
        domain,
        address,
        phone,
        email,
        websiteName,
        websiteLegalName,
        stripePublishableKey,
        kitqlCartId: event.locals['kitqlCartId'],
      }) || ''
    const setStoreCookieValue = `${COOKIE_NAME}=${stringifiedStoreData}; Max-Age=${maxAge}; Path=/; ${
      secure ? 'Secure;' : ''
    } HttpOnly; SameSite=${sameSite}` // This line is important else footer will not populate
    response.headers.set(
      'Set-Cookie',
      cookie.serialize('store', stringifiedStoreData, { path: '/' })
    )
  }

  return response
}

export const getSession = ({ locals }) => {
  const {
    token,
    loginUrl,
    domain,
    sid,
    kitqlCartId,
    categories,
    settings,
    store,
    megamenu,
    me,
  } = locals
  return {
    me,
    kitqlCartId,
    loginUrl,
    store,
    settings,
    domain,
    sid,
    token,
    DEBUG_MODE: import.meta.env.VITE_DEBUG_MODE,
  }
}

// export const serverFetch = async (request) => {
// 	if (request.url.startsWith('https://api.yourapp.com/')) {
// 		// clone the original request, but change the URL
// 		request = new Request(
// 			request.url.replace('https://api.yourapp.com/', 'http://localhost:9999/'),
// 			request
// 		)
// 	}

// 	return fetch(request)
// }

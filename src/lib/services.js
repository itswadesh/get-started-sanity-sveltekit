import { page, session } from '$app/stores'
import { toast } from './util'
import Cookie from 'cookie-universal'
import { HTTP_ENDPOINT } from './config/env'
const cookies = Cookie()

export function getUser() {
  return session.me
}

export async function signUp({
  email,
  password,
  firstName,
  lastName,
  confirmPassword,
  role,
  store,
}) {
  let loading = true
  let me
  try {
    toast('Requesting server...', 'info')
    const { data, errors, status } = await KQL_Register.mutate({
      variables: {
        email,
        password,
        firstName,
        lastName,
        passwordConfirmation: confirmPassword,
        role,
        store,
      },
    })
    if (errors) {
      toast(errors[0].message, 'error')
      throw errors[0]
    }
    me = {
      email: data?.register?.email,
      firstName: data?.register?.firstName,
      lastName: data?.register?.lastName,
      avatar: data?.register?.avatar,
      role: data?.register?.role,
      vendor: data?.register?.vendor,
      verified: data?.register?.verified,
      plan: data?.register?.plan,
      active: data?.register?.active,
    }
    toast('Signup successful.', 'success')
    await cookies.set('me', me, { path: '/' })
    // goto('/my')
  } catch (e) {
    toast('Error: ' + e, 'error')
    throw e
  } finally {
    loading = false
  }
  return me
}

export async function signIn({ email, password }) {
  let loading = false
  let me
  try {
    toast('Signin In...', 'info')
    loading = true
    const { data, errors } = await KQL_Login.mutate({
      variables: { email, password },
    }) // post('es/login', { email, password })
    if (errors) {
      throw errors[0]
    }
    me = {
      email: data?.login?.email,
      firstName: data?.login?.firstName,
      lastName: data?.login?.lastName,
      avatar: data?.login?.avatar,
      role: data?.login?.role,
      vendor: data?.login?.vendor,
      verified: data?.login?.verified,
      plan: data?.login?.plan,
      active: data?.login?.active,
    }
    toast('Login successful', 'success')
    await cookies.set('me', me, { path: '/' })
    // goto(ref || '/my')
    // console.log('user..........', user)
  } catch (e) {
    toast('Error: ' + e?.message, 'error')
    throw e
  } finally {
    loading = false
  }
  return me
}

export const signOut = async () => {
  let logout, error
  try {
    await KQL_SignOut.mutate() //post('es/logout')
    // if (logout.errors) error = logout.errors[0]
  } catch (e) {
    error = e
  } finally {
  }
  await cookies.set('me', null, { path: '/' })
  await cookies.remove('token')
  await cookies.remove('sid')
  await cookies.remove('me')
  // session.me = null
  // session.token = null
  // session.sid = null
  // delay(1000)
  // let go = '/auth/login'
  // if (session.settings.otpLogin) {
  // 	go = `/auth/phone-login`
  // }
  return { data: logout, error }
}

export async function setStoreDetailsCookie() {
  try {
    const domain = $session.domain
    let uri = new URL(`${HTTP_ENDPOINT}/api/init?domain=${domain}`)
    let res = await fetch(uri.toString(), { method: 'get' })
    if (res.ok) {
      let store = await res.json()
      const { id, email, address, phone, websiteName, websiteLegalName } =
        store?.storeOne
      cookies.set(
        'store',
        JSON.stringify({
          id,
          domain,
          address,
          phone,
          email,
          websiteName,
          websiteLegalName,
        }),
        {
          path: '/',
        }
      )
    }
    return true
  } catch (e) {
    return false
  } finally {
  }
}

// export async function signInMagicLink({ email }) {
// 	const { error } = await supabase.auth.signIn({ email })
// 	return { data: !error, error }
// }

// export async function createPost({ content, user, imageFile }) {
// 	// user is user's email
// 	if (imageFile) {
// 		const { data: imageData, error: imageError } = await supabase.storage
// 			.from('images')
// 			.upload(getUser().email + '/' + Date.now(), imageFile, {
// 				cacheControl: '3600',
// 				upsert: false,
// 			})
// 		if (imageError) return { data: null, error: imageError }
// 		const { data, error } = await supabase
// 			.from('posts')
// 			.insert({ content, user, image: imageData.Key })

// 		return { data, error }
// 	} else {
// 		const { data, error } = await supabase.from('posts').insert({ content, user })
// 		return { data, error }
// 	}
// }

// export async function createLike({ post, user }) {
// 	// post is post's id
// 	const { data, error } = await supabase.from('likes').insert({ post, user })
// 	return { data, error }
// }

// export async function createComment({ post, user, content }) {
// 	const { data, error } = await supabase.from('comments').insert({ post, user, content })
// 	return { data, error }
// }

// export async function getPosts() {
// 	let { data, error } = await supabase
// 		.from('posts')
// 		.select('*')
// 		.order('created_at', { ascending: false })
// 		.limit(5)

// 	if (error) return { data, error }

// 	data = await Promise.all(
// 		data.map(async (post) => {
// 			const [{ count: likes }, { data: comments }, { publicURL }] = await Promise.all([
// 				await supabase
// 					.from('likes')
// 					.select('id', { count: 'estimated', head: true })
// 					.eq('post', post.id),
// 				await supabase.from('comments').select('*').eq('post', post.id),
// 				post.image
// 					? await supabase.storage
// 							.from('images')
// 							.getPublicUrl(post.image.split('/').slice(1).join('/'))
// 					: Promise.resolve({}),
// 			])
// 			// ERROR HANDLE!!!
// 			return {
// 				...post,
// 				likes,
// 				comments,
// 				publicURL,
// 			}
// 		})
// 	)
// 	return { data, error }
// }

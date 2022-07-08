import sanityClient from '@sanity/client'
export const sanity = sanityClient({
  projectId: 'pipd108y',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
  token: import.meta.env.VITE_SANITY_AUTH_TOKEN,
})
export const authorInfo = {
  author: 'Swadesh Behera',
  entity: 'Misiki',
  ogLanguage: 'en_US',
  siteLanguage: 'en-US',
  siteTitle: ' - A to Z Zones',
  siteShortTitle: ' - A to Z Zones', // used as SchemaOrg siteTitleAlt
  contactEmail: 'swadesh@misiki.in',
  facebookAuthorPage: `https://www.facebook.com/codenx`,
  facebookPage: `https://www.facebook.com/codenx`,
  facebookPageName: 'codenx',
  githubPage: 'itswadesh',
  linkedinProfile: 'itswadesh',
  telegramUsername: 'itswadesh',
  twitterUsername: 'itswadesh',
}
export const WWW_URL = import.meta.env.VITE_PROD_WWW_URL
export const IMAGE_CDN_URL = 'https://ik.imagekit.io/3wzatecz51w3i/atoz'
export const host = '' //'https://atozzones.com'
export const DOMAIN = import.meta.env.VITE_DOMAIN

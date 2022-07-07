import sanityClient from '@sanity/client'
export const sanity = sanityClient({
  projectId: 'pipd108y',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
  token: import.meta.env.VITE_SANITY_AUTH_TOKEN,
})

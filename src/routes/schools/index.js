import { sanity } from '$lib/config'

export async function get() {
  const data = await sanity.fetch(
    `*[_type == "school"]{
      name,
      phone,
      address,
      banner {asset->{url}}
    }`
  )

  if (data) {
    return {
      status: 200,
      body: { data },
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}

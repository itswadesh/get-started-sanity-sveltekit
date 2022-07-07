import { sanity } from '$lib/config'

export async function get() {
  const data = await sanity.fetch(`*[_type == "section"]{_id,name,sort}`)

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

import { sanity } from '$lib/config'

export async function get() {
  const data = await sanity.fetch(
    `*[_type == "test"]
    {
      _id,date,exam->{examType->{name}},subject->{name},totalMarks
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

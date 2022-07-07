import { sanity } from '$lib/config'

export async function get() {
  const user = (
    await sanity.fetch(
      `*[_type == "teacher" && phone == "8895092508" ]{
      "school": *[ _type == "school"  && ^._id in user[]._ref ][0]
    }`
    )
  )[0]
  const data = await sanity.fetch(
    `*[_type == "test" && school._ref == "${user?.school?._id}"]
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

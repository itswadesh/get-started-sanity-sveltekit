import { sanity } from '$lib/config'

export async function get({ params }) {
  const tests = await sanity.fetch(
    `*[_type == "test" && _id  == "${params.id}"]
    {
      _id,date,exam->{examType->{name}},subject->{name},totalMarks,section->{_id,name},class->{_id,name}
    }`
  )
  const data = await sanity.fetch(
    `*[_type == "student" && section._ref in *[_id == "${tests[0]?.section?._id}"]._id]
    {
      _id,name,regNo,rollNo,school,section->{name},school->,
      "result": *[ _type == "result"  && student._ref == ^._id ][0]
    }`
  )
  if (tests) {
    return {
      status: 200,
      body: { oneTest: tests[0], data },
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}

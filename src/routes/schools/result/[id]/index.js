import { sanity } from '$lib/config'

export async function get({ params }) {
  const test = (
    await sanity.fetch(
      `*[_type == "test" && _id  == "${params.id}"]
    {
      _id,date,exam->{examType->{name}},subject->{name},totalMarks,section->{_id,name},class->{_id,name},school->{_id}
    }`
    )
  )[0]
  let data = await sanity.fetch(
    `*[_type == "student" && school._ref == "${test?.school?._id}" && class._ref in *[_id == "${test?.class?._id}"]._id] | order(rollNo asc)
    {
      _id,name,regNo,rollNo,school,class->{name},section->{name},school->,
      "result": *[ _type == "result" && test._ref == "${params.id}"  && student._ref == ^._id ]{_id,marks}[0]
    }`
  )
  if (test) {
    data = data.map((test) => {
      if (!test.result) {
        test.result = { marks: '' }
      } else {
        test.result = test.result
      }
      return test
    })
    return {
      status: 200,
      body: { oneTest: test, data },
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}

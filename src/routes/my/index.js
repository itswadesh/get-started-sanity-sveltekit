import { sanity } from '$lib/config'

export async function get() {
  const results = await sanity.fetch(`*[_type == "result"]`)
  const tests = await sanity.fetch(`*[_type == "test"]`)
  const students = await sanity.fetch(
    `*[_type == "student" && phone == "8895092508"]{_id,name,regNo,rollNo,phone,address,class->{name},section->{name},school->{name}}`
  )
  if (students) {
    return {
      status: 200,
      body: { students, tests, results },
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}

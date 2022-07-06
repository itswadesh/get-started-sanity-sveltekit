import { sanity } from '$lib/config'

export async function get() {
  const data = await sanity.fetch(
    `*[_type == "student"]
    {
      _id,name,regNo,rollNo,class->{name},section->{name}
    }`
  )

  // const data = await sanity.fetch(
  //   `*[_type == "result"]
  //   {
  //     student->{name,regNo,rollNo,class->{name},section->{name}},
  //     test -> {
  //       _id,
  //       exam->{
  //         examType->{name},
  //         school->{name}
  //       },
  //       subject->{name},
  //       invigilator->{name},
  //       moderator->{name},
  //       totalMarks
  //     },
  //     marks
  //   }`
  // )

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

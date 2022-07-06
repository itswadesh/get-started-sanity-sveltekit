import { sanity } from '$lib/config'
/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
  const data = await sanity.fetch(
    `*[_type == "result" && student._ref in *[_id == "${params.id}"]._id]
    {
      _id,
      student->{name,regNo,rollNo,class->{name},section->{name}},
      test -> {
        exam->{
          examType->{name},
          school->{name}
        },
        subject->{name},
        invigilator->{name},
        moderator->{name},
        totalMarks
      },
      marks
    }`
  )
  if (data?.length) {
    return {
      body: { data: data },
    }
  }

  return {
    status: 404,
  }
}

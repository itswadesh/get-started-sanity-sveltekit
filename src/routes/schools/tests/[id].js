import { sanity } from '$lib/config'
/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
  let data = {}
  if (params.id === 'new') {
    data = {}
  } else {
    data = await sanity.fetch(
      `*[_type == "test" && _id == ${params.id}]
    {
      _id,
      maxMarks
    }`
    )[0]
  }
  const exams = (
    await sanity.fetch(`*[_type == "exam"]{_id,examType->{name}}`)
  ).map((exam) => ({ name: exam.examType.name, _id: exam._id }))
  const subjects = await sanity.fetch(`*[_type == "subject"]{_id,name}`)
  const teachers = await sanity.fetch(`*[_type == "teacher"]{_id,name}`)
  const classes = await sanity.fetch(`*[_type == "classs"]{_id,name}`)
  const sections = await sanity.fetch(`*[_type == "section"]{_id,name}`)
  return {
    body: { data, exams, subjects, teachers, classes, sections },
  }
}

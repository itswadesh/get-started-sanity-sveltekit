import { sanity } from '$lib/config'
/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
  const data = await sanity.fetch(
    `*[_type == "result" && student._ref in *[_id == "${params.id}"]._id] | order(test desc,_createdAt desc)
    {
      _id,
      student->{name,regNo,rollNo,class->{name},section->{name}},
      test -> {
        _id,
        exam->{
          examType->{name},
          school->{name}
        },
        subject->{name},
        invigilator->{name},
        moderator->{name},
        totalMarks,
        date
      },
      marks
    }`
  )
  if (data?.length) {
    const result = Object.values(
      data.reduce((acc, x) => {
        acc[x.test._id] = [...(acc[x.test._id] || []), x]
        return acc
      }, {})
    )
    // console.log(result)
    // let newTestGroup = []
    // for (let ix in data) {
    //   const { student, test, marks } = data[ix]
    //   if (!newTestGroup.test?._id) newTestGroup.test = test._id
    //   newTestGroup.data = []
    //   if (test._id === data[ix - 1]) {
    //     newTestGroup.test = test._id
    //     newTestGroup.data.push({ student, test, marks })
    //   }
    // }
    // console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzz', newTestGroup)
    return {
      body: { data: result },
    }
  }

  return {
    body: { data: [] },
  }
}

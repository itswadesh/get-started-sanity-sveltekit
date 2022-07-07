import { sanity } from '$lib/config'

export async function get() {
  // 3e2656f5-775e-450a-a80f-6935f424f2dd
  // 8249028220
  const user = (
    await sanity.fetch(
      `*[_type == "teacher" && phone == "8895092508" ]{
      _id,
      regNo,
      rollNo,
      name,
      phone,
      address,
      "school": *[ _type == "school"  && ^._id in user[]._ref ][0]
    }`
    )
  )[0]
  const data = await sanity.fetch(
    `*[_type == "student" && school._ref == "${user?.school?._id}" ]|order(rollNo asc){_id,regNo,rollNo,name,phone,address,school->{name}}`
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

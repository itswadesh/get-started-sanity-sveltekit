import { sanity } from '../lib/config'

export async function get() {
  const schools = await sanity.fetch(`*[_type == "school"]`)
  const tests = await sanity.fetch(`*[_type == "test"]`)
  const students = await sanity.fetch(`*[_type == "student"]`)

  if (schools) {
    return {
      status: 200,
      body: { schools, tests, students },
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}

import { sanity } from '../lib/config'

export async function get() {
  const schools = await sanity.fetch(`*[_type == "school"]`)
  const tests = await sanity.fetch(`*[_type == "test"]`)
  const results = await sanity.fetch(`*[_type == "result"]`)
  const students = await sanity.fetch(`*[_type == "student"]`)

  if (schools) {
    return {
      status: 200,
      body: { schools, tests, results, students },
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}

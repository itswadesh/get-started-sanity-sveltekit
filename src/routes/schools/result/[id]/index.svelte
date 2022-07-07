<script lang="ts">
  import { onMount } from 'svelte'

  import { sanity } from '../../../../lib/config'

  export let oneTest, data
  let fetching = [false]
  async function markChanged({ result, _id: student }, ix) {
    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzz', result)
    try {
      const doc = {
        _type: 'result',
        _id: result?._id,
        test: {
          _type: 'reference',
          _ref: oneTest._id,
        },
        student: {
          _type: 'reference',
          _ref: student,
        },
        marks: +result?.marks,
      }
      fetching[ix] = true
      if (result?._id) await sanity.createOrReplace(doc)
      else await sanity.create(doc)
    } catch (e) {
      console.log('eeeeeeeeeeeeeeeeeeee', e)
    } finally {
      fetching[ix] = false
    }
  }
  onMount(async () => {})
</script>

<div class="flex justify-between">
  <h1 class="text-3xl font-bold">Results</h1>
  <a
    href="/schools/tests"
    class="btn btn-ghost btn-sm mb-2 gap-2 normal-case md:btn-md lg:gap-3"
    ><svg
      class="h-6 w-6 fill-current md:h-8 md:w-8"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      ><path
        d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
      /></svg
    >
    <div class="flex flex-col items-start">
      <span class="hidden text-xs font-normal text-base-content/50 md:block"
        >Prev</span
      > <span>Tests</span>
    </div>
  </a>
</div>
{#if oneTest}
  <div class="card card-side mb-4 mr-4 bg-base-100 shadow-xl">
    <!-- {JSON.stringify(oneTest, null, 2)} -->
    <div class="card-body">
      <h2 class="card-title">Exam Date: {oneTest.date}</h2>
      <div class="grid grid-cols-3 gap-2">
        <div>Exam: <b>{oneTest.exam?.examType?.name}</b></div>
        <div>Class: <b>{oneTest.class?.name}</b></div>
        <div>Section: <b>{oneTest.section?.name}</b></div>
        <div>Subject: <b>{oneTest.subject?.name}</b></div>
        <div>Total Marks: <b>{oneTest.totalMarks}</b></div>
      </div>
    </div>
  </div>

  <div class="overflow-hidden ">
    <!-- {JSON.stringify(data, null, 2)} -->
    <div class="border-t border-gray-200">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Reg No</th>
              <th>Roll No</th>
              <th>Name</th>
              <th>Marks</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {#each data as student, ix}
              <tr>
                <td>{student.regNo}</td>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>
                  <div class="input-group">
                    <form
                      on:submit|preventDefault={() => markChanged(student, ix)}
                    >
                      <input
                        bind:value={student.result.marks}
                        type="number"
                        class="input input-bordered w-full max-w-xs"
                        placeholder="Score"
                      />
                      <button
                        class="btn {fetching[ix] ? 'loading' : ''}"
                        tabindex={-1}
                      >
                        save
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
{/if}

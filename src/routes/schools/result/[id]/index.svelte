<script lang="ts">
  import { sanity } from '../../../../lib/config'

  export let oneTest, data
  async function markChanged(student: string) {
    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzz', student)
    const doc = {
      _type: 'result',
      marks: 100,
      student,
    }
    const resultRes = await sanity.create(doc)
    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzz', resultRes)
  }
</script>

{#if oneTest}
  <div class="card card-side mb-4 mr-4 bg-base-100 shadow-xl">
    <!-- {JSON.stringify(oneTest, null, 2)} -->
    <div class="card-body">
      <h2 class="card-title">{oneTest.date}</h2>
      <p>
        {oneTest.exam?.examType?.name}<br />
        {oneTest.subject?.name}<br />
        {oneTest.class?.name}<br />
        {oneTest.section?.name}<br />
        {oneTest.totalMarks}
      </p>
    </div>
  </div>

  <div class="overflow-hidden ">
    <!-- {JSON.stringify(data, null, 2)} -->
    <div class="border-t border-gray-200">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>RegNo</th>
              <th>Name</th>
              <th>Marks</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {#each data as student}
              <tr>
                <td>{student.regNo}</td>
                <td>{student.name}</td>
                <td>
                  <div class="input-group">
                    <input
                      type="text"
                      class="input input-bordered w-full max-w-xs"
                      placeholder="Score"
                      on:change={() => markChanged(student._id)}
                    />
                    <button class="btn btn-square"> save </button>
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

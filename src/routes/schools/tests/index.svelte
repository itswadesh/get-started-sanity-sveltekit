<script lang="ts">
  export let data
</script>

{#if data}
  <div class="overflow-hidden">
    <!-- {JSON.stringify(data, null, 2)} -->
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">Tests</h1>
      <a href={`/schools/tests/new`} class="btn mb-2 mr-2 mt-2">
        Add New Test
      </a>
    </div>
    <div class="border-t border-gray-200">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Exam</th>
              <th>Subject</th>
              <th>Total Marks</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {#each data as test}
              <tr>
                <td>{test?.date}</td>
                <td>{test.exam?.examType?.name}</td>
                <td>{test.subject?.name}</td>
                <td>{test.totalMarks}</td>
                <td>
                  <a
                    class="btn btn-outline"
                    href={`/schools/result/${test._id}`}>Publish Result</a
                  >
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
{/if}

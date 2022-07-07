<script lang="ts">
  export let result
</script>

<!-- <pre>{JSON.stringify(results, null, 2)}</pre> -->
{#if result}
  <div class="overflow-hidden ">
    <div class="grid grid-cols-2 gap-2 px-4 py-5 sm:px-6">
      <div>
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          {result[0]?.test?.exam?.school?.name}
          {result[0]?.test?.exam?.examType?.name} exam
        </h3>
        <div class="mt-1 max-w-2xl text-sm text-gray-500">
          {result[0]?.test?.date}
        </div>
      </div>
      <div class="mt-1 max-w-2xl text-right text-sm text-gray-500">
        Class: <b>
          {result[0]?.student?.class?.name}
          ({result[0]?.student?.section?.name})
        </b> <br />
        <div class="mt-1 max-w-2xl text-sm text-gray-500">
          {result[0]?.student?.name} - {result[0]?.student?.regNo} - {result[0]
            ?.student?.rollNo}
        </div>
        <!-- Subject: <b>{result[0]?.test?.subject?.name}</b> -->
      </div>
    </div>
    <!-- {JSON.stringify(result, null, 2)} -->
    <div class="border-t border-gray-200">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
              <th>Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {#each result as mark}
              <tr>
                <td>{mark?.test?.subject?.name}</td>
                <td>{mark?.marks}</td>
                <td>{mark?.test?.totalMarks}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
{/if}

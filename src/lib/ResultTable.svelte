<script lang="ts">
  export let result
  let studentData = result[0]
</script>

{#if result}
  <div class="overflow-hidden ">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        {studentData?.student?.name} - {studentData?.student?.regNo} - {studentData
          ?.student?.rollNo}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        {studentData?.test?.exam?.examType?.name} - {studentData?.test?.exam
          ?.school?.name}
      </p>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        {studentData?.student?.class?.name} - {studentData?.student?.section
          ?.name} -
        {studentData?.test?.subject?.name}
      </p>
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
                <td>{mark.marks}</td>
                <td>{mark?.test.totalMarks}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
{/if}

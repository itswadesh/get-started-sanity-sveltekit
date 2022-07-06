<script lang="ts">
  export let result
</script>

{#if result}
  <a href={`/results/${result.test._id}`} class=" overflow-hidden">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        {result.student?.name} - {result.student?.regNo} - {result.student
          ?.rollNo}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        {result?.test.exam?.examType?.name} - {result?.test.exam?.school?.name}
      </p>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        {result.student?.class?.name} - {result.student?.section?.name} - {result
          ?.test?.subject?.name}
      </p>
    </div>
    <!-- <div class="border-t border-gray-200">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Full name</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {result.subject?.name}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Application for</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {result.marks}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Email address</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {result.totalMarks}
          </dd>
        </div>
      </dl>
    </div> -->
  </a>
{/if}

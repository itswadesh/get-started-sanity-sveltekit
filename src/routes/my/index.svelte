<script>
  import Stats from '$lib/Stats.svelte'
  import Thought from '$lib/Thought.svelte'
  export let students, tests, results
</script>

<article>
  <main>
    <div class="mt-8 flex flex-col items-center justify-center">
      <div class="stats mb-8 shadow">
        {#each students as student}
          <a class="stat" href={`/results/${student._id}`}>
            <div class="stat-figure text-secondary">
              <div class="avatar online">
                <div class="w-16 rounded-full">
                  <img src="https://placeimg.com/128/128/people" />
                </div>
              </div>
            </div>
            <div class="stat-title">
              <span class=" text-secondary">Reg No: {student.regNo}</span> (Roll
              No: {student.rollNo})
            </div>
            <div class="stat-value mt-1 mb-2 text-primary">
              {student.name}
            </div>
            <div class="stat-desc">
              {student.class?.name}-{student.section?.name}
            </div>
            <!-- <div class="stat-desc">{student.school.name}</div> -->
          </a>
        {/each}
      </div>
      <div class="grid grid-cols-1 items-center justify-start gap-2">
        <!-- <Stats {students} {tests} {results} /> -->
        <Thought />
      </div>
    </div>
  </main>
</article>

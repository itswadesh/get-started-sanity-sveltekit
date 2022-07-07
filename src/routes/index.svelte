<script>
  import Notice from '../lib/Notice.svelte'
  import Stats from '../lib/Stats.svelte'
  import Thought from '../lib/Thought.svelte'
  export let students, tests, schools, results
</script>

<article>
  <main>
    <div class="mt-8 flex flex-col items-center justify-center">
      <Stats {students} {tests} {schools} {results} />
      <!-- <br />
    <br />
    <Notice /> -->
      <br />
      <br />
      <Thought />
    </div>
  </main>
</article>

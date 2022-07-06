<!-- <script context="module">
  import { sanity } from '$lib/config'
  export async function load({ url, params, session, fetch }) {
    let results = await sanity.fetch(
      `*[_type == "result"]
      {
        _id,
        student->{name,regNo,rollNo,class->{name},section->{name}},
        test -> {
          exam->{
            examType->{name},
            school->{name}
          },
          subject->{name},
          invigilator->{name},
          moderator->{name},
          totalMarks
        },
        marks
      }`
    )
    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzz', results)
    return {
      props: results,
    }
  }
</script> -->
<script lang="ts">
  import StudentCard from '../../lib/StudentCard.svelte'

  export let data
</script>

<article>
  <main>
    <h2 class="my-4 text-2xl font-bold">Result</h2>
    {#await data}
      <p>...waiting</p>
    {:then data}
      {#if data}
        <div class="flex">
          {#each data as result}
            <!-- <label class="label mr-4 cursor-pointer">
              <span class="label-text mr-3">{result.name}</span>
              <input
                type="radio"
                name="radio-6"
                class="radio checked:bg-red-500"
                checked
              />
            </label> -->
            <StudentCard {result} />
            <!-- <ResultCard {result} /> -->
          {/each}
        </div>
        <!-- <div class="flex">
          {#each results as result}
            <label class="label mr-4 cursor-pointer">
              <span class="label-text mr-3">{result.name}</span>
              <input
                type="radio"
                name="radio-6"
                class="radio checked:bg-red-500"
                checked
                on:change={getResult}
              />
            </label>
          {/each}
        </div> -->
        <!-- {#if results}
          <div class="flex">
            {#each results as result}
              <label class="label mr-4 cursor-pointer">
                <span class="label-text mr-3">{result.name}</span>
                <input
                  type="radio"
                  name="radio-6"
                  class="radio checked:bg-red-500"
                  checked
                />
              </label>
            {/each}
          </div>
        {/if} -->
      {:else}
        <pre> No result found </pre>
      {/if}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </main>
</article>

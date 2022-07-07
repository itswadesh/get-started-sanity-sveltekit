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
    <div class="flex items-center justify-between">
      <h2 class="my-4 text-2xl font-bold">Results</h2>
      <a
        href="/"
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
          <span
            class="hidden text-xs font-normal text-base-content/50 md:block"
          >
            Prev
          </span>
          <span>Dashboard</span>
        </div>
      </a>
    </div>
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

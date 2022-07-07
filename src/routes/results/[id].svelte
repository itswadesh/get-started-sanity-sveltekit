<script>
  import ResultTable from '$lib/ResultTable.svelte'
  export let data
</script>

<article>
  <main>
    <div class="flex items-center justify-between">
      <h2 class="my-4 text-2xl font-bold">Result</h2>
      <a
        href="/my"
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
        <div class="card bg-base-100 shadow-xl mb-4">
          <div class="card-body">
            <ResultTable result={data} />
          </div>
        </div>
      {:else}
        <pre> No result found </pre>
      {/if}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </main>
</article>

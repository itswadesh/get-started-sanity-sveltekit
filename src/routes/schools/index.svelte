<script>
  export let data
</script>

<article>
  <main>
    <h1 class="mb-3 text-3xl font-bold">Schools</h1>
    {#await data}
      <p>...waiting</p>
    {:then data}
      <!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
      {#if data}
        {#each data as school}
          <div class="card w-96 bg-base-100 shadow-xl image-full">
            {#if school.banner?.asset.url}
              <figure>
                <img src={school.banner?.asset.url} alt={school.name} />
              </figure>
            {/if}
            <div class="card-body">
              <h2 class="card-title">{school.name}</h2>
              <p>{school.address}</p>
              <div class="card-actions justify-end">
                {school.phone}
              </div>
            </div>
          </div>
        {/each}
      {:else}
        <pre> No school found </pre>
      {/if}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </main>
</article>

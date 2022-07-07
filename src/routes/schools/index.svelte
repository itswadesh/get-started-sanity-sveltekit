<script>
  export let data
</script>

<article>
  <main>
    <h2>Schools</h2>
    {#await data}
      <p>...waiting</p>
    {:then data}
      {#if data}
        {#each data as school}
          <div class="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={school.banner?.asset.url} alt={school.name} />
            </figure>
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

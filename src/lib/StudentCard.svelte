<script lang="ts">
  export let result
</script>

<div class="card card-side mr-4 bg-base-100 shadow-xl">
  <!-- <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure> -->
  <div class="card-body">
    <h2 class="card-title">{result.name}</h2>
    <p>{result.regNo} - {result.rollNo} - {result.section?.name}</p>
    <div class="card-actions justify-end">
      <a href={`/results/${result._id}`} class="btn btn-primary">
        Open Marksheet
      </a>
    </div>
  </div>
</div>

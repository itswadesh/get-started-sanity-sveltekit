<script>
export let err
</script>

{#if err}
	<div class="container mx-auto mb-5 text-xs font-medium text-red-600">
		{#if err?.length}
			{#each err as e}
				<span>{e.message}</span>
			{/each}
		{:else}
			<span>{JSON.stringify(err, null, 2)}</span>
		{/if}
	</div>
{/if}

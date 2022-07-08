<style>
img {
	opacity: 0;
	transition: opacity 1200ms ease-out;
}
img.loaded {
	opacity: 1;
}
</style>

<script>
import { IMAGE_CDN_URL } from '$lib/config'

export let src
export let alt
export let clazz
import { onMount } from 'svelte'

let loaded = false
let thisImage

onMount(() => {
	if (src)
		src =
			IMAGE_CDN_URL +
			'/tr:w-auto,dpr-auto' +
			src
				.replace('https://misiki.s3.ap-south-1.amazonaws.com/', '/')
				.replace('https://devtbz-mum.s3.ap-south-1.amazonaws.com/', '/')
	thisImage.onload = () => {
		loaded = true
	}
})
</script>

<img
	src="{src}"
	alt="{alt}"
	class:loaded
	class="{clazz} whitespace-pre-line"
	bind:this="{thisImage}"
	loading="lazy" />

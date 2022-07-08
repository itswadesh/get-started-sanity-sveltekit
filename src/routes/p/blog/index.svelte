<style>
.frosted-white {
	backdrop-filter: blur(12px);
	background-color: hsla(0, 0%, 100%, 0.5);
}
</style>

<script context="module" lang="ts">
export async function load({ url, params, fetch, session, context }) {
	let search, sort, query, err, page, count
	try {
		search = url.searchParams.get('search')
		page = +url.searchParams.get('page') || 1
		sort = url.searchParams.get('sort')
		query = url.searchParams.toString()
		KQL_MyBlogs.queryLoad({ fetch, variables: { search, sort, page, store: store?.id } })
		// count = res?.count
		// console.log(res)
	} catch (e) {
		err = e
		toast(e, 'error')
	} finally {
	}
	return {
		props: { err, page, count }
	}
}
</script>

<script>
import SEO from '$lib/components/SEO/index.svelte'
import { toast } from '$lib/util'
import Pagination from '$lib/Pagination.svelte'
import ImageLoader from '$lib/components/Image/ImageLoader.svelte'
import TimeAgo from 'svelte-timeago'
import { KQL_MyBlogs } from '$lib/graphql/_kitql/graphqlStores'
import Errors from '$lib/ui/Errors.svelte'
import { store } from '$lib/util'
import HeadingUnderline from '$lib/HeadingUnderline.svelte'

const seoProps = {
	title: 'Blogs ',
	metadescription: 'My Blogs'
}

export let page, count
</script>

<SEO {...seoProps} />

<div class="min-h-screen bg-white text-center">
	<div class="container mx-auto max-w-7xl">
		<div class="p-3 py-5 sm:p-10">
			<div
				class="mx-auto mb-5 flex max-w-max flex-col items-center justify-center text-gray-800 sm:mb-10">
				<h1 class="mb-2 text-xl font-bold text-primary-500 sm:text-2xl lg:text-3xl">Blogs</h1>

				<HeadingUnderline />
			</div>
		</div>

		{#if $KQL_MyBlogs?.isFetching}
			Loading...
		{:else if $KQL_MyBlogs?.errors}
			<Errors errors="{$KQL_MyBlogs?.errors}" />
		{:else if $KQL_MyBlogs?.data?.myBlogs.count < 0}
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each $KQL_MyBlogs?.data?.myBlogs.data as b, i}
					<a
						href="/p/blog/{b.id}"
						class="frosted-white group col-span-1 -rotate-6 transform rounded-md border p-4 shadow-md">
						<div class="mb-4 h-48 w-full overflow-hidden rounded-md border">
							<ImageLoader
								src="{b.img}"
								alt=""
								class="h-full w-full transform object-cover transition duration-300 group-hover:scale-105" />
						</div>

						<div>
							<h6 class="text-lg font-semibold text-primary-500 first-letter:uppercase">
								{b.title}
							</h6>

							<p class="mb-1 text-sm text-gray-500 first-letter:uppercase">
								{b.content}
							</p>

							<h6 class="text-right text-xs text-gray-500">
								<TimeAgo date="{+b.updatedAt}" />
							</h6>
						</div>
					</a>
				{/each}
			</div>

			<Pagination count="{Math.ceil(count / 40)}" current="{+page}" />
		{:else}
			<div class="h-rem-empty flex flex-col items-center justify-center text-center">
				<div>
					<ImageLoader src="/no/empty-blog.svg" alt="empty blog" class="mb-5 h-60 object-contain" />
				</div>

				<span class="mb-3 text-xl font-medium capitalize md:text-3xl">
					Opps! There's no blog found.
				</span>

				<span class="mb-5 text-xs"> We will add corporate blogs very soon. </span>
			</div>
		{/if}
	</div>
</div>

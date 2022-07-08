<style>
.h-rem {
	height: 100rem;
}
@media (min-width: 1280px) {
	.h-rem {
		height: 70rem;
	}
}

.link-underline {
	border-bottom-width: 0;
	background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
	background-size: 0 1px;
	background-position: 0 100%;
	background-repeat: no-repeat;
	transition: background-size 0.5s ease-in-out;
}

.link-underline-black {
	background-image: linear-gradient(transparent, transparent), linear-gradient(#0a6be5, #0a6be5);
}

.link-underline:hover {
	background-size: 100% 1px;
	background-position: 0 100%;
}
</style>

<script context="module" lang="ts">
export async function load({ url, params, fetch, session, context }) {
	let err
	try {
		KQL_Megamenu.queryLoad({ fetch, variables: { store: store?.id } })
	} catch (e) {
		err = e
	} finally {
	}
	return {
		props: { err }
	}
}
</script>

<script>
import Skeleton from '$lib/ui/Skeleton.svelte'
import Error from '$lib/Error.svelte'
import ImageLoader from '$lib/components/Image/ImageLoader.svelte'
import { KQL_Megamenu } from '$lib/graphql/_kitql/graphqlStores'
import SEO from '$lib/components/SEO/index.svelte'
import HeadingUnderline from '$lib/HeadingUnderline.svelte'
import { store } from '$lib/util'
import { t } from '$lib/translations'

const seoProps = {
	title: 'Sitemap Details',
	metadescription: 'Sitemap Details'
}

export let err
</script>

<SEO {...seoProps} />

<Error err="{err}" />

<div class="min-h-screen bg-white px-3 py-5 sm:p-10">
	<div class="container mx-auto max-w-6xl">
		<div
			class="mx-auto mb-5 flex max-w-max flex-col items-center justify-center text-gray-800 sm:mb-10">
			<h1 class="mb-2 text-xl font-bold text-primary-500 sm:text-2xl lg:text-3xl">
				All Categories
			</h1>

			<HeadingUnderline />
		</div>

		{#if $KQL_Megamenu?.isFetching}
			<div class="flex min-h-screen flex-col gap-4">
				<Skeleton />

				<Skeleton />

				<Skeleton />

				<Skeleton />
			</div>
		{:else if $KQL_Megamenu?.data?.megamenu.length > 0}
			<div>
				<ul class="h-rem flex flex-col flex-wrap content-center items-start">
					{#each $KQL_Megamenu?.data?.megamenu as m}
						<li class="w-1/2 p-2.5 sm:mr-10 sm:mb-10 sm:w-1/4 lg:w-60">
							<a href="{`/search?categories=${encodeURIComponent(m?.name)}`}">
								<div
									class="mb-3 font-medium sm:text-lg
									{m.children && m.children.length ? 'border-b border-gray-300 pb-3' : ''}">
									{m.name}
								</div>
							</a>

							{#if m && m.children}
								<ul class="flex flex-col space-y-2">
									{#each m.children as mm}
										<li class="text-sm font-light">
											<a
												href="/search?categories={encodeURIComponent(mm?.name)}"
												class="link-underline link-underline-black pb-1">
												{mm.name}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		{:else}
			<div class="flex items-center justify-center" style="height: 60vh;">
				<div class="m-10 flex flex-col items-center justify-center space-y-5">
					<div>
						<ImageLoader
							src="/no/no-data-availible.png"
							alt="No data availible"
							class="h-20 w-20 object-contain text-xs" />
					</div>

					<p class="text-center text-gray-500">{$t('general.no_data_found')}</p>
				</div>
			</div>
		{/if}
	</div>
</div>

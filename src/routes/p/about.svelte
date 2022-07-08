<style>
@media (max-width: 1024px) {
	.h-rem {
		height: 55rem;
	}
}
@media (min-width: 1024px) {
	.h-rem {
		height: 30rem;
	}
}
</style>

<script>
import Image from '$lib/components/Image/Image.svelte'
import ImageLoader from '$lib/components/Image/ImageLoader.svelte'
import SEO from '$lib/components/SEO/index.svelte'
import HeadingUnderline from '$lib/HeadingUnderline.svelte'
import PrimaryButton from '$lib/ui/PrimaryButton.svelte'
import { store } from '$lib/util'

const seoProps = {
	title: 'About ',
	metadescription:
		'This is a business directory and listing Platform, it provides features like unlimited-level categories, custom fields, listing etc.'
}

let informations = [
	`AtoZ is a product of 7sys Global, a Cambodia based Javascript e-commerce Solution. It offers a platform to enlist businesses and get connected to the customers at a local and a global stage. Unlike the others, we believe in empowering the small and mid scale enterprises to have their footprints in the ecommerce space.`,

	`Started in 2016, AtoZ Cambodia has gained the trust of more than 850 happy clients to date. If you are an ecommerce listing owner, all you need to do is choose your goal and we will help you create your digital visibility and presence.`,

	`With a resolute determination to empower the SMEs, AtoZ Cambodia has been providing local search for different services in Cambodia. With more than 100 services and 800+ stores listed on the platform, AtoZ is all set to become the No.1 local search engine of IndoChinese countries of Thailand, Cambodia and Vietnam.`,

	`We believe in providing the best service to our users in the form of a platform to help their products and services reach their customers faster. Be it a large scale industrial machinery firm or a small travel agency, we at AtoZ Cambodia are committed to bridge the gap between the customers and the sellers.`
]
</script>

<SEO {...seoProps} />
<div class="min-h-screen bg-white">
	<div class="container mx-auto max-w-7xl">
		<div class="p-3 py-5 sm:p-10">
			<div
				class="mx-auto mb-5 flex max-w-max flex-col items-center justify-center text-gray-800 sm:mb-10">
				<h1 class="mb-2 text-xl font-bold text-primary-500 sm:text-2xl lg:text-3xl">About</h1>

				<HeadingUnderline />
			</div>

			<h2 class="text-center text-lg font-semibold capitalize tracking-wide sm:text-xl">
				Connect to the globe and get going
			</h2>
		</div>

		<ul class="mb-10 flex flex-col gap-5 px-4 sm:px-10">
			{#each informations as info}
				<li>
					{info}
				</li>
			{/each}
		</ul>

		<div class="mb-10 px-4 sm:mb-20 sm:px-10">
			<h2 class="mb-5 text-lg font-semibold capitalize tracking-wide sm:text-xl">Our Mission</h2>

			<ul>
				<li>
					We at AtoZ Cambodia are on a mission to create a common stage for both the sellers and the
					buyers in the local market to let them come together and interact with each other and
					ultimately becoming a part of a market system with equal contribution from small and large
					business entities to local and global customers
				</li>
			</ul>
		</div>
	</div>

	<div class="h-rem relative overflow-hidden bg-gray-800">
		<div class="h-full w-full">
			<ImageLoader src="/mumbai.jpg" alt="mumbai" class="z-0 h-full w-full object-cover" />
		</div>

		<div
			class="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-70 text-center font-semibold text-white">
			<div
				class="container mx-auto flex h-full max-w-7xl flex-col items-center justify-center space-y-5 p-2 tracking-wide">
				<div class="mb-5">
					<h1 class="mb-3 text-3xl sm:text-4xl">Misiki Ventures Co. Ltd.</h1>

					<h1 class="mb-2 text-xl sm:text-2xl">Poland</h1>

					<hr class="mx-auto h-1 w-10 rounded-full bg-white" />
				</div>

				<div class="grid grid-cols-1 items-start justify-between gap-5 px-5 lg:grid-cols-4">
					<!-- Address -->

					<div class="col-span-1 flex flex-col items-center justify-center font-normal">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mb-3 h-10 w-10"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							></path>
						</svg>

						<h3 class="mb-2 text-base md:text-lg">Mailing Address</h3>

						<h4 class="text-sm text-gray-200">
							Misiki Ventures Co. Ltd., ul. Frezerów 3, 20-209 Lublin, Poland. KRS 0000746720, REGON
							381143827 NIP 9462683038
						</h4>
					</div>

					<!-- Contact Number -->

					<div class="col-span-1 flex flex-col items-center justify-center font-normal ">
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							class="mb-3 h-10 w-10">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							></path>
						</svg>

						<h3 class="mb-2 text-base md:text-lg">Contact Number</h3>

						<h4 class="text-sm text-gray-200">
							+48 792208442 <br />
							+1 215 254 5101 <br />
							+380 (63) 682 76 74
						</h4>
					</div>

					<!--  Email Address -->

					<div class="col-span-1 flex flex-col items-center justify-center font-normal">
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							class="mb-3 h-10 w-10">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							></path>
						</svg>

						<h3 class="mb-2 text-base md:text-lg">Email Address</h3>

						<h4 class="text-sm text-gray-200">support@misiki.tech</h4>
					</div>

					<!--  WebSite -->

					<div class="col-span-1 flex flex-col items-center justify-center  font-normal">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mb-3 h-10 w-10"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
							></path>
						</svg>

						<h3 class="mb-2 text-base md:text-lg">WebSite</h3>

						<a
							href="http://"
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-200 hover:text-indigo-500">
							Misiki
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="p-3 py-5 sm:p-10 sm:py-20">
		<div class="container mx-auto max-w-7xl">
			<h2 class="text-center text-2xl font-medium md:text-4xl">Experience Work As A Innovator!</h2>

			<p class="my-3 flex justify-center">----- ¤ ----- ¤ ----- ¤ -----</p>

			<p class="mb-10 flex justify-center text-center tracking-wide">
				At Misiki, we don’t just offer jobs, but a career. If you are crazy about work and party,
				then we are waiting for you, eagerly!
			</p>

			<div class="relative mx-auto max-w-max">
				<a
					href="https://misiki.tech/careers/open-positions"
					target="_blank"
					rel="noopener noreferrer">
					<PrimaryButton type="button" roundedFull class="uppercase">Apply Now</PrimaryButton>
				</a>

				<div class="absolute top-1 right-1 -m-0.5 h-3 w-3 animate-ping rounded-full bg-primary-500">
				</div>
			</div>
		</div>
	</div>
</div>

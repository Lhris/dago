<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import LogoStrip from '$lib/components/LogoStrip.svelte';
	import Services from '$lib/components/Services.svelte';
	import Process from '$lib/components/Process.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const title = 'UniFi Books — Bookkeeping that actually adds up';
	const description =
		'Friendly, reliable bookkeeping for small businesses. Tidy books, clear numbers, and zero month-end stress. Book a free consultation.';
</script>

<svelte:head>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Nav />

<main>
	<Hero />
	<LogoStrip />
	<Services />
	<Process />
	<Stats />
	<Pricing />
	<Testimonials />
	<CTA />
</main>

<Footer />

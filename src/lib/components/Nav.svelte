<script lang="ts">
	import Logo from './Logo.svelte';

	let open = $state(false);

	const links = [
		{ href: '#services', label: 'Services' },
		{ href: '#how-it-works', label: 'How it works' },
		{ href: '#pricing', label: 'Pricing' },
		{ href: '#reviews', label: 'Reviews' }
	];

	const close = () => (open = false);
</script>

<header
	class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md"
>
	<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
		<a href="#top" onclick={close} class="flex items-center gap-2.5" aria-label="UniFi Books home">
			<Logo size={30} />
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="hidden items-center md:flex">
			<a
				href="#contact"
				class="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-600/25 transition-colors hover:bg-brand-700"
			>
				Book a call
			</a>
		</div>

		<button
			type="button"
			onclick={() => (open = !open)}
			class="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
			aria-label="Toggle menu"
			aria-expanded={open}
		>
			{#if open}
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
					<path d="M6 6l12 12M18 6L6 18" />
				</svg>
			{:else}
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
					<path d="M4 7h16M4 12h16M4 17h16" />
				</svg>
			{/if}
		</button>
	</nav>

	{#if open}
		<div class="border-t border-slate-200/70 bg-white md:hidden">
			<div class="space-y-1 px-6 py-4">
				{#each links as link (link.href)}
					<a
						href={link.href}
						onclick={close}
						class="block rounded-lg px-2 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
					>
						{link.label}
					</a>
				{/each}
				<a
					href="#contact"
					onclick={close}
					class="mt-2 block rounded-full bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
				>
					Book a call
				</a>
			</div>
		</div>
	{/if}
</header>

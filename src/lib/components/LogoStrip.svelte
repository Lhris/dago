<script lang="ts">
	import { inview } from '$lib/actions/inview';

	const companies = ['Northwind', 'Bluebird Café', 'Forge Studio', 'Harborlight', 'Maple & Co'];
</script>

<section class="border-y border-slate-100 bg-slate-50/60">
	<div class="mx-auto max-w-6xl px-6 py-10" use:inview>
		<p class="text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
			Trusted by growing businesses across the country
		</p>
		<div class="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
			{#each companies as name (name)}
				<span class="font-display text-lg font-bold tracking-tight text-slate-400 sm:text-xl">
					{name}
				</span>
			{/each}
		</div>
	</div>
</section>

<script lang="ts">
	import { inview } from '$lib/actions/inview';

	const stats = [
		{ value: '$120M+', label: 'Reconciled for clients' },
		{ value: '200+', label: 'Businesses on the books' },
		{ value: '< 1 day', label: 'Average response time' },
		{ value: '12 yrs', label: 'Keeping books tidy' }
	];
</script>

<section class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
	<div
		use:inview
		class="grid grid-cols-2 gap-y-10 rounded-3xl border border-slate-200/80 bg-white px-6 py-10 sm:px-10 lg:grid-cols-4"
	>
		{#each stats as stat (stat.label)}
			<div class="text-center">
				<p class="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">{stat.value}</p>
				<p class="mt-1.5 text-sm text-slate-500">{stat.label}</p>
			</div>
		{/each}
	</div>
</section>

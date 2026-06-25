<script lang="ts">
	import { inview } from '$lib/actions/inview';

	type Service = { title: string; body: string; icon: string };

	// Icons are simple Lucide-style stroke paths, drawn in the markup below.
	const services: Service[] = [
		{
			title: 'Monthly bookkeeping',
			body: 'Every transaction categorized and reconciled, so your books are always current — never a scramble at year-end.',
			icon: 'book'
		},
		{
			title: 'Payroll',
			body: 'Pay your team and contractors accurately and on time, every cycle, without the paperwork or the guesswork.',
			icon: 'wallet'
		},
		{
			title: 'Tax prep & filing',
			body: 'Year-round, tax-ready books and clean filings handled in step with your CPA — no last-minute surprises.',
			icon: 'receipt'
		},
		{
			title: 'Reporting & advisory',
			body: 'Clear monthly reports plus a real human to help you read the numbers and make confident decisions.',
			icon: 'chart'
		}
	];
</script>

<section id="services" class="scroll-mt-20">
	<div class="mx-auto max-w-6xl px-6 py-20 lg:py-28">
		<div class="max-w-2xl" use:inview>
			<p class="text-sm font-semibold text-brand-600">What we do</p>
			<h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
				Everything your books need, handled
			</h2>
			<p class="mt-4 text-lg text-slate-600">
				One dedicated team for the whole back office — so the numbers stay tidy and you
				stay focused on the work you actually love.
			</p>
		</div>

		<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each services as service, i (service.title)}
				<div
					use:inview={{ delay: i * 70 }}
					class="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-slate-900/5"
				>
					<span
						class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white"
					>
						{#if service.icon === 'book'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
								<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
							</svg>
						{:else if service.icon === 'wallet'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5" />
								<path d="M16 12h.01" />
							</svg>
						{:else if service.icon === 'receipt'}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M4 2v20l2-1.5L8 22l2-1.5L12 22l2-1.5L16 22l2-1.5L20 22V2l-2 1.5L16 2l-2 1.5L12 2l-2 1.5L8 2 6 3.5 4 2z" />
								<path d="M8 8h8M8 12h6" />
							</svg>
						{:else}
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M3 3v18h18" />
								<path d="M7 14l3-3 3 3 5-6" />
							</svg>
						{/if}
					</span>

					<h3 class="mt-5 text-lg font-bold text-slate-900">{service.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-slate-600">{service.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

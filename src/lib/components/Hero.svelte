<script lang="ts">
	// Mini bar-chart heights (in %) for the snapshot card.
	const bars = [38, 52, 45, 64, 58, 82];
</script>

<section id="top" class="relative overflow-hidden">
	<!-- soft background decoration -->
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
		<div class="absolute -top-32 right-[-6rem] h-80 w-80 rounded-full bg-brand-200/45 blur-3xl"></div>
		<div class="absolute left-[-8rem] top-44 h-80 w-80 rounded-full bg-accent-soft/55 blur-3xl"></div>
	</div>

	<div class="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:gap-10 lg:py-28">
		<!-- copy -->
		<div>
			<span
				class="animate-rise inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm"
				style="animation-delay: 40ms"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
				Bookkeeping for small businesses
			</span>

			<h1
				class="animate-rise mt-5 text-4xl font-extrabold leading-[1.08] text-slate-900 sm:text-5xl lg:text-6xl"
				style="animation-delay: 90ms"
			>
				Bookkeeping that<br class="hidden sm:block" />
				<span class="text-brand-600">actually adds up.</span>
			</h1>

			<p
				class="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
				style="animation-delay: 150ms"
			>
				Tidy books, clear numbers, and zero month-end stress. unifibooks handles the
				day-to-day so you can get back to running your business.
			</p>

			<div
				class="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
				style="animation-delay: 210ms"
			>
				<a
					href="#contact"
					class="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/30"
				>
					Book a free consultation
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14M13 6l6 6-6 6" />
					</svg>
				</a>
				<a
					href="#how-it-works"
					class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
				>
					See how it works
				</a>
			</div>

			<div
				class="animate-rise mt-7 flex items-center gap-3 text-sm text-slate-500"
				style="animation-delay: 270ms"
			>
				<div class="flex">
					{#each Array(5) as _, i (i)}
						<svg class="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
							<path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9z" />
						</svg>
					{/each}
				</div>
				<span>Loved by <span class="font-semibold text-slate-700">200+</span> small businesses</span>
			</div>
		</div>

		<!-- visual: monthly snapshot card -->
		<div class="animate-rise relative mx-auto w-full max-w-md" style="animation-delay: 240ms">
			<!-- floating badge: top-left -->
			<div
				class="absolute -left-3 top-6 z-10 hidden items-center gap-2.5 rounded-2xl bg-white p-3 pr-4 shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5 sm:flex"
			>
				<span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M20 6L9 17l-5-5" />
					</svg>
				</span>
				<div>
					<p class="text-xs font-semibold text-slate-900">Books up to date</p>
					<p class="text-[11px] text-slate-500">Reconciled today</p>
				</div>
			</div>

			<!-- main card -->
			<div class="rounded-3xl bg-white p-6 shadow-2xl shadow-slate-900/[0.07] ring-1 ring-slate-900/5">
				<div class="flex items-start justify-between">
					<div>
						<p class="text-sm font-semibold text-slate-900">Monthly snapshot</p>
						<p class="text-xs text-slate-500">June 2026</p>
					</div>
					<span class="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
						+12.4%
					</span>
				</div>

				<div class="mt-6 flex h-32 items-end gap-2.5">
					{#each bars as h, i (i)}
						<div
							class="flex-1 rounded-t-md {i === bars.length - 1 ? 'bg-accent' : 'bg-brand-500/85'}"
							style="height: {h}%"
						></div>
					{/each}
				</div>

				<div class="mt-6 space-y-3">
					<div class="flex items-center justify-between text-sm">
						<span class="text-slate-500">Income</span>
						<span class="font-semibold text-slate-900">$48,200</span>
					</div>
					<div class="flex items-center justify-between text-sm">
						<span class="text-slate-500">Expenses</span>
						<span class="font-semibold text-slate-900">$29,750</span>
					</div>
					<div class="border-t border-slate-100 pt-3">
						<div class="flex items-center justify-between">
							<span class="text-sm font-medium text-slate-700">Net profit</span>
							<span class="font-display text-lg font-bold text-slate-900">$18,450</span>
						</div>
					</div>
				</div>
			</div>

			<!-- floating chip: bottom-right -->
			<div
				class="absolute -bottom-4 -right-3 z-10 hidden rounded-2xl bg-brand-600 p-3.5 text-white shadow-xl shadow-brand-600/30 sm:block"
			>
				<p class="text-[11px] font-medium text-brand-100">Cash flow</p>
				<p class="font-display text-lg font-bold">Healthy</p>
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	import { inview } from '$lib/actions/inview';

	const reviews = [
		{
			quote:
				'They turned our shoebox of receipts into books we finally understand. Month-end went from total dread to a five-minute review.',
			name: 'Maya Rodriguez',
			role: 'Owner, Bluebird Café',
			initials: 'MR'
		},
		{
			quote:
				'Our dedicated bookkeeper feels like part of the team. Clean reports every month and a real answer whenever I have a question.',
			name: 'Daniel Osei',
			role: 'Founder, Forge Studio',
			initials: 'DO'
		},
		{
			quote:
				'Switching to UniFi Books paid for itself in the first quarter. Payroll and taxes just… happen now. I stopped worrying about them.',
			name: 'Priya Nair',
			role: 'CEO, Northwind Goods',
			initials: 'PN'
		}
	];
</script>

<section id="reviews" class="scroll-mt-20 bg-slate-50/60">
	<div class="mx-auto max-w-6xl px-6 py-20 lg:py-28">
		<div class="mx-auto max-w-2xl text-center" use:inview>
			<p class="text-sm font-semibold text-brand-600">Reviews</p>
			<h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
				Small businesses, big sigh of relief
			</h2>
		</div>

		<div class="mt-12 grid gap-6 lg:grid-cols-3">
			{#each reviews as review, i (review.name)}
				<figure
					use:inview={{ delay: i * 80 }}
					class="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-7"
				>
					<div class="flex gap-0.5">
						{#each Array(5) as _, s (s)}
							<svg class="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
								<path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9z" />
							</svg>
						{/each}
					</div>

					<blockquote class="mt-4 grow text-[15px] leading-relaxed text-slate-700">
						“{review.quote}”
					</blockquote>

					<figcaption class="mt-6 flex items-center gap-3">
						<span
							class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-display text-sm font-bold text-brand-700"
						>
							{review.initials}
						</span>
						<div>
							<p class="text-sm font-semibold text-slate-900">{review.name}</p>
							<p class="text-xs text-slate-500">{review.role}</p>
						</div>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

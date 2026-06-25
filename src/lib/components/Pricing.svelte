<script lang="ts">
	import { inview } from '$lib/actions/inview';

	type Plan = {
		name: string;
		price: string;
		cadence: string;
		blurb: string;
		features: string[];
		featured: boolean;
		cta: string;
	};

	const plans: Plan[] = [
		{
			name: 'Starter',
			price: '$249',
			cadence: '/mo',
			blurb: 'For solo founders & new businesses finding their feet.',
			features: [
				'Up to 100 transactions / mo',
				'Monthly reconciliation',
				'QuickBooks or Xero included',
				'Monthly financial reports',
				'Email support'
			],
			featured: false,
			cta: 'Get started'
		},
		{
			name: 'Growth',
			price: '$499',
			cadence: '/mo',
			blurb: 'For growing teams that need more hands on the books.',
			features: [
				'Up to 300 transactions / mo',
				'Everything in Starter',
				'Accounts payable & receivable',
				'Payroll for up to 10 people',
				'A dedicated bookkeeper',
				'Priority support'
			],
			featured: true,
			cta: 'Get started'
		},
		{
			name: 'Scale',
			price: '$899',
			cadence: '/mo',
			blurb: 'For established businesses with more moving parts.',
			features: [
				'Unlimited transactions',
				'Everything in Growth',
				'Cash-flow & advisory calls',
				'Tax-ready year-end package',
				'Multi-entity support',
				'Slack + same-day support'
			],
			featured: false,
			cta: 'Talk to us'
		}
	];
</script>

<section id="pricing" class="scroll-mt-20">
	<div class="mx-auto max-w-6xl px-6 py-20 lg:py-28">
		<div class="mx-auto max-w-2xl text-center" use:inview>
			<p class="text-sm font-semibold text-brand-600">Pricing</p>
			<h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
				Simple, flat monthly pricing
			</h2>
			<p class="mt-4 text-lg text-slate-600">
				No hourly billing and no surprises. Pick the plan that fits today and change it
				whenever you grow.
			</p>
		</div>

		<div class="mt-14 grid items-start gap-6 lg:grid-cols-3">
			{#each plans as plan, i (plan.name)}
				<div
					use:inview={{ delay: i * 80 }}
					class={'relative flex flex-col rounded-3xl p-7 ' +
						(plan.featured
							? 'bg-brand-600 text-white shadow-2xl shadow-brand-600/25 lg:-mt-4 lg:pb-9'
							: 'border border-slate-200/80 bg-white')}
				>
					{#if plan.featured}
						<span
							class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-slate-900 shadow-sm"
						>
							Most popular
						</span>
					{/if}

					<h3
						class={'font-display text-lg font-bold ' +
							(plan.featured ? 'text-white' : 'text-slate-900')}
					>
						{plan.name}
					</h3>
					<p class={'mt-1 text-sm ' + (plan.featured ? 'text-brand-100' : 'text-slate-500')}>
						{plan.blurb}
					</p>

					<div class="mt-5 flex items-baseline gap-1">
						<span
							class={'font-display text-4xl font-extrabold ' +
								(plan.featured ? 'text-white' : 'text-slate-900')}
						>
							{plan.price}
						</span>
						<span class={'text-sm ' + (plan.featured ? 'text-brand-100' : 'text-slate-500')}>
							{plan.cadence}
						</span>
					</div>

					<a
						href="#contact"
						class={'mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ' +
							(plan.featured
								? 'bg-white text-brand-700 hover:bg-brand-50'
								: 'bg-brand-600 text-white hover:bg-brand-700')}
					>
						{plan.cta}
					</a>

					<ul class="mt-7 space-y-3">
						{#each plan.features as feature (feature)}
							<li class="flex items-start gap-2.5 text-sm">
								<svg
									class={'mt-0.5 h-4 w-4 shrink-0 ' + (plan.featured ? 'text-accent' : 'text-brand-600')}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.4"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M20 6L9 17l-5-5" />
								</svg>
								<span class={plan.featured ? 'text-brand-50' : 'text-slate-600'}>{feature}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<p class="mt-10 text-center text-sm text-slate-500" use:inview>
			Every plan includes free onboarding and no long-term contracts.
			<a href="#contact" class="font-semibold text-brand-600 hover:text-brand-700">
				Not sure which fits? Book a free call →
			</a>
		</p>
	</div>
</section>

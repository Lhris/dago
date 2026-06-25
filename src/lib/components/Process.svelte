<script lang="ts">
	import { inview } from '$lib/actions/inview';

	const steps = [
		{
			title: 'Connect your accounts',
			body: 'Securely link your bank, cards, and tools in a few clicks. We handle the migration and the heavy lifting.'
		},
		{
			title: 'We tidy the books',
			body: 'Your dedicated bookkeeper reconciles everything each month and flags only what genuinely needs you.'
		},
		{
			title: 'See clearly, every month',
			body: 'Get clean reports and plain-English answers — no jargon, no surprises, just numbers you can trust.'
		}
	];
</script>

<section id="how-it-works" class="scroll-mt-20 bg-slate-50/60">
	<div class="mx-auto max-w-6xl px-6 py-20 lg:py-28">
		<div class="mx-auto max-w-2xl text-center" use:inview>
			<p class="text-sm font-semibold text-brand-600">How it works</p>
			<h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
				Getting started takes about 15 minutes
			</h2>
			<p class="mt-4 text-lg text-slate-600">
				No messy spreadsheets to hand over and no awkward onboarding. Three simple steps and
				your books are off your plate.
			</p>
		</div>

		<div class="relative mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
			<!-- connecting line (desktop) -->
			<div
				aria-hidden="true"
				class="absolute left-[16.66%] right-[16.66%] top-6 hidden border-t-2 border-dashed border-slate-200 sm:block"
			></div>

			{#each steps as step, i (step.title)}
				<div class="relative text-center" use:inview={{ delay: i * 90 }}>
					<div
						class="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-bold text-white shadow-lg shadow-brand-600/25 ring-4 ring-slate-50"
					>
						{i + 1}
					</div>
					<h3 class="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
					<p class="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{step.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

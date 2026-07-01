<script lang="ts">
	import { inview } from '$lib/actions/inview';
</script>

<section id="contact" class="scroll-mt-20">
	<div class="mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
		<div
			use:inview
			class="relative overflow-hidden rounded-[2rem] bg-brand-600 px-6 py-16 text-center sm:px-12 lg:py-20"
		>
			<!-- decoration -->
			<div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-0">
				<div class="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"></div>
				<div class="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
			</div>

			<div class="relative mx-auto max-w-2xl">
				<h2 class="text-3xl font-extrabold text-white sm:text-4xl">
					Ready for books that actually add up?
				</h2>
				<p class="mx-auto mt-4 max-w-xl text-lg text-brand-100">
					Book a free 30-minute consultation. We'll review your current setup and show you
					exactly how we can help — no pressure, no jargon.
				</p>

				<div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<a
						href="mailto:hello@unifibooks.com?subject=Free%20consultation"
						class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 shadow-lg shadow-brand-900/20 transition-colors hover:bg-brand-50"
					>
						Book a free consultation
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M5 12h14M13 6l6 6-6 6" />
						</svg>
					</a>
					<a
						href="mailto:hello@unifibooks.com"
						class="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
					>
						hello@unifibooks.com
					</a>
				</div>

				<p class="mt-6 text-sm text-brand-100">Free • 30 minutes • No commitment</p>
			</div>
		</div>
	</div>
</section>

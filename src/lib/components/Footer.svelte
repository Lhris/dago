<script lang="ts">
	import Logo from './Logo.svelte';

	const columns = [
		{
			heading: 'Services',
			links: [
				{ label: 'Monthly bookkeeping', href: '#services' },
				{ label: 'Payroll', href: '#services' },
				{ label: 'Tax prep & filing', href: '#services' },
				{ label: 'Reporting & advisory', href: '#services' }
			]
		},
		{
			heading: 'Company',
			links: [
				{ label: 'How it works', href: '#how-it-works' },
				{ label: 'Pricing', href: '#pricing' },
				{ label: 'Reviews', href: '#reviews' },
				{ label: 'Book a call', href: '#contact' }
			]
		},
		{
			heading: 'Get in touch',
			links: [
				{ label: 'hello@unifibooks.com', href: 'mailto:hello@unifibooks.com' },
				{ label: '(555) 012-3456', href: 'tel:+15550123456' },
				{ label: 'Mon–Fri, 9–5', href: '#contact' }
			]
		}
	];
</script>

<footer class="border-t border-slate-200 bg-white">
	<div class="mx-auto max-w-6xl px-6 py-14">
		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
			<div class="lg:col-span-2">
				<a href="#top" class="flex items-center gap-2.5" aria-label="UniFi Books home">
					<Logo size={28} />
				</a>
				<p class="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
					Friendly, reliable bookkeeping for small businesses. Tidy books, clear numbers,
					zero stress.
				</p>
			</div>

			{#each columns as col (col.heading)}
				<div>
					<h3 class="font-display text-sm font-bold text-slate-900">{col.heading}</h3>
					<ul class="mt-4 space-y-2.5">
						{#each col.links as link (link.label)}
							<li>
								<a
									href={link.href}
									class="text-sm text-slate-500 transition-colors hover:text-brand-600"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div
			class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-7 sm:flex-row"
		>
			<p class="text-sm text-slate-400">© 2026 UniFi Books. All rights reserved.</p>
			<div class="flex gap-6">
				<a href="#top" class="text-sm text-slate-400 transition-colors hover:text-slate-700">Privacy</a>
				<a href="#top" class="text-sm text-slate-400 transition-colors hover:text-slate-700">Terms</a>
			</div>
		</div>
	</div>
</footer>

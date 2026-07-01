<script lang="ts">
	let { class: klass = '', size = 32 }: { class?: string; size?: number } = $props();
</script>

<svg
	class={klass}
	width={size}
	height={size}
	viewBox="0 0 32 32"
	role="img"
	aria-label="unifibooks logo"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect width="32" height="32" rx="8" fill="currentColor" />
	<rect x="8" y="17" width="3.6" height="7" rx="1.8" fill="#ffffff" />
	<rect x="14.2" y="13" width="3.6" height="11" rx="1.8" fill="#ffffff" />
	<rect x="20.4" y="10" width="3.6" height="14" rx="1.8" fill="#ffffff" />
	<circle cx="22.2" cy="9.4" r="3" fill="#f6a723" />
</svg>

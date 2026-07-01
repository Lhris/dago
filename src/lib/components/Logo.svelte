<script lang="ts">
	let { class: klass = '', size = 32 }: { class?: string; size?: number } = $props();
</script>

<img
	src="/unifi-logo.png"
	class={klass}
	height={size}
	alt="UniFi Books logo"
	style="height: {size}px; width: auto;"
/>

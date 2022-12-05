<svelte:options immutable />

<script lang="ts" context="module">
	import '../app.css';
</script>

<!-- svelte-ignore missing-declaration -->
<svelte:head>
	<meta name="description" content={PACKAGE_JSON.description} />
	<meta name="keywords" content={PACKAGE_JSON.keywords.join(', ')} />
</svelte:head>

<slot />

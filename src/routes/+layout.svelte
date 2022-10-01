<svelte:options immutable />

<script context="module">
	import Scene from '$lib/components/Scene.svelte';
	import '../app.css';
</script>

<Scene width="auto" height="auto" zoomAmount={10}>
	<slot />
</Scene>

<svelte:options immutable />

<script lang="ts" context="module">
	import '../app.css';
</script>

<script lang="ts">
	import Scene from '$lib/components/Scene.svelte';
</script>

<Scene width="auto" height="auto" zoomAmount={10}>
	<slot />
</Scene>

<svelte:options immutable />

<script lang="ts">
	import { vec2 } from 'gl-matrix';
	import Ellipse from './Ellipse.svelte';

	export let radius = 1;
	export let strokeStyle = 'solid';
	export let strokeOpacity = 1.0;
	export let weight = 2;
	export let color = '#000';
	export let fillOpacity = 0.15;

	let ellipseRadius = vec2.fromValues(radius, radius);
	$: ellipseRadius = vec2.set(ellipseRadius, radius, radius);
</script>

<Ellipse
	radius={ellipseRadius}
	{strokeStyle}
	{strokeOpacity}
	{weight}
	{color}
	{fillOpacity}
	{...$$restProps}
/>

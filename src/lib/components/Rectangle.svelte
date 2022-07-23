<svelte:options immutable />

<script lang="ts">
	import { vec2 } from 'gl-matrix';
	import Polygon from './Polygon.svelte';

	export let width = 1;
	export let height = 1;
	export let strokeStyle = 'solid';
	export let strokeOpacity = 1.0;
	export let weight = 2;
	export let color = '#000';
	export let fillOpacity = 0.15;

	let points = [
		vec2.fromValues(width * -0.5, height * -0.5),
		vec2.fromValues(width * -0.5, height * 0.5),
		vec2.fromValues(width * 0.5, height * 0.5),
		vec2.fromValues(width * 0.5, height * -0.5)
	];
	$: {
		points[0] = vec2.set(points[0], width * -0.5, height * -0.5);
		points[1] = vec2.set(points[1], width * -0.5, height * 0.5);
		points[2] = vec2.set(points[2], width * 0.5, height * 0.5);
		points[3] = vec2.set(points[3], width * 0.5, height * -0.5);
	}
</script>

<Polygon {points} {strokeStyle} {strokeOpacity} {weight} {color} {fillOpacity} {...$$restProps} />

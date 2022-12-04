<script lang="ts">
	import { getFromContext } from '$lib/context';
	import { mat2dToSVG } from '$lib/math';
	import { Transform } from '$lib/Transform';
	import { mat2d } from 'gl-matrix';
	import { PARENT } from './Entity.svelte';

	export let width = 1;
	export let height = 1;
	export let radius = 0;
	export let strokeStyle = 'solid';
	export let strokeOpacity = 1.0;
	export let weight = 2;
	export let color = '#000';
	export let fillOpacity = 0.15;

	const transform = getFromContext(PARENT);
	let matrix = mat2d.create();
	$: matrix = Transform.getMatrix(matrix, $transform);
</script>

<g transform={mat2dToSVG(matrix)}>
	<rect
		{...$$restProps}
		x={width * -0.5}
		y={height * -0.5}
		{width}
		{height}
		rx={radius}
		stroke-width={weight}
		stroke-dasharray={strokeStyle === 'dashed' ? '4,3' : undefined}
		stroke={color}
		fill={color}
		fill-opacity={fillOpacity}
		stroke-opacity={strokeOpacity}><slot /></rect
	></g
>

<style>
	rect {
		vector-effect: non-scaling-stroke;
	}
</style>

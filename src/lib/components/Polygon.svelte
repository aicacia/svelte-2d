<script lang="ts">
	import { getFromContext } from '$lib/context';
	import { mat2dToSVG } from '$lib/math';
	import { Transform } from '$lib/Transform';
	import { mat2d, type vec2 } from 'gl-matrix';
	import { PARENT } from './Entity.svelte';

	export let points: vec2[] = [];
	export let strokeStyle = 'solid';
	export let strokeOpacity = 1.0;
	export let weight = 2;
	export let color = '#000';
	export let fillOpacity = 0.1;

	const transform = getFromContext(PARENT);
	let matrix = mat2d.create();
	$: matrix = Transform.getMatrix(matrix, $transform);
</script>

<g transform={mat2dToSVG(matrix)}>
	<polygon
		{...$$restProps}
		points={points.map((p) => `${p[0]},${p[1]}`).join(' ')}
		stroke-width={weight}
		stroke-dasharray={strokeStyle === 'dashed' ? '4,3' : undefined}
		stroke={color}
		fill={color}
		fill-opacity={fillOpacity}
		stoke-opacity={strokeOpacity}
	/></g
>

<style>
	polygon {
		vector-effect: non-scaling-stroke;
	}
</style>

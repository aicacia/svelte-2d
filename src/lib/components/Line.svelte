<script lang="ts">
	import { getFromContext } from '$lib/context';
	import { mat2dToSVG } from '$lib/math';
	import { Transform } from '$lib/Transform';
	import { mat2d, type vec2 } from 'gl-matrix';
	import { PARENT } from './Entity.svelte';

	export let start: vec2;
	export let end: vec2;
	export let strokeStyle = 'solid';
	export let strokeOpacity = 1.0;
	export let weight = 2;
	export let color = '#000';

	const transform = getFromContext(PARENT);
	let matrix = mat2d.create();
	$: matrix = Transform.getMatrix(matrix, $transform);
</script>

<g transform={mat2dToSVG(matrix)}>
	<line
		x1={start[0]}
		y1={start[1]}
		x2={end[0]}
		y2={end[1]}
		stroke-width={weight}
		stroke-dasharray={strokeStyle === 'dashed' ? '4,3' : undefined}
		stroke={color}
		stoke-opacity={strokeOpacity}
	/>
</g>

<style>
	line {
		vector-effect: non-scaling-stroke;
	}
</style>

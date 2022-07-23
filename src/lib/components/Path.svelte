<script lang="ts">
	import { getFromContext } from '$lib/context';
	import { mat2dToSVG } from '$lib/math';
	import { Transform } from '$lib/Transform';
	import { mat2d, type vec2 } from 'gl-matrix';
	import { PARENT } from './Entity.svelte';

	export let path: vec2[] = [];
	export let strokeStyle = 'solid';
	export let strokeOpacity = 1.0;
	export let weight = 2;
	export let color = '#000';
	export let fill = 'none';

	const transform = getFromContext(PARENT);
	let matrix = mat2d.create();
	$: matrix = Transform.getMatrix(matrix, $transform);

	let d = '';
	$: if (path.length) {
		d = `M${path[0][0]},${path[0][1]}`;
		for (let i = 1; i < path.length; i++) {
			d += `L${path[i][0]},${path[i][1]}`;
		}
	}
</script>

<g transform={mat2dToSVG(matrix)}>
	<path
		{d}
		{fill}
		stroke-width={weight}
		stroke-dasharray={strokeStyle === 'dashed' ? '4,3' : undefined}
		stroke={color}
		stoke-opacity={strokeOpacity}
	/>
</g>

<style>
	path {
		vector-effect: non-scaling-stroke;
	}
</style>

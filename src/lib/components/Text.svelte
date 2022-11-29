<script lang="ts">
	import { getFromContext } from '$lib/context';
	import { mat2dToSVG } from '$lib/math';
	import { Transform } from '$lib/Transform';
	import { mat2d, vec2 } from 'gl-matrix';
	import { PARENT } from './Entity.svelte';

	export let position: vec2 = vec2.create();
	export let size = 1;

	const transform = getFromContext(PARENT);
	let matrix = mat2d.create();
	$: matrix = Transform.getMatrix(matrix, $transform);
</script>

<g transform={mat2dToSVG(matrix)}
	><text x={position[0]} y={position[1]} style="font-size:{size}px"><slot /></text></g
>

<style>
	text {
		transform: scale(1, -1);
	}
</style>

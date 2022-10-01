<script lang="ts">
	import { getFromContext } from '$lib/context';
	import { mat2dToSVG } from '$lib/math';
	import { Transform } from '$lib/Transform';
	import { mat2d, vec2 } from 'gl-matrix';
	import { PARENT } from './Entity.svelte';

	export let radius: vec2 = vec2.fromValues(1, 1);
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
	<ellipse
		{...$$restProps}
		cx={0}
		cy={0}
		rx={Math.abs(radius[0])}
		ry={Math.abs(radius[1])}
		stroke-width={weight}
		stroke-dasharray={strokeStyle === 'dashed' ? '4,3' : undefined}
		stroke={color}
		fill={color}
		fill-opacity={fillOpacity}
		stroke-opacity={strokeOpacity}
	/></g
>

<style>
	ellipse {
		vector-effect: non-scaling-stroke;
	}
</style>

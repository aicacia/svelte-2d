<script lang="ts">
	import { getFromContext } from '$lib/context';
	import { Transform } from '$lib/Transform';
	import { mat2d, vec2 } from 'gl-matrix';
	import { PARENT } from './Entity.svelte';
	import Path from './Path.svelte';
	import { MAX, MIN, ZOOM_AMOUNT } from './Scene.svelte';

	export let fn: (x: number) => number;
	export let strokeStyle = 'solid';
	export let strokeOpacity = 1.0;
	export let weight = 2;
	export let color = '#000';
	export let fill = 'none';

	const transform = getFromContext(PARENT);
	const min = getFromContext(MIN);
	const max = getFromContext(MAX);
	const zoomAmount = getFromContext(ZOOM_AMOUNT);

	let matrix = mat2d.create();
	$: matrix = Transform.getMatrix(matrix, $transform);
	$: minX = -matrix[4] + $min[0];
	$: maxX = -matrix[4] + $max[0];
	$: step = ($zoomAmount / 2) * 0.05;

	let path: vec2[] = [];
	$: {
		let count = 0;
		for (let x = minX; x <= maxX + step; x += step) {
			const point = path[count++];
			const y = fn(x);
			if (point) {
				vec2.set(point, x, y);
			} else {
				path.push(vec2.fromValues(x, y));
			}
		}
		path.length = count;
	}
</script>

<Path {path} {strokeStyle} {strokeOpacity} {weight} {color} {fill} />

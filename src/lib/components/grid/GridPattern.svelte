<script lang="ts">
	import { getFromContext } from '$lib/context';
	import { range } from '@aicacia/range';
	import { SCALE_X, SCALE_Y } from '../Scene.svelte';

	export let id: string | undefined;
	export let xLines: number | false = 1;
	export let yLines: number | false = 1;
	export let xSubdivisions: number | false = 1;
	export let ySubdivisions: number | false = 1;
	export let color = '#888';
	export let subdivisionColor = '#aaa';

	const scaleX = getFromContext(SCALE_X);
	const scaleY = getFromContext(SCALE_Y);

	$: width = $scaleX(xLines || 1);
	$: height = -$scaleY(yLines || 1);

	let xs: number[] = [];
	$: if (xSubdivisions && xSubdivisions > 1) {
		const pixelXDistance = width / xSubdivisions;
		xs = range(0, width + pixelXDistance * 1.1, pixelXDistance)
			.iter()
			.toArray();
	}

	let ys: number[] = [];
	$: if (ySubdivisions && ySubdivisions > 1) {
		const pixelYDistance = height / ySubdivisions;
		ys = range(0, height + pixelYDistance * 1.1, pixelYDistance)
			.iter()
			.toArray();
	}
</script>

<pattern {id} x="0" y="0" {width} {height} patternUnits="userSpaceOnUse">
	{#each xs as x}
		<line x1={x} y1={0} x2={x} y2={height} stroke={subdivisionColor} />
	{/each}
	{#each ys as y}
		<line y1={y} x1={0} y2={y} x2={width} stroke={subdivisionColor} />
	{/each}

	{#if xLines}
		<line x1={0} y1={0} x2={0} y2={height} stroke={color} />
		<line x1={width} y1={0} x2={width} y2={height} stroke={color} />
	{/if}
	{#if yLines}
		<line x1={0} y1={0} x2={width} y2={0} stroke={color} />
		<line x1={0} y1={height} x2={width} y2={height} stroke={color} />
	{/if}
</pattern>

<style>
	line {
		vector-effect: non-scaling-stroke;
	}
</style>

<script lang="ts" context="module">
	let incrementer = 0;

	const DEFAULT_AXIS_OPTIONS: Partial<IAxisOptions> = {
		axis: true,
		lines: 1,
		labels: (x: number) => x
	};
</script>

<script lang="ts">
	import XLabels from './XLabels.svelte';
	import YLabels from './YLabels.svelte';
	import GridPattern from './GridPattern.svelte';
	import type { IAxisOptions } from '$lib/types';
	import { getFromContext } from '$lib/context';
	import { HEIGHT, OFFSET, PIXEL_MATRIX, WIDTH } from '../Scene.svelte';
	import { vec2 } from 'gl-matrix';

	export let color = '#000';
	export let subdivisions: number | false = false;
	export let xAxis: Partial<IAxisOptions> = {
		subdivisions,
		...DEFAULT_AXIS_OPTIONS
	};
	export let yAxis: Partial<IAxisOptions> = {
		subdivisions,
		...DEFAULT_AXIS_OPTIONS
	};

	const id = `svelte-2d-grid-pattern-${incrementer++}`;

	$: xAxisOptions = {
		subdivisions,
		...DEFAULT_AXIS_OPTIONS,
		...xAxis
	} as IAxisOptions;
	$: yAxisOptions = {
		subdivisions,
		...DEFAULT_AXIS_OPTIONS,
		...yAxis
	} as IAxisOptions;

	const width = getFromContext(WIDTH);
	const height = getFromContext(HEIGHT);
	const offset = getFromContext(OFFSET);
	const pixelMatrix = getFromContext(PIXEL_MATRIX);

	let position = vec2.create();
	$: position = vec2.transformMat2d(position, $offset, $pixelMatrix);
	$: x = position[0];
	$: y = -position[1];
	$: w = $width;
	$: h = $height;
</script>

<defs>
	<GridPattern
		{id}
		xLines={xAxisOptions.lines}
		yLines={yAxisOptions.lines}
		xSubdivisions={xAxisOptions.subdivisions}
		ySubdivisions={yAxisOptions.subdivisions}
	/>
</defs>

<rect fill={`url(#${id})`} x={x - w} y={y - h} width={w * 2} height={h * 2} />

{#if xAxis.labels}
	<XLabels labelMaker={xAxisOptions.labels} separation={xAxisOptions.lines || 1} />
{/if}
{#if yAxis.labels}
	<YLabels labelMaker={yAxisOptions.labels} separation={yAxisOptions.lines || 1} />
{/if}

{#if xAxisOptions.axis}
	<line x1={x - w} x2={x + w} y1={0} y2={0} class="transform-y-to-center" stroke={color} />
{/if}

{#if yAxisOptions.axis}
	<line x1={0} x2={0} y1={y - h} y2={y + h} class="transform-x-to-center" stroke={color} />
{/if}

<style>
	line {
		vector-effect: non-scaling-stroke;
	}
</style>

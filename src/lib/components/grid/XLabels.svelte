<script lang="ts">
	import { getFromContext } from '$lib/context';
	import type { ILabelMaker } from '$lib/types';
	import { snappedRange } from '$lib/utils';
	import { X_PANES } from './Grid.svelte';
	import { SCALE_X } from '../Scene.svelte';

	export let separation: number;
	export let labelMaker: ILabelMaker | false;

	const xPanes = getFromContext(X_PANES);
	const scaleX = getFromContext(SCALE_X);

	$: xs = snappedRange(
		$xPanes[0][0] - separation,
		$xPanes[$xPanes.length - 1][1] + separation,
		separation
	)
		.filter((x) => Math.abs($scaleX(x) - $scaleX(0)) > 1)
		.toArray();
</script>

<g>
	{#each xs as x}
		<text x={$scaleX(x)} y={5} alignment-baseline="hanging" text-anchor="middle">
			{labelMaker ? labelMaker(x) : x}
		</text>
	{/each}
</g>

<style>
	g {
		paint-order: stroke;
		stroke-width: 1px;
		stroke-opacity: 0.5;
	}
	text {
		vector-effect: non-scaling-stroke;
	}
</style>

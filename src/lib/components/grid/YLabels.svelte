<script lang="ts">
	import { getFromContext } from '$lib/context';
	import type { ILabelMaker } from '$lib/types';
	import { snappedRange } from '$lib/utils';
	import { SCALE_Y } from '../Scene.svelte';
	import { Y_PANES } from './Grid.svelte';

	export let separation: number;
	export let labelMaker: ILabelMaker | false;

	const yPanes = getFromContext(Y_PANES);
	const scaleY = getFromContext(SCALE_Y);

	$: ys = snappedRange(
		$yPanes[0][0] - separation,
		$yPanes[$yPanes.length - 1][1] + separation,
		separation
	).filter((y) => Math.abs($scaleY(y) - $scaleY(0)) > 1);
</script>

<g>
	{#each ys as y}
		<text x={5} y={$scaleY(y)} alignment-baseline="central">
			{labelMaker ? labelMaker(y) : y}
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

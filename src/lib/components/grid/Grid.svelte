<script lang="ts" context="module">
	import { createContextKey, getFromContext } from '$lib/context';
	import { mat2dToSVG } from '$lib/math';
	import { range } from '@aicacia/range';

	export const X_PANES = createContextKey<vec2[]>();
	export const X_PANE_RANGE = createContextKey<vec2>();
	export const Y_PANES = createContextKey<vec2[]>();
	export const Y_PANE_RANGE = createContextKey<vec2>();
</script>

<script lang="ts">
	import { vec2 } from 'gl-matrix';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { INVERSE_PIXEL_MATRIX, MAX, MIN } from '../Scene.svelte';
	import CartesianCoordinates from './CartesianCoordinates.svelte';

	const min = getFromContext(MIN);
	const max = getFromContext(MAX);
	const inversePixelMatrix = getFromContext(INVERSE_PIXEL_MATRIX);

	let base = 2;
	let xPanes: vec2[] = [];
	let xPaneRange = vec2.create();
	let yPanes: vec2[] = [];
	let yPaneRange = vec2.create();

	const xPanesContext = setContext(X_PANES, writable(xPanes));
	const xPaneRangeContext = setContext(X_PANE_RANGE, writable(xPaneRange));
	const yPanesContext = setContext(Y_PANES, writable(yPanes));
	const yPaneRangeContext = setContext(Y_PANE_RANGE, writable(yPaneRange));

	$: xSpan = $max[0] - $min[0];
	$: xStep = Math.pow(base, Math.round(Math.log10(xSpan) / Math.log10(base)));
	$: xLowerBound = Math.floor($min[0] / xStep) * xStep;
	$: xUpperBound = Math.ceil($max[0] / xStep) * xStep;
	$: xPanes = range(xLowerBound, xUpperBound, xStep)
		.iter()
		.map((xMin) => vec2.fromValues(xMin, xMin + xStep))
		.toArray();
	$: xPaneRange = vec2.set(xPaneRange, xLowerBound, xUpperBound);

	$: xPanesContext.set(xPanes);
	$: xPaneRangeContext.set(xPaneRange);

	$: ySpan = $max[1] - $min[1];
	$: yStep = Math.pow(base, Math.round(Math.log10(ySpan) / Math.log10(base)));
	$: yLowerBound = Math.floor($min[0] / yStep) * yStep;
	$: yUpperBound = Math.ceil($max[0] / yStep) * yStep;
	$: yPanes = range(yLowerBound, yUpperBound, yStep)
		.iter()
		.map((yMin) => vec2.fromValues(yMin, yMin + yStep))
		.toArray();
	$: yPaneRange = vec2.set(yPaneRange, yLowerBound, yUpperBound);

	$: yPanesContext.set(yPanes);
	$: yPaneRangeContext.set(yPaneRange);
</script>

<g transform={mat2dToSVG($inversePixelMatrix)}>
	<CartesianCoordinates />
</g>

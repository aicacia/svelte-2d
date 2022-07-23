<script lang="ts" context="module">
	const VEC2_0 = vec2.create();

	function getMouseWheelDirection(e: WheelEvent & { wheelDelta?: number }) {
		if (typeof e.detail == 'number' && e.detail !== 0) {
			if (e.detail > 0) {
				return -1;
			} else if (e.detail < 0) {
				return 1;
			}
		} else if (typeof e.wheelDelta === 'number') {
			if (e.wheelDelta < 0) {
				return -1;
			} else if (e.wheelDelta > 0) {
				return 1;
			}
		}
		return undefined;
	}

	export const ZOOM_AMOUNT = createContextKey<number>();
	export const SCALE_X = createContextKey<(x: number) => number>();
	export const SCALE_Y = createContextKey<(y: number) => number>();
	export const UNSCALE_X = createContextKey<(x: number) => number>();
	export const UNSCALE_Y = createContextKey<(y: number) => number>();
	export const SPAN = createContextKey<vec2>();
	export const PIXEL_MATRIX = createContextKey<mat2d>();
	export const INVERSE_PIXEL_MATRIX = createContextKey<mat2d>();
	export const CSS_SCALE = createContextKey<string>();
	export const MIN = createContextKey<vec2>();
	export const MAX = createContextKey<vec2>();
	export const WIDTH = createContextKey<number>();
	export const HEIGHT = createContextKey<number>();
	export const MAP_X = createContextKey<(x: number) => number>();
	export const MAP_Y = createContextKey<(y: number) => number>();
	export const OFFSET = createContextKey<vec2>();

	export const UPDATES_KEY = createContextKey<((ms: number) => void)[]>();

	export function onUpdate(fn: (ms: number) => void) {
		const updates = getContext<((ms: number) => void)[]>(UPDATES_KEY);

		updates.push(fn);

		onDestroy(() => {
			const index = updates.indexOf(fn);
			if (index >= 0) {
				updates.splice(index, 1);
			}
		});
	}
</script>

<script lang="ts">
	import { createContextKey } from '$lib/context';
	import type { FullGestureState } from '@use-gesture/vanilla';
	import { DragGesture, WheelGesture } from '@use-gesture/vanilla';
	import { vec2, mat2d } from 'gl-matrix';
	import raf, { cancel } from 'raf';
	import { onMount } from 'svelte';
	import { getContext, onDestroy, setContext } from 'svelte/internal';
	import { writable } from 'svelte/store';

	export let width: string | number = 500;
	export let height: string | number = 500;
	export let pan = true;
	export let zoom = true;
	export let zoomAmount = 1;

	let actualWidth: number = typeof width === 'number' ? width : 500;
	let actualHeight: number = typeof height === 'number' ? height : 500;
	$: desiredCssWidth = width === 'auto' ? '100%' : `${width}px`;
	$: desiredCssHeight = height === 'auto' ? '100%' : `${height}px`;

	let xAxisExtent: vec2 = vec2.fromValues(zoomAmount * -0.5, zoomAmount * 0.5);
	let yAxisExtent: vec2 = vec2.fromValues(zoomAmount * -0.5, zoomAmount * 0.5);

	$: {
		const aspect = actualWidth / actualHeight,
			halfZoomAmount = zoomAmount * 0.5,
			newZoomAmount = zoomAmount * aspect,
			halfNewZoomAmount = newZoomAmount * 0.5;

		xAxisExtent[0] = -halfNewZoomAmount;
		xAxisExtent[1] = halfNewZoomAmount;
		yAxisExtent[0] = -halfZoomAmount;
		yAxisExtent[1] = halfZoomAmount;
	}

	let offset = vec2.fromValues(0, 0);
	let min = vec2.fromValues(xAxisExtent[0], yAxisExtent[0]);
	let max = vec2.fromValues(xAxisExtent[1], yAxisExtent[1]);

	$: min = vec2.add(min, offset, vec2.set(VEC2_0, xAxisExtent[0], yAxisExtent[0]));
	$: max = vec2.add(max, offset, vec2.set(VEC2_0, xAxisExtent[1], yAxisExtent[1]));

	$: mapX = (x: number) => ((x - min[0]) / (max[0] - min[0])) * actualWidth;
	$: mapY = (y: number) => ((y - min[1]) / (max[1] - min[1])) * actualHeight;

	let span = vec2.create();
	$: span = vec2.sub(span, max, min);

	$: scaleX = (x: number) => (x / span[0]) * actualWidth;
	$: scaleY = (y: number) => (-y / span[1]) * actualHeight;
	$: unscaleX = (x: number) => (x / actualWidth) * span[0];
	$: unscaleY = (y: number) => (-y / actualHeight) * span[1];

	let pixelMatrix = mat2d.create();
	$: pixelMatrix = mat2d.fromScaling(pixelMatrix, vec2.set(VEC2_0, scaleX(1), scaleY(1)));

	let inversePixelMatrix = mat2d.create();
	$: inversePixelMatrix = mat2d.fromScaling(
		inversePixelMatrix,
		vec2.set(VEC2_0, unscaleX(1), unscaleY(1))
	);

	$: cssScale = `scale(${scaleX(1)} ${scaleY(1)})`;

	const updates: Array<(ms: number) => void> = [];
	let frame: number;
	function onUpdateHandler(ms: number) {
		for (const update of updates) {
			update(ms);
		}
		frame = raf(onUpdateHandler);
	}
	setContext(UPDATES_KEY, updates);

	const minWritable = setContext(MIN, writable(min));
	const maxWritable = setContext(MAX, writable(max));
	const widthWritable = setContext(WIDTH, writable(actualWidth));
	const heightWritable = setContext(HEIGHT, writable(actualHeight));
	const zoomAmountWritable = setContext(ZOOM_AMOUNT, writable(zoomAmount));
	const scaleXWritable = setContext(SCALE_X, writable(scaleX));
	const scaleYWritable = setContext(SCALE_Y, writable(scaleY));
	const unscaleXWritable = setContext(UNSCALE_X, writable(unscaleX));
	const unscaleYWritable = setContext(UNSCALE_Y, writable(unscaleY));
	const spanWritable = setContext(SPAN, writable(span));
	const pixelMatrixWritable = setContext(PIXEL_MATRIX, writable(pixelMatrix));
	const inversePixelMatrixWritable = setContext(INVERSE_PIXEL_MATRIX, writable(inversePixelMatrix));
	const cssScaleWritable = setContext(CSS_SCALE, writable(cssScale));
	const mapXWritable = setContext(MAP_X, writable(mapX));
	const mapYWritable = setContext(MAP_Y, writable(mapY));
	const offsetWritable = setContext(OFFSET, writable(offset));

	$: minWritable.set(min);
	$: maxWritable.set(max);
	$: widthWritable.set(actualWidth);
	$: heightWritable.set(actualHeight);
	$: zoomAmountWritable.set(zoomAmount);
	$: scaleXWritable.set(scaleX);
	$: scaleYWritable.set(scaleY);
	$: unscaleXWritable.set(unscaleX);
	$: unscaleYWritable.set(unscaleY);
	$: spanWritable.set(span);
	$: pixelMatrixWritable.set(pixelMatrix);
	$: inversePixelMatrixWritable.set(inversePixelMatrix);
	$: cssScaleWritable.set(cssScale);
	$: mapXWritable.set(mapX);
	$: mapYWritable.set(mapY);
	$: offsetWritable.set(offset);

	let element: HTMLDivElement;

	let startPoint = vec2.create();
	function onDrag(
		state: Omit<FullGestureState<'drag'>, 'event'> & {
			event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent;
		}
	) {
		if (!pan) {
			return;
		}
		const movement = vec2.transformMat2d(VEC2_0, state.movement, inversePixelMatrix);

		if (state.first) {
			startPoint = vec2.copy(startPoint, offset);
		}
		movement[1] = -movement[1];
		offset = vec2.sub(offset, startPoint, movement);
	}

	function onMouseWheel(
		state: Omit<FullGestureState<'wheel'>, 'event'> & {
			event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent;
		}
	) {
		if (!zoom || state.last) {
			return;
		}
		const wheelDirection = getMouseWheelDirection(state.event as WheelEvent);

		if (wheelDirection && (zoomAmount >= 3 || wheelDirection < 0)) {
			xAxisExtent = vec2.set(
				xAxisExtent,
				xAxisExtent[0] + wheelDirection,
				xAxisExtent[1] - wheelDirection
			);
			yAxisExtent = vec2.set(
				yAxisExtent,
				yAxisExtent[0] + wheelDirection,
				yAxisExtent[1] - wheelDirection
			);
			zoomAmount = Math.min(xAxisExtent[1] - xAxisExtent[0], yAxisExtent[1] - yAxisExtent[0]);
		}
	}

	onMount(() => {
		const dragGesture = new DragGesture(element, onDrag),
			wheelGesture = new WheelGesture(element, onMouseWheel);

		frame = raf(onUpdateHandler);

		return () => {
			dragGesture.destroy();
			wheelGesture.destroy();
			cancel(frame);
		};
	});
</script>

<div
	bind:this={element}
	bind:offsetWidth={actualWidth}
	bind:offsetHeight={actualHeight}
	class="scene"
	style={`width: ${desiredCssWidth}; height: ${desiredCssHeight}; touch-action: ${
		pan ? 'none' : 'auto'
	};`}
>
	<svg
		width={actualWidth}
		height={actualHeight}
		viewBox={`${-mapX(0)} ${-mapY(0)} ${actualWidth} ${actualHeight}`}
		preserveAspectRatio="xMidYMin"
		style={`width: ${width}; height: ${height};`}
	>
		<g transform={`matrix(${scaleX(1)},${0},${0},${scaleY(1)},${0},${0})`}>
			<slot />
		</g>
	</svg>
</div>

<style>
	.scene {
		display: block;
		overflow: hidden;
		background-color: transparent;
		user-select: none;
		font-family: sans-serif;
		font-variant-numeric: tabular-nums;
	}
</style>

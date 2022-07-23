<script lang="ts" context="module">
	const VEC2_0 = vec2.create();
</script>

<script lang="ts">
	import { getFromContext } from '$lib/context';
	import { mat2dToSVG } from '$lib/math';
	import { Transform } from '$lib/Transform';
	import type { FullGestureState } from '@use-gesture/vanilla';
	import { DragGesture } from '@use-gesture/vanilla';
	import { mat2d, mat2, vec2 } from 'gl-matrix';
	import { onMount } from 'svelte';
	import { PARENT } from './Entity.svelte';
	import { INVERSE_PIXEL_MATRIX } from './Scene.svelte';

	export let point: vec2 = vec2.create();
	export let radius = 0.075;
	export let color = '#0000f1';

	const parent = getFromContext(PARENT);
	let element: SVGGElement;
	let startPoint = vec2.create();
	let dragging = false;
	const inversePixelMatrix = getFromContext(INVERSE_PIXEL_MATRIX);

	let parentMatrix = mat2d.create();
	let parentRotationMatrix = mat2.create();

	$: parentMatrix = Transform.getMatrix(parentMatrix, $parent);
	$: parentRotationMatrix = mat2.set(
		parentRotationMatrix,
		parentMatrix[0],
		parentMatrix[1],
		parentMatrix[2],
		parentMatrix[3]
	);

	$: onDrag = (
		state: Omit<FullGestureState<'drag'>, 'event'> & {
			event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent;
		}
	) => {
		state.event?.stopPropagation();
		dragging = state.down;
		const movement = vec2.transformMat2d(VEC2_0, state.movement, $inversePixelMatrix);

		vec2.transformMat2(movement, movement, parentRotationMatrix);

		if (state.first) {
			startPoint = vec2.copy(startPoint, point);
		}
		point = vec2.add(point, startPoint, movement);
	};

	onMount(() => {
		const dragGesture = new DragGesture(element, onDrag);

		return () => {
			dragGesture.destroy();
		};
	});
</script>

<g bind:this={element} transform={mat2dToSVG(parentMatrix)}>
	<circle cx={0} cy={0} r={radius * 1.25} fill="transparent" />
	<circle
		class="point"
		cx={0}
		cy={0}
		r={radius}
		fill={color}
		stroke={color}
		stroke-opacity={0.25}
		class:draggable={dragging}
	/>
</g>

<style>
	g {
		touch-action: none;
		cursor: move;
	}
	circle {
		vector-effect: non-scaling-stroke;
	}
	.point {
		transition: transform 0.3s;
	}
	g:hover .point {
		transform: scale(1.5);
	}
</style>

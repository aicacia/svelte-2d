<script lang="ts">
	import { getFromContext } from '$lib/context';
	import { mat2dToSVG } from '$lib/math';
	import { Transform } from '$lib/Transform';
	import { mat2d } from 'gl-matrix';
	import { PARENT } from './Entity.svelte';

	export let href: string;
	export let size = 1;
	export let width: number | undefined = undefined;
	export let height: number | undefined = undefined;

	const transform = getFromContext(PARENT);
	let matrix = mat2d.create();
	$: matrix = Transform.getMatrix(matrix, $transform);

	let aspect: number;
	let x: number;
	let y: number;
	let imageSvg: SVGImageElement;
	let image: HTMLImageElement;
	let prevHref: string;
	$: if (imageSvg && prevHref !== href) {
		prevHref = href;
		if (!image) {
			image = new Image();
		}
		image.onload = () => {
			aspect = image.width / image.height;
			width = size;
			height = size * aspect;
			x = width * -0.5;
			y = height * -0.5;
		};
		image.src = href;
	}
</script>

<g transform={mat2dToSVG(matrix)}>
	{#key href}
		<image bind:this={imageSvg} {href} {x} {y} {width} {height} />
	{/key}
</g>

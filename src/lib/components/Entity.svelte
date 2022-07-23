<svelte:options accessors />

<script lang="ts" context="module">
	export const PARENT = createContextKey<Transform | undefined>();
</script>

<script lang="ts">
	import { createContextKey } from '$lib/context';
	import { composeMat2d } from '$lib/math';
	import { vec2 } from 'gl-matrix';
	import { getContext, onDestroy, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { Transform } from '../Transform';

	export let position: vec2 = vec2.create();
	export let scale: vec2 = vec2.fromValues(1, 1);
	export let rotation = 0;
	export let transfrom = new Transform();

	const parent = getContext<Writable<Transform>>(PARENT);
	if ($parent) {
		$parent.addChild(transfrom);
	}

	const transformWritable = writable(transfrom);
	setContext(PARENT, transformWritable);

	onDestroy(() => {
		transfrom.detach();
	});

	$: {
		composeMat2d(transfrom.matrix, position, scale, rotation);
		transformWritable.set(transfrom);
	}
	$: if ($parent) {
		transformWritable.set(transfrom);
	}
</script>

<slot />

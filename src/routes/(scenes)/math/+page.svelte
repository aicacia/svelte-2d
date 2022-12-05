<script lang="ts">
	import {
		MovablePoint,
		Rectangle,
		Entity,
		Transform,
		Grid,
		Line,
		Function,
		onUpdate
	} from 'svelte-2d';
	import { vec2 } from 'gl-matrix';
	import Image from '$lib/components/Image.svelte';
	import { base } from '$app/paths';
	import Text from '$lib/components/Text.svelte';

	let transfrom: Transform;
	let point = vec2.fromValues(0, 0);

	let orbitPoint = vec2.fromValues(1, 0);
	let orbitRadius = 1.5;
	onUpdate((ms) => {
		const s = ms * 0.001;
		orbitPoint = vec2.set(orbitPoint, orbitRadius * Math.sin(s), orbitRadius * Math.cos(s));
	});
</script>

<Grid />

<Entity bind:transfrom position={point}>
	<Function fn={(x) => (x * x) / 10} />
	<Rectangle width={1} height={1} radius={0.25} />
	<Entity position={vec2.fromValues(0.5, 0.5)}>
		<Rectangle width={1} height={0.5} />
		<MovablePoint bind:point />
	</Entity>
	<Line start={vec2.fromValues(0, 0)} end={orbitPoint} />
	<Entity position={orbitPoint}>
		<Image href={`${base}/favicon.png`} size={0.5} />
		<Text size={0.25} position={vec2.fromValues(-0.6, -0.25)}>Hello, world!</Text>
	</Entity>
</Entity>

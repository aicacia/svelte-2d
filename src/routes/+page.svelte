<script lang="ts">
	import {
		MovablePoint,
		Rectangle,
		Entity,
		Transform,
		Grid,
		Circle,
		Line,
		Function,
		onUpdate
	} from 'svelte-2d';
	import { vec2 } from 'gl-matrix';

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
	<Rectangle width={1} height={1} />
	<Entity position={vec2.fromValues(0.5, 0.5)}>
		<Rectangle width={1} height={0.5} />
		<MovablePoint bind:point />
	</Entity>
	<Entity position={orbitPoint}>
		<Circle radius={0.25} />
	</Entity>
	<Line start={vec2.fromValues(0, 0)} end={orbitPoint} />
</Entity>

import type { mat2d } from 'gl-matrix';
import { vec2 } from 'gl-matrix';

export function composeMat2d(out: mat2d, position: vec2, scale: vec2, rotation: number): mat2d {
	const sx = scale[0],
		sy = scale[1],
		c = Math.cos(rotation),
		s = Math.sin(rotation);

	out[0] = c * sx;
	out[1] = s * sx;
	out[2] = -s * sy;
	out[3] = c * sy;
	out[4] = position[0];
	out[5] = position[1];

	return out;
}

const extractScale_VEC2_0 = vec2.create();

export function extractScale(out: vec2, matrix: mat2d): vec2 {
	return vec2.set(
		out,
		vec2.len(vec2.set(extractScale_VEC2_0, matrix[0], matrix[1])),
		vec2.len(vec2.set(extractScale_VEC2_0, matrix[2], matrix[3]))
	);
}

export function getRotationFromMat2d(matrix: mat2d): number {
	return Math.atan2(matrix[2], matrix[0]);
}

export function decomposeMat2d(
	matrix: mat2d,
	position: vec2,
	scale: vec2
): [position: vec2, scale: vec2, rotation: number] {
	vec2.set(position, matrix[4], matrix[5]);
	extractScale(scale, matrix);
	return [position, scale, getRotationFromMat2d(matrix)];
}

export function mat2dToSVG(out: mat2d): string {
	return `matrix(${out[0]},${out[1]},${out[2]},${out[3]},${out[4]},${out[5]})`;
}

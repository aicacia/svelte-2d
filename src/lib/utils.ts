import { range } from '@aicacia/range';

export function snappedRange(min: number, max: number, step: number) {
	return range(Math.floor(min / step) * step, Math.ceil(max / step) * step, step)
		.iter()
		.toArray();
}

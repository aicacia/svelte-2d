export type ILabelMaker = (value: number) => number | string;

export interface IAxisOptions {
	axis: boolean;
	lines: number | false;
	subdivisions: number | false;
	labels: false | ILabelMaker;
}

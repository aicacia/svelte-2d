import { mat2d } from 'gl-matrix';

const MAT2D_0 = mat2d.create();

export class Transform {
	matrix = mat2d.create();
	parent: Transform | undefined;
	children: Transform[] = [];

	static getMatrix(out: mat2d, transform?: Transform) {
		return transform ? transform.getMatrix(out) : mat2d.identity(out);
	}

	getMatrix(out: mat2d) {
		mat2d.multiply(out, Transform.getMatrix(MAT2D_0, this.parent), this.matrix);
		return out;
	}

	addChild(child: Transform) {
		this.children.push(child);
		child.parent = this;
		return this;
	}
	removeChild(child: Transform) {
		const index = this.children.indexOf(child);
		if (index !== -1) {
			this.children.splice(index, 1);
			child.parent = undefined;
		}
		return this;
	}
	detach() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		return this;
	}
}

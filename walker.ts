import p5 from 'p5';

export default class Walker {
	x: number = this._x;
	y: number = this._y;

	constructor(
		private p: p5,
		private _x: number,
		private _y: number,
	) {}

	display(): void {
		this.p.noStroke().fill(255, 120, 153, 40).ellipse(this.x, this.y, 20);
	}

	step(): void {
		this.x = this.p.randomGaussian(500, 100);
		this.y = this.y;
	}
}
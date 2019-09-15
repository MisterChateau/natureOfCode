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
		const color = this.p.color(255, this.p.random(0, 122), this.p.random(0, 255), this.p.random(0, 255));
		this.p.stroke(0, 0, 0, 150).fill(color).ellipse(this.x, this.y, this.p.randomGaussian(30, 1));
	}

	step(): void {
		this.x = this.x + (this.p.randomGaussian(this.p.noise(this.x, this.y), 1) * Math.floor(this.p.random(0, 2)) ? -1 : 1);
		this.y = this.y + (this.p.randomGaussian(this.p.noise(this.x, this.y), 1) * Math.floor(this.p.random(0, 2)) ? -1 : 1);
	}
}
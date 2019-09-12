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
		this.p.stroke('#FF7899');
		this.p.ellipse(this.x, this.y, 30);
	}

	step(): void {
		const stepX = Math.floor(Math.random() * 3) - 1;
		const stepY = Math.floor(Math.random() * 3) - 1;
		this.x = this.x + stepX;
		this.y = this.y + stepY;
	}
}
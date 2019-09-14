import p5, { Vector } from 'p5';

export default class Mover {
	private location: Vector;
	private acceleration: Vector = this.p.createVector(0, 0);
	private velocity: Vector = this.p.createVector(0, 0);
	
	private canRebound: boolean = true;

	constructor(
		private p: p5,
		private screenWidth: number,
		private screenHeight: number,
		) {
			this.location = p.createVector(p.random(0, screenWidth), p.random(0, screenHeight));
		}

	move(): Mover {
		this.velocity.add(this.acceleration).limit(5);
		this.location.add(this.velocity);

		this.canRebound ? this.drawWithRebound() : this.draw();

		return this;
	}

	setVelocity(velocity: Vector): Mover {
		this.velocity = velocity;
		return this;
	}

	setRebound(rebound: boolean): Mover {
		this.canRebound = rebound;
		return this;
	}

	setAcceleration(acceleration: Vector): Mover {
		this.acceleration = acceleration;
		return this;
	}

	private rebound() {
		if (this.location.x >= this.screenWidth || this.location.x <= 0) {
			this.velocity.x = this.velocity.x * -1;
		}
		if (this.location.y >= this.screenHeight || this.location.y <= 0) {
			this.velocity.y = this.velocity.y * -1;
		}
	}

	private drawWithRebound() {
		this.rebound();
		this.p
			.noStroke()
			.ellipse(
				this.location.x,
				this.location.y,
				10,
			)
			.fill(this.color);
	}

	private draw() {
		this.location.x = this.location.x < this.screenWidth
			? this.location.x > 0 ? this.location.x : this.screenWidth
			: 0;
		this.location.y = this.location.y < this.screenHeight
			? this.location.y > 0 ? this.location.y : this.screenHeight
			: 0;

		this.p
			.noStroke()
			.ellipse(
				this.location.x,
				this.location.y,
				this.p.randomGaussian(15, 10),
			)
			.fill(this.color);
	}

	private get color() {
		return this.p.color(242, this.p.random(0, 255), 162, this.p.random(0, 255));
	}
}
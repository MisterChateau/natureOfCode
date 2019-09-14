import p5, { Vector } from 'p5';

export default class Mover {
	private location: Vector;
	private acceleration: Vector = this.p5.createVector(0, 0);
	private velocity: Vector = this.p5.createVector(0, 0).limit(10);
	
	private canRebound: boolean = true;

	constructor(
		private p5: p5,
		private screenWidth: number,
		private screenHeight: number,
		) {
			this.location = p5.createVector(p5.random(0, screenWidth), p5.random(0, screenHeight));
		}

	move(): Mover {
		this.velocity.add(this.acceleration);
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
		this.p5
			.noStroke()
			.ellipse(
				this.location.x,
				this.location.y,
				10,
			)
			.fill(this.color);
	}

	private draw() {
		this.location.x = this.location.x < this.screenWidth ? this.location.x : 0;
		this.location.y = this.location.y < this.screenHeight ? this.location.y : 0;

		this.p5
			.noStroke()
			.ellipse(
				this.location.x,
				this.location.y,
				10,
			)
			.fill(this.color);
	}

	private get color() {
		return this.p5.color(242, this.p5.random(0, 255), 162, this.p5.random(0, 255));
	}
}
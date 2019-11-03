import p5, { Vector } from 'p5';

export default class Mover {
	public readonly location: Vector;
	private acceleration: Vector = this.p.createVector(0, 0);
	private velocity: Vector = this.p.createVector(0, 0);
	
	private canRebound: boolean = true;

	public color: p5.Color;

	constructor(
		private p: p5,
		private screenWidth: number,
		private screenHeight: number,
		) {
			this.location = p.createVector(p.random(0 - screenWidth / 2, screenWidth / 2), p.random(0 - screenHeight / 2, screenHeight / 2));
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

	accelerate(acceleration: Vector): Mover {
		this.acceleration = acceleration;
		return this;
	}

	accelerateToDirection(target: Vector): Mover {
		const direction = target.sub(this.location);
		const normalized = direction.normalize();
		this.acceleration = normalized.div(10);
		return this;
	}

	private rebound() {
		if (this.location.x + 50 >= this.screenWidth / 2 || this.location.x <= 0 - this.screenWidth / 2) {
			this.velocity.x = this.velocity.x * -1;
		}
		if (this.location.y + 50 >= this.screenHeight / 2|| this.location.y <= 0 - this.screenHeight / 2) {
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
				10,
			)
			.fill(this.color);
	}

	setColor(color: p5.Color): Mover {
		this.color = color;
		return this;
	}
}
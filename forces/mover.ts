import p5, { Vector } from 'p5';

export default class Mover {
	public readonly location: Vector;
	private acceleration: Vector = this.p.createVector(0, 0);
	private velocity: Vector = this.p.createVector(0, 0);

	public mass: number = 1;
	public frictionCoefficient: number = 0.01;

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
		this.draw();

		this.acceleration.mult(0);

		return this;
	}

	applyForce(force: Vector) {
		this.acceleration.add(force.copy().div(this.mass));
		return this;
	}

	setVelocity(velocity: Vector): Mover {
		this.velocity = velocity;
		return this;
	}

	setMass(mass: number) {
		this.mass = mass;
		return this;
	}

	applyFriction() {
		// inverse direction * friction coeff: -1*coef*velocity
		const friction = this.velocity.copy().normalize().mult(-1 * this.frictionCoefficient);
		this.applyForce(friction);
	}

	accelerate(acceleration: Vector): Mover {
		this.acceleration = acceleration;
		return this;
	}

	accelerateToDirection(target: Vector): Mover {
		// vector distance (substraction) normalized
		const direction = target.sub(this.location);
		const normalized = direction.normalize();
		this.acceleration = normalized.div(10);
		return this;
	}

	private rebound() {
		if (this.location.x + 5 >= this.screenWidth / 2 || this.location.x <= 0 - this.screenWidth / 2) {
			this.velocity.x = this.velocity.x * -1;
		}
		if (this.location.y + 5 >= this.screenHeight / 2|| this.location.y <= 0 - this.screenHeight / 2) {
			this.velocity.y = this.velocity.y * -1;
		}
	}

	private draw() {
		this.rebound();

		this.p
			.noStroke()
			.ellipse(
				this.location.x,
				this.location.y,
				this.mass * 10,
			)
			.fill(this.color);
	}

	setColor(color: p5.Color): Mover {
		this.color = color;
		return this;
	}
}
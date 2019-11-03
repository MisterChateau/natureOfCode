import P5, { Color } from 'p5';
import Mover from './mover';
import p5 = require('p5');


let limit = 30;
document.addEventListener('DOMContentLoaded', () => {
	const control = document.querySelector('input');
	control.value = `${limit}`;
	control.addEventListener('change', () => (limit = Number(control.value)));
});

export default function sketch(p: P5) {
	const WIDTH = p.windowWidth;
	const HEIGHT = p.windowHeight;

	const gravity = p.createVector(0, 0.05);
	const wind = p.createVector(-0.04, -0.15);

	const movers: Mover[] = [];

	const bg = p.color(p.random(130, 200), p.random(20, 120), p.random(20, 200), 70);
	
	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT, 'webgl');
		p.frameRate(60);
	}
	
	p.draw = () => {
		p.background(bg);

		if (movers.length < limit) movers.push(
			new Mover(p, WIDTH, HEIGHT).setColor(p.color(242, p.random(30, 100), p.random(100, 255))).setMass(p.random(0.1, 4)),
		);

		movers.forEach((mover) => {
			mover.applyFriction();

			if (p.mouseIsPressed) {
				mover.applyForce(p.createVector(p.mouseX - WIDTH / 2, p.mouseY - HEIGHT / 2).sub(mover.location.x, mover.location.y).normalize());
			}

			mover
				.applyForce(
					gravity.copy().mult(mover.mass)
				).move();
		})
	}
}
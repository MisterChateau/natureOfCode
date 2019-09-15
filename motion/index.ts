import P5, { Color } from 'p5';
import Mover from './mover';

export default function sketch(p: P5) {
	const WIDTH = p.windowWidth;
	const HEIGHT = p.windowHeight;

	const movers: Mover[] = [];

	const limit = 2;

	const colors = [
		() => p.color(242, p.random(255),163, p.random(50, 150)),
		() => p.color(242, 92, p.random(255), p.random(50, 150)),
		() => p.color(p.random(255), 92, 163, p.random(50, 150)),
	];
	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT, 'p2d');
		p.background('#0433BF');
		p.frameRate(60);
	}
	p.draw = () => {
		if (movers.length < limit) movers.push(new Mover(p, WIDTH, HEIGHT));

		movers.forEach((mover, index) => {
			mover
			.setColor(mover.color ? mover.color : colors[index % 3]())
			.setRebound(false)
			.accelerateToDirection(index === 0 ? p.createVector(p.mouseX, p.mouseY) : p.createVector(movers[index - 1].location.x, movers[index - 1].location.y))
			.move();
		})
	}
}
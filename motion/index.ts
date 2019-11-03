import P5, { Color } from 'p5';
import Mover from './mover';


let limit = 2;
document.addEventListener('DOMContentLoaded', () => {
	const control = document.querySelector('input');
	control.value = `${limit}`;
	control.addEventListener('change', () => (limit = Number(control.value)));
});

export default function sketch(p: P5) {
	const WIDTH = p.windowWidth;
	const HEIGHT = p.windowHeight;

	const movers: Mover[] = [];

	const mouseAttraction = true;

	const colors = [
		() => p.color(242, p.random(255),163, p.random(150, 255)),
		() => p.color(242, 92, p.random(255), p.random(150, 255)),
		() => p.color(p.random(255), 92, 163, p.random(150, 255)),
	];
	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT, 'webgl');
		p.frameRate(60);
		p.background('#73BFB1');
	}
	p.draw = () => {

		if (movers.length < limit) movers.push(new Mover(p, WIDTH, HEIGHT));

		movers.forEach((mover, index) => {
			mover
			.setColor(mover.color ? mover.color : colors[index % 3]())
			.setRebound(true)
			.accelerateToDirection(index === 0 || mouseAttraction ? p.createVector(p.mouseX - WIDTH / 2, p.mouseY - HEIGHT / 2) : p.createVector(movers[index - 1].location.x, movers[index - 1].location.y))
			.move();
		})
	}
}
import p5 from 'p5';
import Walker from './walker';

const WIDTH =  1000;
const HEIGHT = 1000;

let walkerMax = 1;
document.addEventListener ('DOMContentLoaded', () => {
	const control = document.querySelector('input');
	control.addEventListener('change', () => (walkerMax = Number(control.value)));
});

function sketch(p: p5) {
	let history: Walker[] = [];

	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT, 'p2d');
		p.background('#B66DE8');
		p.smooth();
	}

	p.draw = () => {
		const tail = history[history.length - 1];

		const walker: Walker = history.length ? new Walker(p, tail.x, tail.y) : new Walker(p, WIDTH/2, HEIGHT/2);

		if (history.length < walkerMax) history.push(walker);

		history.forEach((walker) => (walker.step(), walker.display()));
	}
}

new p5(sketch);
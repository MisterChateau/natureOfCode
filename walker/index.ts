import p5 from 'p5';
import Walker from './walker';

let limit = 10;

document.addEventListener('DOMContentLoaded', () => {
	const control = document.querySelector('input');
	control.value = `${limit}`;
	control.addEventListener('change', () => (limit = Number(control.value)));
});

export default function sketch(p: p5) {
	let history: Walker[] = [];

	const WIDTH =  p.windowWidth;
	const HEIGHT = p.windowHeight;

	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT, 'p2d');
		p.background('#B66DE8');
		p.smooth();
	}

	p.draw = () => {
		const tail = history[history.length - 1];

		const walker: Walker = history.length ? new Walker(p, tail.x, tail.y) : new Walker(p, WIDTH/2, HEIGHT/2);

		if (history.length < limit) history.push(walker);

		history.forEach((walker) => (walker.step(), walker.display()));
	}
}


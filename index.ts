import p5 from 'p5';
import Mover from './mover';

const WIDTH = 1024;
const HEIGHT = 768;

const p = new p5(setup);

function setup(p5: p5) {
	const mover = new Mover(p5, WIDTH, HEIGHT);

	const velocity = p5.createVector(4, 7);

	p5.setup = () => {
		p5.createCanvas(WIDTH, HEIGHT, 'p2d');
		p5.background('#0433BF');
		p5.frameRate(60);
	}
	p5.draw = () => {
		mover
		.setRebound(false)
		.setAcceleration(p5.createVector(0.001, 0.01))
		.move();
	}
}
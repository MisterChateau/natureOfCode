import p5 from 'p5';
import Mover from './mover';

const WIDTH = 1024;
const HEIGHT = 768;

const p = new p5(setup);

function setup(p: p5) {
	const mover = new Mover(p, WIDTH, HEIGHT);

	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT, 'p2d');
		p.background('#0433BF');
		p.frameRate(60);
	}
	p.draw = () => {
		mover
		.setRebound(false)
		.setAcceleration(p5.Vector.random2D())
		.move();
	}
}
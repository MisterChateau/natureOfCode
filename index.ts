import p5 from 'p5';
import Walker from './walker';

const WIDTH =  500;
const HEIGHT = 500;


function sketch(p: p5) {
	let x: number, y: number;
	p.setup = () => {
		p.createCanvas(WIDTH, HEIGHT, 'p2d');
		p.smooth();
	}

	p.draw = () => {
		const walker: Walker = x && y ? new Walker(p, x, y) : new Walker(p, WIDTH/2, HEIGHT/2);

		p.background('pink');

		walker.display();
		walker.step();

		x = walker.x;
		y = walker.y;
	}
}

new p5(sketch);
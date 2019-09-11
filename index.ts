import p5 from 'p5';
const p = new p5(setup);

const WIDTH = 800;
const HEIGHT = 600;

function setup(p5: p5) {
	p5.setup = () => {
		p5.createCanvas(WIDTH, HEIGHT, 'p2d');
		p5.background('#F2916D');
	}
	p5.draw = () => {
		p5.ellipse(50, 50, 50, 50)
	}
}
import p5 from 'p5';
const p = new p5(setup);

function setup(p5: p5) {
	p5.setup = () => {
		p5.createCanvas(500, 500, 'webgl');
	}
	p5.draw = () => {
		p5.background('pink');
		p5.ellipse(0, 0, 50, 50 )
	}
}
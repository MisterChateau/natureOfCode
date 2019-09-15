import p5 from 'p5';
import walkerSketch from './walker/index';
import motionSketch from './motion/index';

const chapters = [walkerSketch, motionSketch];

new p5(motionSketch);

document.addEventListener('DOMContentLoaded', () => {
	const select =  document.querySelector('select');

	select.addEventListener('change', event => {
		document.querySelector('canvas').remove();
		new p5(chapters[Number(select.value)]);
	});
}

import p5 from 'p5';
import walkerSketch from './walker/index';
import motionSketch from './motion/index';
import forceSketch from './forces/index';

const chapters = [walkerSketch, motionSketch, forceSketch];

new p5(forceSketch);

document.addEventListener('DOMContentLoaded', () => {
	const select =  document.querySelector('select');

	select.addEventListener('change', event => {
		document.querySelector('canvas').remove();
		new p5(chapters[Number(select.value)]);
	});
}

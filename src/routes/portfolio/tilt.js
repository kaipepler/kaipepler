export function tilt(node, { max = 2 } = {}) {
	let rect, frameId;
	const query = window.matchMedia('(prefers-reduced-motion: reduce)');

	const handleMove = (e) => {
		if (!rect) rect = node.getBoundingClientRect();
		cancelAnimationFrame(frameId);
		frameId = requestAnimationFrame(() => {
			const x = (e.clientX - rect.left) / rect.width;
			const y = (e.clientY - rect.top) / rect.height;
			node.style.setProperty('--rotateX', `${(y - 0.5) * 2 * max}deg`);
			node.style.setProperty('--rotateY', `${(0.5 - x) * 2 * max}deg`);
			node.style.setProperty('--glareX', `${(1 - x) * 100}%`);
			node.style.setProperty('--glareY', `${(1 - y) * 100}%`);
			node.style.setProperty('--glareOpacity', `0.6`);
		});
	};

	const reset = () => {
		cancelAnimationFrame(frameId);
		rect = null;
		node.style.setProperty('--rotateX', `0deg`);
		node.style.setProperty('--rotateY', `0deg`);
		node.style.setProperty('--glareOpacity', `0`);
	};

	const setup = () => {
		if (query.matches) {
			reset();
			node.removeEventListener('mousemove', handleMove);
			node.removeEventListener('mouseleave', reset);
		} else {
			node.addEventListener('mousemove', handleMove);
			node.addEventListener('mouseleave', reset);
		}
	};

	// Listen for system setting changes
	query.addEventListener('change', setup);
	setup();

	return {
		destroy: () => {
			query.removeEventListener('change', setup);
			node.removeEventListener('mousemove', handleMove);
			node.removeEventListener('mouseleave', reset);
			cancelAnimationFrame(frameId);
		}
	};
}

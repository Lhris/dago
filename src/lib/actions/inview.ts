import type { Action } from 'svelte/action';

type InviewParams = { y?: number; delay?: number } | undefined;

/**
 * Reveals an element with a subtle fade + rise the first time it scrolls into
 * view. Designed to be safe-by-default: if there is no JS support, no
 * IntersectionObserver, or the user prefers reduced motion, the element simply
 * stays visible (the hiding is applied by this action, never in CSS).
 */
export const inview: Action<HTMLElement, InviewParams> = (node, params) => {
	const prefersReduced =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReduced || typeof IntersectionObserver === 'undefined') {
		return;
	}

	const y = params?.y ?? 16;
	const delay = params?.delay ?? 0;

	node.style.opacity = '0';
	node.style.transform = `translateY(${y}px)`;
	node.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;
	node.style.willChange = 'opacity, transform';

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'none';
					io.unobserve(node);
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
	);

	io.observe(node);

	return {
		destroy() {
			io.disconnect();
		}
	};
};

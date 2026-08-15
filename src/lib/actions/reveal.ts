import type { Action } from 'svelte/action';

type RevealParams = {
	/** delay in ms before the element animates in (used for staggering) */
	delay?: number;
	/** how much of the element must be visible before it triggers (0-1) */
	threshold?: number;
	/** only animate once (default true) */
	once?: boolean;
};

/**
 * Adds `.in-view` to an element when it scrolls into the viewport.
 * Pair with the `.reveal` class in styles.css for the fade/rise effect.
 *
 * Usage: <div class="reveal" use:reveal={{ delay: 100 }}>
 */
export const reveal: Action<HTMLElement, RevealParams | undefined> = (node, params) => {
	const { delay = 0, threshold = 0.15, once = true } = params ?? {};

	if (delay) node.style.transitionDelay = `${delay}ms`;

	// Respect reduced-motion: show immediately, skip the observer.
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.classList.add('in-view');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('in-view');
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.classList.remove('in-view');
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};

<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
	import { cubicIn } from 'svelte/easing';
	import Background from './Background.svelte';
	import Home from './+page.svelte';
	import About from './about/+page.svelte';
	import Projects from './projects/+page.svelte';
	import { onMount } from 'svelte';
	import { url } from 'inspector';
	import path from 'path';

	interface Sections {
		home: HTMLElement | null;
		about: HTMLElement | null;
		projects: HTMLElement | null;
	}

	let sections: Sections = {
		home: null,
		about: null,
		projects: null
	};

	function scrollToSection(section: keyof Sections) {
		sections[section]?.scrollIntoView({ behavior: 'smooth' });
	}
	//export let data

	type Origin = {
		[key: string]: string;
	};

	function scale(
		node: Element,
		{ delay = 0, duration = 500, easing = cubicIn } = {},
		{ direction = 'both' } = {}
	) {
		const origin: Origin = {
			in: 'bottom left',
			out: 'bottom right',
			both: 'center center'
		};

		return {
			delay,
			duration,
			easing,
			css: (t: number) => `
            scale: ${t};
            transform-origin: ${origin[direction]};
        `
		};
	}

	let activeSection = '';

	let open = false;

	onMount(() => {
		window.addEventListener('scroll', onScroll);
		onScroll(); 
	});

	function onScroll() {
		const scrollPosition = window.scrollY + window.innerHeight / 2; 
		const sectionEntries = Object.entries(sections) as [keyof Sections, HTMLElement | null][];
		let newActiveSection = '';

		for (const [key, section] of sectionEntries) {
			if (section) {
				const rect = section.getBoundingClientRect();
				const sectionTop = window.scrollY + rect.top;
				const sectionBottom = sectionTop + rect.height;

				if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
					newActiveSection = key;
					break;
				}
			}
		}

		activeSection = newActiveSection;
	}
</script>

<Header
	activeSession={activeSection}
	on:scrollToSection={(event) => scrollToSection(event.detail)}
/>
<Background />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<main on:click={() => (open = !open)}>
	<section bind:this={sections.home} id="home">
		<Home />
	</section>
	<section bind:this={sections.about} id="about">
		<About />
	</section>
	<!-- <section bind:this={sections.projects} id="projects">
		<Projects />
	</section> -->
</main>


<style>


	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 120rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	section {
		display: flex;
		min-height: 90vh;
		height: 100%;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		flex: 0.6;
	}

	@media screen and (max-width: 768px) {
		section {
			flex-direction: column-reverse;
			align-items: center;
		}
	}
</style>

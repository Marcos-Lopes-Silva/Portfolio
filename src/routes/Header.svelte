<script lang="ts">
	import { onMount } from 'svelte';
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/icons/LinkedinIcon.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';

	const links = [
		{ id: 'home', label: 'Início' },
		{ id: 'about', label: 'Sobre' },
		{ id: 'stack', label: 'Stack' },
		{ id: 'projects', label: 'Projetos' },
		{ id: 'contact', label: 'Contato' }
	];

	let active = 'home';
	let scrolled = false;
	let open = false;

	function openGmail() {
		const recipient = 'marcoseduardolopes00@gmail.com';
		const body =
			'Olá,\n\nGostaria de marcar uma hora para conversarmos, você tem disponibilidade?\n\nAtenciosamente';
		window.open(`mailto:${recipient}?subject=&body=${encodeURIComponent(body)}`);
	}

	function goTo(id: string) {
		open = false;
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}

	onMount(() => {
		const sections = links
			.map((l) => document.getElementById(l.id))
			.filter((el): el is HTMLElement => !!el);

		const onScroll = () => {
			scrolled = window.scrollY > 20;
			const mid = window.scrollY + window.innerHeight * 0.35;
			for (const section of sections) {
				if (section.offsetTop <= mid) active = section.id;
			}
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header class:scrolled>
	<a class="logo" href="#home" on:click|preventDefault={() => goTo('home')}>
		<span class="gradient-text">MS</span>
	</a>

	<nav class="desktop-nav">
		{#each links as link}
			<a
				href={`#${link.id}`}
				class:active={active === link.id}
				on:click|preventDefault={() => goTo(link.id)}
			>
				{link.label}
			</a>
		{/each}
	</nav>

	<div class="socials">
		<button type="button" on:click={openGmail} aria-label="Enviar e-mail">
			<MailIcon />
		</button>
		<a href="https://github.com/Marcos-Lopes-Silva" target="_blank" rel="noreferrer" aria-label="GitHub">
			<GithubIcon />
		</a>
		<a href="https://linkedin.com/in/marcossilva23" target="_blank" rel="noreferrer" aria-label="LinkedIn">
			<LinkedinIcon />
		</a>
	</div>

	<button
		class="hamburger"
		class:open
		on:click={() => (open = !open)}
		aria-label="Abrir menu"
		aria-expanded={open}
	>
		<span></span>
		<span></span>
		<span></span>
	</button>
</header>

{#if open}
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div class="overlay" on:click={() => (open = false)}></div>
{/if}

<aside class="mobile-menu" class:open>
	<nav>
		{#each links as link}
			<a
				href={`#${link.id}`}
				class:active={active === link.id}
				on:click|preventDefault={() => goTo(link.id)}
			>
				{link.label}
			</a>
		{/each}
	</nav>
</aside>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 1rem clamp(1.2rem, 5vw, 3rem);
		transition:
			background 0.3s ease,
			border-color 0.3s ease,
			backdrop-filter 0.3s ease;
		border-bottom: 1px solid transparent;
	}

	header.scrolled {
		background: rgba(7, 7, 12, 0.6);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		border-bottom-color: var(--border);
	}

	.logo {
		font-family: var(--font-display);
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -0.03em;
		margin-right: auto;
	}

	.desktop-nav {
		display: flex;
		gap: 0.4rem;
	}

	.desktop-nav a {
		position: relative;
		padding: 0.4rem 0.85rem;
		font-size: 0.82rem;
		font-weight: 500;
		letter-spacing: 0.02em;
		color: var(--text-dim);
		border-radius: 0;
		transition:
			color 0.2s ease,
			background 0.2s ease;
	}

	.desktop-nav a:hover {
		color: var(--text);
	}

	.desktop-nav a.active {
		color: var(--text);
		background: var(--surface-2);
	}

	.socials {
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}

	.socials a,
	.socials button {
		display: grid;
		place-items: center;
		width: 2.3rem;
		height: 2.3rem;
		padding: 0;
		border: none;
		background: none;
		border-radius: 0;
		color: var(--text-dim);
		cursor: pointer;
		transition:
			background 0.2s ease,
			transform 0.2s ease,
			color 0.2s ease;
	}

	.socials a:hover,
	.socials button:hover {
		background: var(--surface-2);
		color: var(--text);
		transform: translateY(-2px);
	}

	.socials :global(svg) {
		width: 1.35rem;
		height: 1.35rem;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 2.4rem;
		height: 2.4rem;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		z-index: 60;
	}

	.hamburger span {
		display: block;
		width: 1.5rem;
		height: 2px;
		margin: 0 auto;
		background: var(--text);
		border-radius: 2px;
		transition: transform 0.3s ease, opacity 0.2s ease;
	}

	.hamburger.open span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}
	.hamburger.open span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	.overlay {
		position: fixed;
		inset: 0;
		z-index: 40;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(2px);
	}

	.mobile-menu {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 45;
		width: min(78vw, 18rem);
		padding: 5.5rem 2rem 2rem;
		background: rgba(12, 12, 22, 0.92);
		backdrop-filter: blur(18px);
		border-left: 1px solid var(--border);
		transform: translateX(100%);
		transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.mobile-menu.open {
		transform: none;
	}

	.mobile-menu nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.mobile-menu a {
		padding: 0.7rem 0.9rem;
		font-family: var(--font-display);
		font-size: 1.1rem;
		color: var(--text-dim);
		border-radius: 0;
		transition: background 0.2s ease, color 0.2s ease;
	}

	.mobile-menu a.active,
	.mobile-menu a:hover {
		color: var(--text);
		background: var(--surface-2);
	}

	@media (max-width: 780px) {
		.desktop-nav,
		.socials {
			display: none;
		}
		.hamburger {
			display: flex;
			margin-left: auto;
		}
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import gmail from '$lib/images/gmail.svg';
	import { createEventDispatcher } from 'svelte';

	export let activeSession: string;

	const dispatch = createEventDispatcher();

	function handleScrollTo(section: string) {
		dispatch('scrollToSection', section);
	}

	let openGmail = () => {
		const recipient = "marcoseduardolopes00@gmail.com";
	    const subject = "";
    	const body = "Olá,\n\nGostaria de marcar uma hora para conversarmos, você tem disponibilidade?\n\nAtenciosamente";

		window.open(`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
	}

	let open = false;
</script>

<header>
	<a class="logo" href="/">MS</a>

	<button class="menu-btn" class:open={open} on:click={() => open = !open}>
		<div class:open={open}>
			<div class="line1" />
			<div class="line2" />
			<div class="line3" />
		</div>
	</button>
	
	<aside class="sidebar" class:open={open}>
		<nav>
			<a href="/" on:click={() => open = !open}>Home</a>
			<a href="/about" on:click={() => open = !open}>About</a>
			<a href="/sverdle" on:click={() => open = !open}>Sverdle</a>
		</nav>
	</aside>

	<nav>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<ul>
			
			<li on:click|preventDefault={() => handleScrollTo('home')} class={activeSession === 'home' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			
			<li on:click|preventDefault={() => handleScrollTo('about')} class={activeSession === 'about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>

			<li on:click|preventDefault={() => handleScrollTo('projects')} class={activeSession === 'projects' ? 'page' : undefined}>
				<a href="/projects">Projects</a>
			</li>

			<li on:click|preventDefault={() => activeSession = ''} aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<button class="button" on:click={openGmail}>
			<img src={gmail} alt="Gmail" />
		</button>
		<a href="https://github.com/Marcos-Lopes-Silva">
			<img src={github} alt="GitHub" />
		</a>
		<a href="https://linkedin.com/in/marcossilva23">
			<img src={linkedin} alt="LinkedIn" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		position: fixed;
		gap: 5em;
		width: 100%;
		justify-content: flex-end;
	}

	.button {
		background: none;
		border: none;
	}

	.corner {
		display: flex;
		margin-top: 10px;
		height: 4em;
	}

	.logo {
		font-size: 1.5em;
		margin-left: 6%;
		margin-top: 12px;
		margin-right: auto;
		text-decoration: none;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 3em;
		height: 3em;
		object-fit: contain;
	}

	nav {
		display: flex;
		margin-top: 20px;
		padding-left: 50px;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		color: white;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	.menu-btn {
		display: none;
	}

	.sidebar {
		display: none;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: rgb(255, 255, 255);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: rgb(255, 255, 255, 0.7);
	}

	@media screen and (max-width: 768px) {

		@keyframes translateOpen {
			from {
				transform: translateX(-100%);
			}
			to {
				transform: translateX(-65%);
			}
		}

		@keyframes translateClose {
			from {
				transform: translateX(-65%);
			}
			to {
				transform: translateX(-100%);
			}
		}


		header > nav {
			display: none;
		}

		.logo {
			display: none;
		}

		aside {		
			position: fixed;
			top: 0;
			bottom: 0;
			width: 250px;
			background-color: #333;
			color: white;
			left: 0;
			transition: translateClose 0.3s ease-out;
		}

		.sidebar.open {
			display: flex;
			width: 250px;
			animation: translateOpen 0.3s ease-in-out;
		}

		.open .line1 {
			width: 2em;
			transform: rotate(-45deg) translate(-0.3em, 0.3em);
		}

		.open .line2 {
			opacity: 0;
		}

		.open .line3 {
			width: 2em;
			transform: rotate(45deg) translate(-0.3em, -0.3em);
		}

		.line1,
		.line2,
		.line3 {
			width: 2em;
			height: 2px;
			background: white;
			margin: 0.3em;
			border-radius: 0.3em;
			animation: transform 0.5s ease-in-out;
		}

		.menu-btn {
			margin-top: 15px;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			width: 3em;
			margin-right: auto;
			margin-left: 10px;
			height: 3em;
			border: none;
			background: none;
		}

		.open.menu-btn {
			z-index: 1;
		}

		.sidebar a {
			color: white;
			font-size: 1rem;
			text-align: center;
			text-decoration: none;
		}

		.sidebar nav {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: auto;
		}

		.sidebar nav a:hover {
			background: rgba(255, 255, 255, 0.1);
		}
	}
</style>

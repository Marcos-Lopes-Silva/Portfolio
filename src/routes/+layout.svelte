<script>
	import Header from './Header.svelte';
	import Background from './Background.svelte';
	import './styles.css';
</script>

<Background />
<Header />

<main>
	<slot />
</main>

<footer>
	<p>© {new Date().getFullYear()} Marcos Silva · Construído com SvelteKit</p>
</footer>

<style>
	main {
		width: 100%;
		max-width: var(--maxw);
		margin: 0 auto;
		padding: 0 clamp(1.2rem, 5vw, 2rem);
	}

	footer {
		max-width: var(--maxw);
		margin: 4rem auto 0;
		padding: 2rem clamp(1.2rem, 5vw, 2rem) 2.5rem;
		border-top: 1px solid var(--border);
		text-align: center;
	}

	footer p {
		font-size: 0.8rem;
		color: var(--text-faint);
	}
</style>

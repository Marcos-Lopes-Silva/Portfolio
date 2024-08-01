<script lang="ts">
	import { spring } from 'svelte/motion';

	let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<div class="counter">

	<div class="counter-viewport">
		<div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
			<strong class="hidden" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
			<strong>{Math.floor($displayed_count)}</strong>
		</div>
	</div>

</div>

<style>
	.counter {
		display: flex;
		justify-content: flex-end;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1em 0;
	}

	.counter-viewport {
		width: 6em;
		height: 3em;
		overflow: hidden;
		text-align: center;
	}

	.counter-viewport strong {
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 300;
		color: var(--color-theme-1);
		font-size: 2rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		width: 100%;
		height: 100%;
	}

</style>

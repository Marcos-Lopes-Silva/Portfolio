<div class="bg" aria-hidden="true">
	<div class="grid"></div>
	<div class="orb orb-1"></div>
	<div class="orb orb-2"></div>
	<div class="orb orb-3"></div>
	<div class="noise"></div>
</div>

<style>
	.bg {
		position: fixed;
		inset: 0;
		z-index: -1;
		overflow: hidden;
		background:
			radial-gradient(120% 80% at 50% -10%, rgba(80, 110, 160, 0.07), transparent 60%),
			var(--bg-0);
	}

	.grid {
		position: absolute;
		inset: -2px;
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
		background-size: 46px 46px;
		mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%);
		-webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%);
	}

	.orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(110px);
		opacity: 0.3;
		will-change: transform;
	}

	.orb-1 {
		width: 44rem;
		height: 44rem;
		top: -16rem;
		left: -12rem;
		background: radial-gradient(circle, rgba(90, 130, 190, 0.45), transparent 70%);
		animation: drift-1 22s ease-in-out infinite;
	}

	.orb-2 {
		width: 38rem;
		height: 38rem;
		top: 30%;
		right: -14rem;
		background: radial-gradient(circle, rgba(80, 150, 160, 0.3), transparent 70%);
		animation: drift-2 26s ease-in-out infinite;
	}

	.orb-3 {
		width: 34rem;
		height: 34rem;
		bottom: -14rem;
		left: 25%;
		background: radial-gradient(circle, rgba(70, 100, 160, 0.28), transparent 70%);
		animation: drift-3 30s ease-in-out infinite;
	}

	.noise {
		position: absolute;
		inset: 0;
		opacity: 0.5;
		background: linear-gradient(180deg, transparent 60%, var(--bg-0) 100%);
	}

	@keyframes drift-1 {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(6rem, 4rem) scale(1.1);
		}
	}

	@keyframes drift-2 {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(-5rem, 6rem) scale(1.08);
		}
	}

	@keyframes drift-3 {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(4rem, -5rem) scale(1.12);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.orb {
			animation: none;
		}
	}
</style>

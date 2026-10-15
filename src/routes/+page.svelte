<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { projects } from '$lib/projects';

	import html5 from '$lib/images/html5.svg';
	import css3 from '$lib/images/css3.svg';
	import js from '$lib/images/js.svg';
	import ts from '$lib/images/ts.svg';
	import react from '$lib/images/react.svg';
	import nextjs from '$lib/images/nextjs.svg';
	import svelte from '$lib/images/svelte.svg';
	import node from '$lib/images/node.svg';
	import java from '$lib/images/java.svg';
	import springboot from '$lib/images/springboot.svg';
	import python from '$lib/images/python.svg';
	import php from '$lib/images/php.svg';
	import laravel from '$lib/images/laravel.svg';
	import kotlin from '$lib/images/kotlin.svg';
	import mysql from '$lib/images/mysql.svg';
	import mongodb from '$lib/images/mongodb.svg';
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/icons/LinkedinIcon.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';

	type Chip = { label: string; icon?: string };

	const stack: { group: string; items: Chip[] }[] = [
		{
			group: 'Frontend',
			items: [
				{ label: 'React', icon: react },
				{ label: 'Next.js', icon: nextjs },
				{ label: 'TypeScript', icon: ts },
				{ label: 'JavaScript', icon: js },
				{ label: 'Svelte', icon: svelte },
				{ label: 'Tailwind' },
				{ label: 'HTML5', icon: html5 },
				{ label: 'CSS3', icon: css3 }
			]
		},
		{
			group: 'Backend',
			items: [
				{ label: 'Node.js', icon: node },
				{ label: 'Python / FastAPI', icon: python },
				{ label: 'Java', icon: java },
				{ label: 'Spring Boot', icon: springboot },
				{ label: 'PHP', icon: php },
				{ label: 'Laravel', icon: laravel },
				{ label: 'Kotlin', icon: kotlin }
			]
		},
		{
			group: 'Dados & Infra',
			items: [
				{ label: 'PostgreSQL' },
				{ label: 'MySQL', icon: mysql },
				{ label: 'MongoDB', icon: mongodb },
				{ label: 'Redux Toolkit' },
				{ label: 'Docker' },
				{ label: 'AWS' }
			]
		}
	];

	const facts = [
		{ k: 'Frontend', v: 'React, Next.js, TypeScript, Svelte' },
		{ k: 'Backend', v: 'Python/FastAPI, Java/Spring Boot, PHP/Laravel' },
		{ k: 'Mobile & Testes', v: 'React Native, Kotlin · Jest, Pytest' }
	];

	function openGmail() {
		const recipient = 'marcoseduardolopes00@gmail.com';
		const body =
			'Olá,\n\nGostaria de marcar uma hora para conversarmos, você tem disponibilidade?\n\nAtenciosamente';
		window.open(`mailto:${recipient}?subject=&body=${encodeURIComponent(body)}`);
	}

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>Marcos Eduardo Lopes Silva — Desenvolvedor Full-Stack</title>
	<meta
		name="description"
		content=""
	/>
	<meta property="og:type" content="profile" />
	<meta property="og:title" content="Marcos Eduardo Lopes Silva — Desenvolvedor Full-Stack" />
	<meta property="og:description" content="Desenvolvedor full-stack com foco em frontend. Projetos, stack e contato." />
	<meta property="og:url" content="https://marcosls.com/" />

	{@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Marcos Eduardo Lopes Silva",
    "alternateName": "Marcos Silva",
    "jobTitle": "Desenvolvedor Full-Stack",
    "url": "https://marcosls.com/",
    "email": "mailto:marcoseduardolopes00@gmail.com",
    "sameAs": [
        "https://linkedin.com/in/marcossilva23",
        "https://github.com/Marcos-Lopes-Silva"
    ],
    "knowsAbout": ["React", "Next.js", "TypeScript", "Java", "Spring Boot", "Python"]
})}</script>`}
</svelte:head>

<section id="home" class="hero">
	<div class="hero-inner">
		<p class="badge">
			<span class="dot"></span> Disponível para novas oportunidades
		</p>
		<h1>
			<span class="hi">Olá, me chamo</span>
			<span class="name gradient-text">Marcos Eduardo Lopes Silva</span>
		</h1>
		<p class="lead">
			Desenvolvedor <strong>full-stack</strong>, com experiência em frontend e backend. Trabalho
			com React, TypeScript, Java e Python.
		</p>
		<div class="cta">
			<button class="btn primary" on:click={() => scrollTo('projects')}>Ver projetos</button>
			<button class="btn ghost" on:click={() => scrollTo('contact')}>Fale comigo</button>
			<a class="btn ghost" href="/Marcos_Silva.pdf?v=3" target="_blank" rel="noreferrer">Currículo ↗</a>
		</div>
	</div>
	<button class="scroll-hint" on:click={() => scrollTo('about')} aria-label="Rolar para baixo">
		<span></span>
	</button>
</section>

<section id="about" class="section">
	<p class="eyebrow reveal" use:reveal>Sobre</p>
	<div class="about-grid">
		<div class="about-text reveal" use:reveal={{ delay: 80 }}>
			<h2>Desenvolvedor full-stack, formado em Engenharia de Software.</h2>
			<p>
				Trabalhei no frontend de uma plataforma de dados para a
				<strong>Petrobras</strong>, em parceria com o CeMEAI. Gerenciamento de estado,
				visualização de dados e integração com APIs assíncronas.
			</p>
			<p>
				na AWS. Tenho experiência com mobile (React Native e Kotlin) e testes automatizados.
			</p>
		</div>
		<ul class="facts reveal" use:reveal={{ delay: 160 }}>
			{#each facts as fact}
				<li>
					<span class="k">{fact.k}</span>
					<span class="v">{fact.v}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section id="stack" class="section">
	<p class="eyebrow reveal" use:reveal>Tecnologias</p>
	<h2 class="reveal" use:reveal={{ delay: 60 }}>Tecnologias que uso</h2>
	<div class="stack">
		{#each stack as col, ci}
			<div class="stack-col reveal" use:reveal={{ delay: 120 + ci * 90 }}>
				<h3>{col.group}</h3>
				<ul>
					{#each col.items as item}
						<li class="chip">
							{#if item.icon}<img src={item.icon} alt="" />{/if}
							<span>{item.label}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<section id="projects" class="section">
	<p class="eyebrow reveal" use:reveal>Projetos</p>
	<h2 class="reveal" use:reveal={{ delay: 60 }}>Projetos</h2>
	<div class="projects">
		{#each projects as project, i}
			<article
				class="card reveal"
				class:featured={project.featured}
				use:reveal={{ delay: 100 + (i % 2) * 80 }}
			>
				<div class="card-head">
					<h3>{project.name}</h3>
					<p class="tagline">{project.tagline}</p>
				</div>
				<p class="desc">{project.description}</p>
				<ul class="techs">
					{#each project.techs as tech}
						<li>{tech}</li>
					{/each}
				</ul>
				<div class="links">
					{#if project.live}
						<a href={project.live} target="_blank" rel="noreferrer" class="live">Ver ao vivo ↗</a>
					{/if}
					{#if project.repo}
						<a href={project.repo} target="_blank" rel="noreferrer" class="repo">
							<GithubIcon /> Código
						</a>
					{/if}
					{#if project.note}
						<span class="note">{project.note}</span>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- ── Contato ────────────────────────────────────────── -->
<section id="contact" class="section contact">
	<div class="contact-card reveal" use:reveal>
		<p class="eyebrow">Contato</p>
		<h2>Entre em contato</h2>
		<p class="lead">
			Estou disponível para conversas sobre projetos e oportunidades.
		</p>
		<div class="contact-actions">
			<button class="btn primary" on:click={openGmail}>
				<MailIcon /> Enviar e-mail
			</button>
			<a class="btn ghost" href="https://linkedin.com/in/marcossilva23" target="_blank" rel="noreferrer">
				<LinkedinIcon /> LinkedIn
			</a>
			<a class="btn ghost" href="https://github.com/Marcos-Lopes-Silva" target="_blank" rel="noreferrer">
				<GithubIcon /> GitHub
			</a>
		</div>
	</div>
</section>

<style>
	/* ── shared ── */
	.section {
		padding: 5.5rem 0;
	}

	.section > .eyebrow {
		margin-bottom: 1rem;
	}

	.section h2 {
		font-size: clamp(1.6rem, 4vw, 2.4rem);
		margin-bottom: 2.5rem;
		max-width: 22ch;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.7rem 1.3rem;
		font-family: var(--font-body);
		font-size: 0.9rem;
		font-weight: 600;
		border-radius: 0;
		border: 1px solid transparent;
		cursor: pointer;
		transition:
			transform 0.2s ease,
			box-shadow 0.25s ease,
			background 0.2s ease,
			border-color 0.2s ease;
	}

	.btn :global(svg) {
		width: 1.1rem;
		height: 1.1rem;
	}

	.btn.primary {
		color: #fff;
		background: var(--accent-1);
		box-shadow: 0 6px 20px -6px var(--glow-1);
	}

	.btn.primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 28px -6px var(--glow-1);
		background: #8aafc9;
	}

	.btn.ghost {
		color: var(--text);
		background: var(--surface);
		border-color: var(--border);
	}

	.btn.ghost:hover {
		transform: translateY(-2px);
		background: var(--surface-2);
		border-color: rgba(123, 156, 204, 0.35);
	}

	/* ── hero ── */
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 6rem 0 4rem;
	}

	.hero-inner > * {
		opacity: 0;
		animation: rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}
	.hero-inner > *:nth-child(1) { animation-delay: 0.05s; }
	.hero-inner > *:nth-child(2) { animation-delay: 0.15s; }
	.hero-inner > *:nth-child(3) { animation-delay: 0.28s; }
	.hero-inner > *:nth-child(4) { animation-delay: 0.42s; }

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(26px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		padding: 0.4rem 0.9rem;
		margin-bottom: 1.6rem;
		font-size: 0.8rem;
		color: var(--text-dim);
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 999px;
	}

	.badge .dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background: var(--accent-2);
		box-shadow: 0 0 0 0 rgba(110, 170, 168, 0.5);
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% { box-shadow: 0 0 0 0 rgba(110, 170, 168, 0.5); }
		70% { box-shadow: 0 0 0 8px rgba(110, 170, 168, 0); }
		100% { box-shadow: 0 0 0 0 rgba(110, 170, 168, 0); }
	}

	.hero h1 {
		font-size: clamp(2.6rem, 9vw, 5.2rem);
		line-height: 1.02;
		margin-bottom: 1.4rem;
	}

	.hero .hi {
		display: block;
		font-size: clamp(1rem, 3vw, 1.5rem);
		font-weight: 500;
		color: var(--text-dim);
		margin-bottom: 0.4rem;
	}

	.hero .name {
		display: block;
	}

	.lead {
		max-width: 46ch;
		font-size: clamp(1rem, 2.2vw, 1.2rem);
		color: var(--text-dim);
		margin-bottom: 2rem;
	}

	.lead strong {
		color: var(--text);
		font-weight: 600;
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	.scroll-hint {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		width: 1.5rem;
		height: 2.4rem;
		border: 2px solid var(--border);
		border-radius: 0;
		background: none;
		cursor: pointer;
	}

	.scroll-hint span {
		display: block;
		width: 4px;
		height: 8px;
		margin: 6px auto 0;
		border-radius: 2px;
		background: var(--accent-2);
		animation: scrolldot 1.8s ease-in-out infinite;
	}

	@keyframes scrolldot {
		0% { opacity: 0; transform: translateY(0); }
		40% { opacity: 1; }
		80% { opacity: 0; transform: translateY(9px); }
		100% { opacity: 0; }
	}

	/* ── about ── */
	.about-grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		gap: 2.5rem;
		align-items: start;
	}

	.about-text h2 {
		margin-bottom: 1.4rem;
	}

	.about-text p {
		color: var(--text-dim);
		margin-bottom: 1rem;
	}

	.about-text strong {
		color: var(--text);
		font-weight: 600;
	}

	.facts {
		list-style: none;
		margin: 0;
		padding: 1.4rem;
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 0;
	}

	.facts li {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.facts .k {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent-2);
	}

	.facts .v {
		font-size: 0.92rem;
		color: var(--text);
	}

	/* ── stack ── */
	.stack {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.2rem;
	}

	.stack-col {
		padding: 1.4rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 0;
	}

	.stack-col h3 {
		font-size: 0.95rem;
		color: var(--text-dim);
		margin-bottom: 1.1rem;
	}

	.stack-col ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.chip {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.4rem 0.75rem;
		font-size: 0.82rem;
		background: var(--surface-2);
		border: 1px solid var(--border);
		border-radius: 0;
		transition: border-color 0.2s ease, transform 0.2s ease;
	}

	.chip:hover {
		border-color: rgba(123, 156, 204, 0.4);
		transform: translateY(-2px);
	}

	.chip img {
		width: 1.05rem;
		height: 1.05rem;
		object-fit: contain;
	}

	/* ── projects ── */
	.projects {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.3rem;
	}

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 1.7rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 0;
		overflow: hidden;
		transition: transform 0.3s ease, border-color 0.3s ease;
	}

	.card::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		padding: 1px;
		background: var(--gradient);
		-webkit-mask:
			linear-gradient(#000 0 0) content-box,
			linear-gradient(#000 0 0);
		mask:
			linear-gradient(#000 0 0) content-box,
			linear-gradient(#000 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
	}

	.card:hover {
		transform: translateY(-5px);
	}

	.card:hover::before {
		opacity: 1;
	}

	.card.featured {
		grid-column: 1 / -1;
	}

	.card-head {
		margin-bottom: 0.9rem;
	}

	.card h3 {
		font-size: 1.35rem;
		margin-bottom: 0.3rem;
	}

	.tagline {
		font-size: 0.9rem;
		color: var(--accent-2);
	}

	.desc {
		color: var(--text-dim);
		font-size: 0.94rem;
		margin-bottom: 1.2rem;
		max-width: 62ch;
	}

	.techs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		list-style: none;
		margin: 0 0 1.3rem;
		padding: 0;
	}

	.techs li {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		padding: 0.25rem 0.6rem;
		color: var(--text-dim);
		background: var(--surface-2);
		border-radius: 0;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1.3rem;
		margin-top: auto;
	}

	.links a {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--text);
	}

	.links a :global(svg) {
		width: 1.05rem;
		height: 1.05rem;
	}

	.links .live {
		color: var(--accent-1);
	}

	.links a:hover {
		opacity: 0.75;
	}

	.note {
		font-size: 0.8rem;
		font-style: italic;
		color: var(--text-faint);
	}

	/* ── contact ── */
	.contact {
		padding-bottom: 2rem;
	}

	.contact-card {
		text-align: center;
		padding: 3.5rem 2rem;
		background:
			radial-gradient(120% 140% at 50% 0%, rgba(123, 156, 204, 0.07), transparent 55%),
			var(--surface);
		border: 1px solid var(--border);
		border-radius: 0;
	}

	.contact-card .eyebrow {
		justify-content: center;
		margin-bottom: 1rem;
	}

	.contact-card .eyebrow::before {
		display: none;
	}

	.contact-card h2 {
		margin: 0 auto 1rem;
	}

	.contact-card .lead {
		margin: 0 auto 2rem;
	}

	.contact-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.8rem;
	}

	/* ── responsive ── */
	@media (max-width: 820px) {
		.about-grid,
		.stack,
		.projects {
			grid-template-columns: 1fr;
		}
		.card.featured {
			grid-column: auto;
		}
		.section {
			padding: 4rem 0;
		}
	}
</style>

<script lang="ts">
	type Project = {
		name: string;
		description: string;
		techs: string[];
		live?: string;
		repo?: string;
		note?: string;
	};

	const projects: Project[] = [
		{
			name: 'FragVault',
			description:
				'Plataforma web que faz o parse de replays (demos) de Counter-Strike 2 e reconstrói um mapa 2D com os movimentos e eventos da partida. Upload direto para storage em nuvem, processamento assíncrono e visualização interativa.',
			techs: ['C# / .NET', 'SvelteKit', 'TypeScript', 'Docker', 'Cloudflare R2'],
			live: 'https://fragvault.marcosls.com',
			repo: 'https://github.com/Marcos-Lopes-Silva/CS2-Viewer'
		},
		{
			name: 'SAVE — Egress@s UNIPAMPA',
			description:
				'Plataforma full-stack para criação e aplicação de surveys com egressos dos cursos de computação da UNIPAMPA: construtor de questionários com drag-and-drop, autenticação por papéis, internacionalização, dashboards de resultados e exportação em CSV/PDF. Liderei e mentorei a equipe de bolsistas.',
			techs: ['Next.js', 'TypeScript', 'MongoDB', 'Redux Toolkit', 'i18n'],
			repo: 'https://github.com/Marcos-Lopes-Silva/SAVE-newversion'
		},
		{
			name: 'Plataforma Web de Dados (Petrobras / CeMEAI)',
			description:
				'Aplicação web de dados intensivos desenvolvida em projeto para a Petrobras, em parceria com o CeMEAI. Atuei como principal desenvolvedor do frontend, trabalhando com fluxos complexos de tratamento de dados, visualização e geração de relatórios.',
			techs: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'Python / FastAPI'],
			note: 'Projeto profissional (código privado)'
		},
		{
			name: 'ReceitasLivres',
			description:
				'Site de receitas full-stack, desenvolvido como projeto pessoal para praticar a integração entre um frontend em React e uma API REST em Spring Boot, com upload de imagens para o AWS S3.',
			techs: ['React', 'TypeScript', 'Java', 'Spring Boot', 'AWS S3'],
			repo: 'https://github.com/Marcos-Lopes-Silva/ReceitasLivres',
			note: 'Projeto pessoal'
		}
	];
</script>

<svelte:head>
	<title>Projetos — Marcos Silva</title>
</svelte:head>

<div class="wrapper">
	<h1>Projetos</h1>
	<p class="intro">Alguns dos projetos em que trabalhei — de aplicações pessoais a trabalho profissional.</p>

	<div class="projects">
		{#each projects as project}
			<article class="card">
				<h2>{project.name}</h2>
				<p class="desc">{project.description}</p>

				<ul class="techs">
					{#each project.techs as tech}
						<li>{tech}</li>
					{/each}
				</ul>

				<div class="links">
					{#if project.live}
						<a href={project.live} target="_blank" rel="noreferrer" class="live">🔗 Ver ao vivo</a>
					{/if}
					{#if project.repo}
						<a href={project.repo} target="_blank" rel="noreferrer">💻 GitHub</a>
					{/if}
					{#if project.note}
						<span class="note">{project.note}</span>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		max-width: 60rem;
		margin: 6rem auto 3rem;
		padding: 0 1.5rem;
		box-sizing: border-box;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.intro {
		color: #f8f8f8aa;
		margin-bottom: 2.5rem;
	}

	.projects {
		display: grid;
		gap: 1.5rem;
	}

	.card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 12px;
		padding: 1.5rem;
		transition: border-color 0.2s ease, transform 0.2s ease;
	}

	.card:hover {
		border-color: var(--color-theme-1, #ff5252);
		transform: translateY(-3px);
	}

	.card h2 {
		font-size: 1.4rem;
		margin: 0 0 0.6rem;
	}

	.desc {
		color: #f8f8f8cc;
		line-height: 1.55;
		margin: 0 0 1rem;
	}

	.techs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
		padding: 0;
		margin: 0 0 1.2rem;
	}

	.techs li {
		font-size: 0.78rem;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 999px;
		padding: 0.25rem 0.7rem;
		color: #fff;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1.2rem;
	}

	.links a {
		color: #fff;
		font-weight: 600;
		font-size: 0.9rem;
		text-decoration: none;
	}

	.links a:hover {
		color: #f8f8f8aa;
	}

	.links .live {
		color: var(--color-theme-1, #ff5252);
	}

	.note {
		font-size: 0.8rem;
		color: #f8f8f888;
		font-style: italic;
	}
</style>

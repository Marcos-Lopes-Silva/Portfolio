<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="about" >
	<h1 >Sobre mim</h1>
	<div class="vr"/>
	<div class="text-column">
		<p>
			Sou Marcos, um desenvolvedor Fullstack com especialização em desenvolvimento backend, atualmente cursando Engenharia de Software. Minha paixão por tecnologia me leva a explorar continuamente novas ferramentas e metodologias, sempre buscando soluções eficientes e escaláveis para problemas complexos.
		</p>
		<p>
			Tenho experiência na construção de APIs robustas e na integração de sistemas com serviços como o Google Sign-In e a Google People API. Além disso, já trabalhei com a AWS, o que me proporcionou uma sólida compreensão de serviços em nuvem e suas aplicações. Tenho um foco especial em Java, utilizando essa linguagem para desenvolver soluções backend eficientes e bem estruturadas.
		</p>
		<p>
			Minha abordagem de desenvolvimento é baseada em boas práticas e em um código limpo e organizado. Recentemente, venho aprimorando minhas habilidades em desenvolvimento Android, explorando novas técnicas e ferramentas para criar aplicativos móveis de alta qualidade.
		</p>
		<p>
			Sou um profissional comprometido e detalhista, sempre pronto para colaborar em equipe e contribuir para o sucesso coletivo. Se você está procurando um desenvolvedor backend dedicado e apaixonado por tecnologia, estou ansioso para conectar e explorar como posso ajudar a alcançar seus objetivos.
		</p>
	</div>
</div>

<style>
	.about {
		display: flex;
		min-height: 90vh;
		height: 100%;
		padding-left: 4.5%;
		gap: 10%;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		flex: 0.6;
	}

	.about h1 {
		display: flex;
		flex-direction: column;
		max-height: 100vh;
		max-width: 45%;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}

	.text-column {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 5rem;
		max-width: 55%;
		box-sizing: border-box;
		text-indent: 1.5em;
		line-height: 1.5;
	}

	.vr {
		border-left: 1px solid #ffffff;
		height: 70vh;
		width: 2px;
	}
</style>

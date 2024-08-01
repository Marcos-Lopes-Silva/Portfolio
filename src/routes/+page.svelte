<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script>
	import html5 from '$lib/images/html5.svg';
	import css3 from '$lib/images/css3.svg';
	import js from '$lib/images/js.svg';
	import java from '$lib/images/java.svg';
	import python from '$lib/images/python.svg';
	import kotlin from '$lib/images/kotlin.svg';
	import react from '$lib/images/react.svg';
	import ts from '$lib/images/ts.svg';
	import php from '$lib/images/php.svg';
	import springboot from '$lib/images/springboot.svg';
	import laravel from '$lib/images/laravel.svg';
	import nextjs from '$lib/images/nextjs.svg';
	import node from '$lib/images/node.svg';
	import svelte from '$lib/images/svelte.svg';
	import mysql from '$lib/images/mysql.svg';
	import mongodb from '$lib/images/mongodb.svg';
</script>

<section>
	<div class="panel">
		<h2>
			Olá!
		</h2>
		<p>
			Meu nome é Marcos, sou desenvolvedor fullstack e Engenhario de Software em formação. 
			Criei este portfólio para mostrar meu trabalho e compartilhar meu conhecimento com você. 
			Fique à vontade para explorar e, se algo chamar sua atenção, não hesite em entrar em contato comigo pelo meu email, LinkedIn ou GitHub. 
			Estou sempre aberto a novas conexões e oportunidades de colaboração.	
		</p>
		<div class="techs">
			<h2>
				Tecnologias que uso
			</h2>
			
			<div class="techs-list">
				<ul>
					<li>
						<img alt="HTML5" src={html5}/> <progress value="90" max="100"></progress>
					</li>
					<li>
						<img alt="CSS3" src={css3}/>  <progress value="70" max="100"></progress>
					</li>
					<li>
						<img alt="JavaScript" src={js}/> <progress value="100" max="100"></progress>
					</li>
					<li>
						<img alt="Java" src={java}/> <progress value="100" max="100"></progress>
					</li>
					<li>
						<img alt="Python" src={python}/> <progress value="40" max="100"></progress>
					</li>
					<li>
						<img alt="Kotlin" src={kotlin}/> <progress value="75" max="100"></progress>
					</li>
					<li>
						<img alt="TypeScript" src={ts}/> <progress value="100" max="100"></progress>
					</li>
					<li>
						<img alt="PHP" src={php}/> <progress value="90" max="100">
					</li>
				</ul>
				<ul>
					<li>
						<img alt="SpringBoot" src={springboot}/> <progress value="100" max="100"></progress>
					</li>
					<li>
						<img alt="Laravel" src={laravel}/> <progress value="90" max="100"></progress>
					</li>
					<li>
						<img alt="NextJS" src={nextjs}/> <progress value="90" max="100"></progress>
					</li>
					<li>
						<img alt="React" src={react}/> <progress value="100" max="100"></progress>
					</li>
					<li>
						<img alt="Svelte" src={svelte}/> <progress value="60" max="100"></progress>
					</li>
					<li>
						<img alt="Node" src={node}/> <progress value="100" max="100"></progress>
					</li>
					<li>
						<img alt="MySql" src={mysql}/> <progress value="100" max="100"></progress>
					</li>
					<li>
						<img alt="MongoDB" src={mongodb}/> <progress value="100" max="100"></progress>
					</li>
				</ul>
			</div>
			<p class="caption"> Legenda: </p>
			<div class="caption"> 
				<p> Iniciante &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress value="25" max="100"></progress> </p>        
				<p> Básico &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <progress value="45" max="100"></progress> </p>
				<p> Intermediário &nbsp; <progress value="60" max="100"></progress> </p>
			</div>
			<div class="caption">
				<p> Avançado &nbsp; &nbsp; <progress value="80" max="100"></progress> </p>
				<p> Especialista &nbsp; <progress value="100" max="100"></progress> </p>
			</div>
		</div>
	</div>
	<div class="vr"/>
	<div class="profile">
		<img src="https://avatars.githubusercontent.com/u/86811187?v=4" alt="Marcos Lopes" />
		<h3>Marcos Silva, 21</h3>
	</div>
</section>

<style>

	section {
		display: flex;
		min-height: 90vh;
		height: 100%;
		flex-direction: row-reverse;
		justify-content: center;
		overflow: hidden;
		flex: 0.6;
	}

	.caption {
		display: flex;
		flex-direction: row;
		margin-top: -1rem;
		gap: 10%;
		font-size: 0.8rem;
		color: #f8f8f889;
	}

	.techs-list {
		display: flex;
		flex-direction: row;
		gap: 10%;
	}

	.vr {
		border-left: 1px solid #ffffff;
		height: 70vh;
		width: 2px;
	}

	.techs {
		margin-top: 2rem;
		width: 100%;
		padding: 0;
	}

	.panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 5rem;
		max-width: 55%;
		box-sizing: border-box;
		overflow-y: scroll;
	}

	.profile {
		display: flex;
		flex-direction: column;
		max-height: 100vh;
		max-width: 45%;
		align-items: center;
		margin: 5rem;
		box-sizing: border-box;
		overflow: hidden;
	}

	.techs ul {
		list-style-type: none;
		padding: 0;
	}

	.techs ul li {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}	

	.techs img {
		width: 2rem;
		height: 2rem;
		object-fit: contain;
		margin-right: 1rem;
	}
	
	h2 {
		font-size: 2rem;
		width: 100%;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 500;
		margin-bottom: 10px;
	}

	.profile img {
		display: flex;
		align-self: center;
		width: 80%;
		align-items: center;
		border-radius: 50%;
	}

	@media screen and (max-width: 1020px) {
		section {
			flex-direction: column-reverse;
			align-items: center;
		}

		.vr {
			display: none;		
		}

		.panel {
			margin: 0
		}
	}

	@media screen and (max-width: 768px) {
		section {
			overflow: visible;
			flex-direction: column-reverse;
		}

		.vr {
			width: 50%;
			height: 2px;		
		}

		.panel {
			max-width: 100%;
			width: 95%;
			margin: 0;
		}

		.techs {
			max-width: 100%;
			width: 95%;
			margin: 0;
		}

		.techs-list {
			overflow-x: scroll;
		}

		.profile {
			max-width: 100%;
			width: 95%;
			margin: 0;
		}

		.profile img {
			width: 50%;
		}
	}
</style>

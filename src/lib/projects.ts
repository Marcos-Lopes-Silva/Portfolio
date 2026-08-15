export type Project = {
	name: string;
	/** one-line hook shown under the title */
	tagline: string;
	description: string;
	techs: string[];
	live?: string;
	repo?: string;
	note?: string;
	/** featured projects render as a larger card */
	featured?: boolean;
};

export const projects: Project[] = [
	{
		name: 'Agência de Cargas',
		tagline: 'Gestão de fretes agenciados — do embarcador ao motorista',
		description:
			'Sistema interno que conecta embarcadores (quem tem carga) a transportadoras e motoristas autônomos (quem tem veículo). Torna visível o spread da agência e responde "cadê minha carga?" sem depender do WhatsApp, com controle de acesso por papéis, rastreamento de fretes e uma base dos 5.570 municípios do IBGE.',
		techs: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Tailwind'],
		live: 'https://cargas.marcosls.com',
		featured: true
	},
	{
		name: 'Plataforma de Dados — Petrobras / CeMEAI',
		tagline: 'Frontend de aplicação de dados intensivos',
		description:
			'Aplicação web de dados intensivos desenvolvida para a Petrobras em parceria com o CeMEAI. Atuei como principal desenvolvedor do frontend, lidando com fluxos complexos de tratamento de dados, gerenciamento de estado, visualização e geração de relatórios.',
		techs: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'FastAPI'],
		note: 'Projeto profissional — código privado',
		featured: true
	},
	{
		name: 'FragVault',
		tagline: 'Replays de CS2 reconstruídos em um mapa 2D',
		description:
			'Plataforma que faz o parse de demos de Counter-Strike 2 e reconstrói a partida em um mapa 2D interativo, com movimentos e eventos do round. Upload direto para storage em nuvem e processamento assíncrono.',
		techs: ['C# / .NET', 'SvelteKit', 'TypeScript', 'Docker', 'Cloudflare R2'],
		live: 'https://fragvault.marcosls.com',
		repo: 'https://github.com/Marcos-Lopes-Silva/CS2-Viewer'
	},
	{
		name: 'SAVE — Egressos UNIPAMPA',
		tagline: 'Construtor de surveys full-stack (liderança de equipe)',
		description:
			'Plataforma para criar e aplicar pesquisas com egressos dos cursos de computação da UNIPAMPA: construtor de questionários drag-and-drop, autenticação por papéis, internacionalização, dashboards de resultados e exportação em CSV/PDF. Liderei e mentorei a equipe de bolsistas.',
		techs: ['Next.js', 'TypeScript', 'MongoDB', 'Redux Toolkit', 'i18n'],
		repo: 'https://github.com/Marcos-Lopes-Silva/SAVE-newversion'
	},
	{
		name: 'Viver — Residencial Geriátrico',
		tagline: 'Gestão de cuidados a partir de protótipos reais do cliente',
		description:
			'Sistema de gestão para o Residencial Geriátrico Viver: cadastro de residentes, rotinas de cuidado e controle de acesso por perfil (administrativo, secretaria, cuidadores, médico, fisioterapeuta e nutricionista). Desenvolvido a partir de proposta e protótipos reais do cliente.',
		techs: ['Java', 'Spring Boot', 'Hibernate', 'React', 'PostgreSQL'],
		live: 'https://viver.marcosls.com'
	},
	{
		name: 'ReceitasLivres',
		tagline: 'Projeto pessoal — React + Spring Boot',
		description:
			'Site de receitas full-stack, construído para praticar a integração entre um frontend em React e uma API REST em Spring Boot, com upload de imagens para o AWS S3.',
		techs: ['React', 'TypeScript', 'Java', 'Spring Boot', 'AWS S3'],
		repo: 'https://github.com/Marcos-Lopes-Silva/ReceitasLivres',
		note: 'Projeto pessoal'
	}
];

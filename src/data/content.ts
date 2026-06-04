// ============================================================================
//  CONTEÚDO DO PORTFÓLIO  —  edite SOMENTE este arquivo para mudar o site.
// ----------------------------------------------------------------------------
//  Para adicionar um projeto novo no futuro: copie um bloco dentro de
//  `projects` e cole no fim da lista, mudando os campos. Nada de mexer no
//  layout. Salvou aqui, o site inteiro se atualiza.
// ============================================================================

export const profile = {
  nome: "Vítor Pereira Dias",
  titulo: "Analista de TI & Redes — em transição para Desenvolvimento",
  local: "Goiânia, Goiás · Brasil",
  email: "vtpdias@gmail.com",
  telefone: "+55 (62) 99652-4946",
  github: "https://github.com/Varpei",
  linkedin: "https://www.linkedin.com/in/vitor-pereira-dias-a26b0627b/",
  // Frase de impacto que aparece grande no topo:
  manchete:
    "10 anos resolvendo TI de ponta a ponta — de redes e servidores a código. Agora focado em resolver problemas utilizando I.A.",
};

export const sobre = [
  "Comecei aos 14 anos e nunca parei: foram cerca de 10 anos atuando como Analista de TI, passando por praticamente tudo — suporte, manutenção, redes, servidores, sistemas de segurança, banco de dados e melhoria de processos.",
  "Hoje sou Analista de Redes no Tribunal Regional Eleitoral de Goiás (TRE-GO), trabalhando com Active Directory, VPNs e CheckPoint para as Zonas Eleitorais. Em paralelo, estudo Engenharia da Computação na PUC-GO (7º período) e fui monitor de Algoritmos.",
  "Essa base sólida de infraestrutura é o que me diferencia como desenvolvedor: entendo a stack de cima a baixo. Minha transição para o desenvolvimento é ativa e comprovada pelos projetos abaixo — principalmente com Java/Spring e React.",
];

// ----------------------------------------------------------------------------
//  EXPERIÊNCIA  (mais recente primeiro)
// ----------------------------------------------------------------------------
export interface Experiencia {
  empresa: string;
  cargo: string;
  periodo: string;
  atual?: boolean;
  vinculo: "Estágio" | "CLT";
  descricao: string;
  destaques: string[];
}

export const experiencias: Experiencia[] = [
  {
    empresa: "Tribunal Regional Eleitoral de Goiás (TRE-GO)",
    cargo: "Analista de Redes",
    periodo: "Fev 2026 — presente",
    atual: true,
    vinculo: "Estágio",
    descricao:
      "Suporte de rede e identidade para servidores públicos e Zonas Eleitorais do estado.",
    destaques: [
      "Gestão de contas e permissões no Active Directory (AD)",
      "Configuração de VPNs e de CheckPoints para as Zonas Eleitorais",
      "Configuração de IPs e gerenciamento dos CheckPoints por Zona",
      "Documentação e vínculo de autenticadores ao AD",
    ],
  },
  {
    empresa: "Água Santa Construtora Inc.",
    cargo: "Analista de TI",
    periodo: "Fev 2025 — Fev 2026",
    vinculo: "Estágio",
    descricao:
      "Operação completa de TI da construtora: do suporte ao usuário à infraestrutura crítica.",
    destaques: [
      "Manutenção de servidores, redes e sistemas de segurança",
      "Gestão de banco de dados e documentação técnica",
      "Análise e melhoria de processos de TI e segurança da informação",
      "Apoio ao desenvolvimento de software",
    ],
  },
  {
    empresa: "Maluvinfo Assessoria em Informática",
    cargo: "Analista de TI",
    periodo: "Jun 2015 — Jan 2025",
    vinculo: "CLT",
    descricao:
      "Quase 10 anos atendendo empresas de Goiânia (residências, imobiliária, construtora e diversos estabelecimentos) no leque completo de TI.",
    destaques: [
      "Suporte técnico e atendimento a chamados",
      "Manutenção de servidores, redes e sistemas de segurança",
      "Instalação e manutenção de impressoras; gestão de banco de dados",
      "Projetos de implementação de tecnologia e melhoria de processos",
    ],
  },
];

// ----------------------------------------------------------------------------
//  SKILLS  (agrupadas por categoria — adicione/remova itens à vontade)
// ----------------------------------------------------------------------------
export interface GrupoSkill {
  categoria: string;
  itens: string[];
}

export const skills: GrupoSkill[] = [
  {
    categoria: "Desenvolvimento",
    itens: ["Java", "Spring Boot", "Python", "JavaScript", "Node.js", "C++", "React", "TypeScript", "Next.js", "HTML", "CSS", "POO"],
  },
  {
    categoria: "Infraestrutura & Redes",
    itens: ["Active Directory", "VPN", "CheckPoint", "Firewall", "Servidores", "GLPI", "DUO Mobile", "Terraform", "Node-RED"],
  },
  {
    categoria: "Dados",
    itens: ["SQL", "PostgreSQL", "Supabase", "Oracle Developer", "BrModelo"],
  },
  {
    categoria: "Ferramentas & Processos",
    itens: ["Git", "GitHub", "Docker", "Power BI", "Power Apps", "Power Automate"],
  },
];

// ----------------------------------------------------------------------------
//  PROJETOS  ← COPIE UM BLOCO E COLE NO FIM PARA ADICIONAR UM PROJETO NOVO
// ----------------------------------------------------------------------------
export interface Projeto {
  nome: string;
  resumo: string;
  papel: string;          // ex.: "Full-stack", "Backend", "Freelance"
  stack: string[];
  destaques: string[];
  repos: { label: string; url: string }[];
  demo?: string;          // opcional: link de demo ao vivo
}

export const projetos: Projeto[] = [
  {
    nome: "Sistema de Barbearia (Full-stack)",
    resumo:
      "Sistema de agendamento para barbearia que evoluiu de uma API simples para uma plataforma completa com autenticação, papéis e frontend próprio.",
    papel: "Full-stack · projeto pessoal",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA", "PostgreSQL", "Next.js", "TypeScript"],
    destaques: [
      "Autenticação JWT com papéis distintos (admin, barbeiro, cliente)",
      "Agendamento com controle de status e agendador (scheduler)",
      "Tratamento global de exceções e suíte de testes (test-first)",
      "Frontend em Next.js com painéis separados por tipo de usuário",
    ],
    repos: [
      { label: "Backend (evoluído)", url: "https://github.com/Varpei/evolucao-backend" },
      { label: "Frontend", url: "https://github.com/Varpei/evolucao-frontend" },
      { label: "Backend (v1)", url: "https://github.com/Varpei/barbearia-backend" },
    ],
  },
  {
    nome: "Plataforma de Questões",
    resumo:
      "Projeto freelance: plataforma de estudo que extrai questões de PDFs automaticamente e monta quizzes e simulados.",
    papel: "Full-stack · freelance",
    stack: ["React", "TypeScript", "Vite", "shadcn/ui", "Supabase", "FastAPI", "Python", "pdf.js"],
    destaques: [
      "Extração de questões de PDF via serviço em FastAPI (Python) + pdf.js",
      "Autenticação e persistência com Supabase",
      "Modos de quiz e simulado com painel administrativo",
      "Interface acessível construída com shadcn/ui",
    ],
    repos: [
      { label: "Repositório", url: "https://github.com/Varpei/Plataforma-de-Questoes-FREELANCER" },
    ],
  },
];

export const formacao = [
  {
    titulo: "Bacharelado em Engenharia da Computação",
    instituicao: "PUC-GO — Pontifícia Universidade Católica de Goiás",
    periodo: "7º período (em andamento)",
  },
];

export const cursos = [
  "Versionamento de Código com Git e GitHub — BootCamp Santander (2024)",
  "Monitoria em Algoritmos — PUC-GO (2023)",
  "Lógica de Programação — Softblue (2022)",
  "Python: Desenvolvimento de Jogos — Udemy (2023)",
  "Bot de atendimento no WhatsApp (Python/PHP) — Udemy (2025)",
];

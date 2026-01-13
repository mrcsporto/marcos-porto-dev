// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

const portfolioItems = [
  {
    title: "Athena - Sistema de Proteção à Mulher",
    url: "https://fortaleza.athena.mulheres.ce.gov.br/",
    description: {
      pt: "Sistema usado nas Casas da Mulher no Ceará. Desenvolvido em Ruby on Rails para gestão de atendimentos, denúncias e encaminhamentos humanizados a mulheres vítimas de violência.",
      en: "System used in Women's Support Centers in Ceará. Developed in Ruby on Rails to manage assistance, reports, and humanized referrals for women victims of violence."
    },
    icons: ["devicon-ruby-plain colored", "devicon-rails-plain colored"],
    badgeText: "Governamental",
    badgeClass: "bg-primary"
  },
  {
    title: "Casa da Criança e do Adolescente",
    url: "https://cca.sps.ce.gov.br/",
    description: {
      pt: "Sistema web desenvolvido com Python (backend) e Angular (frontend) para a Secretaria de Proteção Social do Ceará (SPS/CE), voltado para a gestão de atendimentos a crianças e adolescentes vítimas de violência.",
      en: "Web system developed with Python (backend) and Angular (frontend) for the Social Protection Secretariat of Ceará (SPS/CE), focused on managing assistance for victims of violence."
    },
    icons: ["devicon-python-plain colored", "devicon-angularjs-plain colored"],
    badgeText: "Governamental",
    badgeClass: "bg-primary"
  },
  {
    title: "Portal da Mulher",
    url: "https://portal.mulheres.ce.gov.br/",
    description: { 
      pt: "Plataforma feita por e para mulheres com foco em empoderamento feminino. Desenvolvido em Python e Angular pela Secretaria das Mulheres do Governo do Ceará.",
      en: "Platform made by and for women with focus on empowerment. Developed in Python and Angular by the Women's Secretariat of the Government of Ceará."
    },
    icons: ["devicon-python-plain colored", "devicon-angularjs-plain colored"],
    badgeText: "Plataforma",
    badgeClass: "bg-success"
  },
  {
    title: "Sistema de Gestão Patrimonial",
    url: "https://patrimonio.vicegov.ce.gov.br/entrar",
    description: { 
      pt: "Sistema da Vice-Governadoria do Estado do Ceará para controle de patrimônio público. Desenvolvido em Ruby on Rails com Stimulus e Hotwire.",
      en: "State Vice-Governor's office system for managing public property. Developed in Ruby on Rails with Stimulus and Hotwire."
    },
    icons: ["devicon-ruby-plain colored", "devicon-rails-plain colored"],
    badgeText: "Sistema Interno",
    badgeClass: "bg-secondary"
  },
  {
    title: "Jornada da Cidadania",
    url: "/",
    description: { 
      pt: "Jogo educativo em construção, feito com Angular e Phaser 3 para apresentar os serviços da Secretaria da Proteção Social (SPS) de forma interativa para os cidadãos.",
      en: "Interactive game in construction, made with Angular and Phaser 3 to present the services of the Social Protection Secretariat (SPS) to the citizens."
    },
    icons: ["devicon-angularjs-plain colored"],
    badgeText: "Plataforma",
    badgeClass: "bg-success"
  },
  {
    title: "Sistema de Ponto",
    url: "https://sisponto.vicegov.ce.gov.br/entrar",
    description:  {
      pt: "Sistema web para controle de entrada e saída de servidores públicos (registro de ponto), com funcionalidades de login, relatórios e horários. Desenvolvido em Ruby on Rails.",
      en: "Web system for public officials' entry and exit (point registration), with login, reports, and schedules. Developed in Ruby on Rails."
    },
    icons: ["devicon-ruby-plain colored", "devicon-rails-plain colored"],
    badgeText: "Sistema Interno",
    badgeClass: "bg-secondary"
  },
  {
    title: "CompreUp",
    url: "https://compreup.com.br/",
    description: {
      pt: "Desenvolvimento de Front-End e reestruturação de Back-End em plataforma de E-Procurement. Utilizei Angular para criar uma interface responsiva e interativa, integrando funcionalidades avançadas com sistemas ERP. No back-end, liderei a reestruturação utilizando Ruby on Rails, aumentando a escalabilidade, facilitando futuras integrações e garantindo uma solução robusta e eficiente.",
      en: "Front-end development and back-end restructuring of an e-Procurement platform. I used Angular to build a responsive and interactive interface, integrating advanced features with ERP systems. On the back end, I led the restructuring using Ruby on Rails, improving scalability, enabling future integrations, and ensuring a robust and efficient solution."
    },
    icons: ["devicon-ruby-plain colored", "devicon-rails-plain colored"],
    badgeText: "Plataforma",
    badgeClass: "bg-success"
  },
  {
    title: "Sistema de Administração Pública",
    url: "https://gerencial.speedgov.com.br/maracanau",
    description: {
      pt: "Sistemas de Gestão Pública para prefeituras do estado do Ceará, incluindo módulos administrativos, fiscais e contábeis, como gestão de ISSQN, tributária, patrimonial, licitações e dívida ativa. O Sistema Integrado Municipal (SIM) centraliza essas funcionalidades de forma integrada, permitindo a automação e o controle eficiente de todos os processos administrativos.",
      en: "Public Administration Management systems for municipalities in the state of Ceará, including administrative, fiscal, and accounting modules such as ISSQN management, taxation, asset management, procurement, and active debt control. The Integrated Municipal System (SIM) centralizes these features, enabling automated and efficient management of public administration processes."
    },
    icons: ["devicon-ruby-plain colored", "devicon-rails-plain colored"],
    badgeText: "Governamental",
    badgeClass: "bg-primary"
  },
  {
    title: "Sistema Controle Financeiro",
    url: "http://financeiro.speedgov.com.br/usuarios/sign_in/",
    description: {
      pt: "Desenvolvi integralmente um sistema personalizado para controle financeiro interno da empresa Intersol Soluções, responsável pela gestão de receitas, despesas e transferências. A solução inclui controle de acessos, logs de auditoria, relatórios e dashboards, proporcionando uma visão detalhada e confiável da saúde financeira da organização.",
      en: "I fully developed a custom system for internal financial control at Intersol Soluções, managing revenues, expenses, and transfers. The solution includes access control, audit logs, reports, and dashboards, providing a detailed and reliable view of the organization's financial health."
    },
    icons: ["devicon-ruby-plain colored", "devicon-rails-plain colored"],
    badgeText: "Sistema Interno",
    badgeClass: "bg-secondary"
  },
  {
    title: "BestContent AI",
    url: "https://bestcontent.ai/",
    description: {
      pt: "Front-end de plataforma para geração de conteúdo para redes sociais utilizando inteligência artificial, com autenticação via Firebase e integração com a Graph API da Meta.",
      en: "Front-end development of an AI-powered platform for social media content generation, featuring Firebase authentication and integration with Meta's Graph API."
    },
    icons: ["devicon-vuejs-plain colored"],
    badgeText: "Plataforma",
    badgeClass: "bg-success"
  },
];

// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

const portfolioItems = [
  {
    title: "Athena - Sistema de Proteção à Mulher",
    url: "https://fortaleza.athena.mulheres.ce.gov.br/",
    description: "Sistema usado nas Casas da Mulher no Ceará. Desenvolvido em Ruby on Rails para gestão de atendimentos, denúncias e encaminhamentos humanizados a mulheres vítimas de violência.",
    icons: ["devicon-ruby-plain colored", "devicon-rails-plain colored"],
    badgeText: "Governamental",
    badgeClass: "bg-primary"
  },
  {
    title: "Casa da Criança e do Adolescente",
    url: "https://cca.sps.ce.gov.br/",
    description: "Sistema web desenvolvido com Python (backend) e Angular (frontend) para a Secretaria de Proteção Social do Ceará (SPS/CE), voltado para a gestão de atendimentos a crianças e adolescentes vítimas de violência.",
    icons: ["devicon-python-plain colored", "devicon-angularjs-plain colored"],
    badgeText: "Governamental",
    badgeClass: "bg-primary"
  },
  {
    title: "Portal da Mulher",
    url: "https://portal.mulheres.ce.gov.br/",
    description: "Plataforma feita por e para mulheres com foco em empoderamento feminino. Desenvolvido em Python e Angular pela Secretaria das Mulheres do Governo do Ceará.",
    icons: ["devicon-python-plain colored", "devicon-angularjs-plain colored"],
    badgeText: "Plataforma",
    badgeClass: "bg-success"
  },
  {
    title: "Sistema de Gestão Patrimonial",
    url: "https://patrimonio.vicegov.ce.gov.br/entrar",
    description: "Sistema da Vice-Governadoria do Estado do Ceará para controle de patrimônio público. Desenvolvido em Ruby on Rails com Stimulus e Hotwire.",
    icons: ["devicon-ruby-plain colored", "devicon-rails-plain colored"],
    badgeText: "Sistema Interno",
    badgeClass: "bg-secondary"
  },
  {
    title: "Jornada da Cidadania",
    url: "/",
    description: "Jogo educativo em construção, feito com Angular e Phaser 3 para apresentar os serviços da Secretaria da Proteção Social (SPS) de forma interativa para os cidadãos.",
    icons: ["devicon-angularjs-plain colored"],
    badgeText: "Plataforma",
    badgeClass: "bg-success"
  },
  {
    title: "Sistema de Ponto",
    url: "https://sisponto.vicegov.ce.gov.br/entrar",
    description: "Sistema web para controle de entrada e saída de servidores públicos (registro de ponto), com funcionalidades de login, relatórios e horários. Desenvolvido em Ruby on Rails.",
    icons: ["devicon-ruby-plain colored", "devicon-rails-plain colored"],
    badgeText: "Sistema Interno",
    badgeClass: "bg-secondary"
  },
  {
    title: "CompreUp",
    url: "https://compreup.com.br/",
    description: "Desenvolvimento de Front-End e Reestruturação de Back-End em Plataforma de E-Procurement.Utilizei Angular para criar uma interface responsiva e interativa para nossa plataforma de E-Procurement, integrando funcionalidades avançadas com sistemas de ERP. No back-end, estou liderando a reestruturação usando Ruby on Rails, aumentando a escalabilidade e facilitando futuras integrações, garantindo uma solução robusta e eficiente.",
    icons: ["devicon-ruby-plain colored", "devicon-rails-plain colored"],
    badgeText: "Plataforma",
    badgeClass: "bg-success"
  },
  {
    title: "Sistema de Administração Pública",
    url: "https://gerencial.speedgov.com.br/maracanau",
    description: "Sistemas para Gestão Pública para prefeituras do estado do Ceará que incluem módulos específicos para gestão administrativas, fiscais e contábeis de prefeituras. Como, Gestão do ISSQN, Tributária, Patrimonial, Licitação, Dívida Ativa ew etc. O Sistema Integrado Municipal (SIM) abrange essas funcionalidades de forma integrada, permitindo a gestão de todos os processos de forma automatizada.",
    icons: ["devicon-ruby-plain colored", "devicon-rails-plain colored"],
    badgeText: "Governamental",
    badgeClass: "bg-primary"
  },
  {
    title: "Sistema Controle Financeiro",
    url: "http://financeiro.speedgov.com.br/usuarios/sign_in/",
    description: "Desenvolvi integralmente um sistema personalizado para controle financeiro interno da empresa Intersol Soluções, que gerencia receitas, despesas e transferências. Ele também inclui funcionalidades gestão de acessos, logs de alteração, relatórios e dashboards, proporcionando uma visão detalhada da saúde financeira da organização.",
    icons: ["devicon-ruby-plain colored", "devicon-rails-plain colored"],
    badgeText: "Sistema Interno",
    badgeClass: "bg-secondary"
  },
  {
    title: "BestContent AI",
    url: "https://bestcontent.ai/",
    description: "Front-end de plataforma para geração de conteúdo em redes sociais com IA. Firebase, autenticação e integração com a Graph API da Meta.",
    icons: ["devicon-vuejs-plain colored"],
    badgeText: "Plataforma",
    badgeClass: "bg-success"
  }
];

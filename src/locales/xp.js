const xpPtBrList = [
  {
    title: "LandApp",
    subtitle: "Software Engineer",
    stack: ["PHP", "Laravel", "REST API", "Queues", "MySQL"],
    content: {
      text: [
        "Plataforma logística para intermediação entre construtoras e transportadores no setor da construção civil.",
        "A operação exigia controle rigoroso de solicitações, permissões por perfil e processamento eficiente de requisições logísticas, garantindo segurança e performance mesmo com múltiplos usuários simultâneos.",
      ],
      list: [
        "Atuação no backend da plataforma logística aplicando engenharia de software com Laravel.",
        "Estruturei APIs REST, implementei arquitetura baseada em eventos com Observers, comandos para automação interna e filas para processamento assíncrono.",
        "Realizei otimização de queries e melhorias de performance, além de reforçar segurança com Gates, Middlewares e controle granular de permissões.",
        "Também implementei testes automatizados visando estabilidade e evolução sustentável do sistema.",
      ],
    },
  },
  {
    title: "HelpTech",
    subtitle: "Desenvolvedor Full Stack",
    stack: ["Laravel", "Vue.js", "Firebase", "MySQL"],
    content: {
      text: [
        "Plataforma de Gerenciamento de Socorro Veicular.",
        "Processo manual e descentralizado para gestão de chamados e prestadores.",
      ],
      list: [
        "Modelagem de banco de dados focada em relacionamentos eficientes",
        "Backend estruturado em Laravel com APIs REST",
        "Geolocalização para cálculo automatizado de custos",
        "Notificações em tempo real via Firebase",
        "Painel administrativo para controle operacional",
      ],
      impacts: {
        title: "Impacto",
        text: "Digitalização completa do fluxo de atendimento, reduzindo tempo de resposta e centralizando a operação em uma única plataforma.",
      },
    },
  },
  {
    title: "Mobi Uniconn",
    subtitle: "Desenvolvedor Full Stack",
    stack: ["Laravel", "Vue.js", "MySQL", "ASAAS"],
    content: {
      text: [
        "ERP para Proteção Veicular.",
        "Sistema legado com necessidade de modernização estrutural.",
      ],
      list: [
        "Remodelagem do banco de dados para melhor organização e escalabilidade",
        "Refatoração frontend com Vue.js",
        "Integração com API financeira (ASAAS)",
        "Organização da lógica backend com foco em manutenibilidade",
        "Painel administrativo para controle operacional",
      ],
      impacts: {
        title: "Resultado",
        text: "Sistema mais sustentável tecnicamente e preparado para expansão de clientes.",
      },
    },
  },
];

const xpEnList = [
  {
    title: "LandApp",
    subtitle: "Software Engineer",
    stack: ["PHP", "Laravel", "REST API", "Queues", "MySQL"],
    content: {
      text: [
        "Logistics platform for intermediation between construction companies and carriers in the construction sector.",
        "The operation required strict control of requests, permissions by profile, and efficient processing of logistics requests, ensuring security and performance even with multiple simultaneous users.",
      ],
      list: [
        "Worked on the backend of the logistics platform applying software engineering with Laravel.",
        "Structured REST APIs, implemented event-based architecture with Observers, commands for internal automation, and queues for asynchronous processing.",
        "Optimized queries and improved performance, as well as reinforced security with Gates, Middlewares, and granular permission control.",
        "Also implemented automated tests aiming for stability and sustainable evolution of the system.",
      ],
    },
  },
  {
    title: "HelpTech",
    subtitle: "Full Stack Developer",
    stack: ["Laravel", "Vue.js", "Firebase", "MySQL"],
    content: {
      text: [
        "Vehicle Rescue Management Platform.",
        "Manual and decentralized process for managing calls and providers.",
      ],
      list: [
        "Database modeling focused on efficient relationships",
        "Backend structured in Laravel with REST APIs",
        "Geolocation for automated cost calculation",
        "Real-time notifications via Firebase",
        "Administrative panel for operational control",
      ],
      impacts: {
        title: "Impact",
        text: "Complete digitization of the service flow, reducing response time and centralizing the operation on a single platform.",
      },
    },
  },
  {
    title: "Mobi Uniconn",
    subtitle: "Full Stack Developer",
    stack: ["Laravel", "Vue.js", "MySQL", "ASAAS"],
    content: {
      text: [
        "ERP for Vehicle Protection.",
        "Legacy system with need for structural modernization.",
      ],
      list: [
        "Remodeling the database for better organization and scalability",
        "Frontend refactoring with Vue.js",
        "Integration with financial API (ASAAS)",
        "Organization of backend logic with a focus on maintainability",
        "Administrative panel for operational control",
      ],
      impacts: {
        title: "Result",
        text: "Technically more sustainable system prepared for customer expansion.",
      },
    },
  },
];

const xp = {
  pt_BR: xpPtBrList,
  en: xpEnList,
};

export default xp;

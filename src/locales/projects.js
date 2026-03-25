const projectsPtBrList = [
  {
    title: "Bateponto",
    subtitle: "Sistema de Controle de Ponto",
    github: "https://github.com/Rodbber/bateponto",
    stack: ["PHP", "Laravel", "Vue.js", "Tailwind CSS"],
    content: {
      text: [
        "Sistema web para controle de ponto de colaboradores com restrição de acesso por geolocalização.",
        "Permite que empresas regionais gerenciem entradas e saídas de funcionários com validação de localização geográfica, garantindo que o registro seja feito apenas dentro da área permitida.",
      ],
      list: [
        "Backend em Laravel com autenticação e controle de permissões por perfil",
        "Integração com API de geolocalização para restringir o ponto por região",
        "Interface frontend em Vue.js com Blade templates",
        "Gestão de colaboradores e registros de ponto",
      ],
    },
  },
  {
    title: "Reciclagem",
    subtitle: "Plataforma de Gestão de Coleta de Resíduos",
    github: "https://github.com/Rodbber/reciclagem",
    stack: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    content: {
      text: [
        "Plataforma full-stack para gerenciamento e rastreamento digital de operações de coleta de resíduos.",
        "Solução que digitaliza e centraliza o controle de coletas, rotas e parceiros, substituindo processos manuais por um sistema moderno e integrado.",
      ],
      list: [
        "Arquitetura full-stack com Laravel no backend e Vue.js no frontend",
        "Gerenciamento de coletas e rotas de resíduos",
        "Cadastro e controle de parceiros de reciclagem",
        "Interface responsiva com Tailwind CSS",
      ],
    },
  },
  {
    title: "Bateponto App",
    subtitle: "App Mobile de Controle de Ponto",
    github: "https://github.com/Rodbber/beteponto_app",
    stack: ["Flutter", "Dart"],
    content: {
      text: [
        "Aplicativo mobile multiplataforma desenvolvido em Flutter para registro digital de ponto.",
        "Complementa o sistema web Bateponto, permitindo que colaboradores registrem presença diretamente pelo celular com suporte a Android, iOS e Web.",
      ],
      list: [
        "Desenvolvido com Flutter para múltiplas plataformas (Android, iOS, Web, Desktop)",
        "Registro de ponto digital via dispositivo móvel",
        "Integração com backend Laravel do sistema Bateponto",
        "Interface moderna e intuitiva",
      ],
    },
  },
  {
    title: "Loja Spring",
    subtitle: "API REST para Gestão de Caixa",
    github: "https://github.com/Rodbber/Loja-Spring",
    stack: ["Java", "Spring Boot", "REST API"],
    content: {
      text: [
        "API REST desenvolvida em Java com Spring Boot para gerenciamento de caixa de loja.",
        "Projeto que demonstra domínio de desenvolvimento backend com Java enterprise, incluindo operações de CRUD para clientes, produtos e vendas.",
      ],
      list: [
        "API REST completa com Spring Boot",
        "CRUD de clientes, produtos e vendas",
        "Documentação com coleção Postman",
        "Arquitetura em camadas seguindo boas práticas Java",
      ],
    },
  },
];

const projectsEnList = [
  {
    title: "Bateponto",
    subtitle: "Employee Time Tracking System",
    github: "https://github.com/Rodbber/bateponto",
    stack: ["PHP", "Laravel", "Vue.js", "Tailwind CSS"],
    content: {
      text: [
        "Web system for employee time tracking with geolocation-based access restrictions.",
        "Allows regional companies to manage employee check-ins and check-outs with geographic location validation, ensuring records are only made within the permitted area.",
      ],
      list: [
        "Laravel backend with authentication and role-based permission control",
        "Geolocation API integration to restrict clock-in by region",
        "Vue.js frontend with Blade templates",
        "Employee and time record management",
      ],
    },
  },
  {
    title: "Reciclagem",
    subtitle: "Waste Collection Management Platform",
    github: "https://github.com/Rodbber/reciclagem",
    stack: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    content: {
      text: [
        "Full-stack platform for digital management and tracking of waste collection operations.",
        "A solution that digitalizes and centralizes collection control, routes and partners, replacing manual processes with a modern integrated system.",
      ],
      list: [
        "Full-stack architecture with Laravel backend and Vue.js frontend",
        "Waste collection and route management",
        "Recycling partner registration and control",
        "Responsive interface with Tailwind CSS",
      ],
    },
  },
  {
    title: "Bateponto App",
    subtitle: "Mobile Time Tracking App",
    github: "https://github.com/Rodbber/beteponto_app",
    stack: ["Flutter", "Dart"],
    content: {
      text: [
        "Cross-platform mobile application developed in Flutter for digital time tracking.",
        "Complements the Bateponto web system, allowing employees to register attendance directly from their mobile devices with support for Android, iOS and Web.",
      ],
      list: [
        "Developed with Flutter for multiple platforms (Android, iOS, Web, Desktop)",
        "Digital time registration via mobile device",
        "Integration with Bateponto's Laravel backend",
        "Modern and intuitive interface",
      ],
    },
  },
  {
    title: "Loja Spring",
    subtitle: "REST API for Store Management",
    github: "https://github.com/Rodbber/Loja-Spring",
    stack: ["Java", "Spring Boot", "REST API"],
    content: {
      text: [
        "REST API developed in Java with Spring Boot for store cash register management.",
        "Project demonstrating mastery of backend development with enterprise Java, including CRUD operations for customers, products and sales.",
      ],
      list: [
        "Complete REST API with Spring Boot",
        "Customer, product and sales CRUD",
        "Documentation with Postman collection",
        "Layered architecture following Java best practices",
      ],
    },
  },
];

const projects = {
  pt_BR: projectsPtBrList,
  en: projectsEnList,
};

export default projects;

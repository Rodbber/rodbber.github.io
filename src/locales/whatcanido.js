const whatcanido = {
  en: {
    nav: 'What I can do',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      architecture: 'Architecture',
      database: 'Database',
      optimization: 'Optimization',
      platforms: 'Platforms',
    },
    frontend: {
      component_architecture: {
        title: 'Component Architecture',
        description: 'Design reusable, composable components using Vue Composition API or React hooks — separating concerns between UI, logic, and data layers.',
      },
      state_management: {
        title: 'State Management',
        description: 'Manage application state predictably with Pinia (Vue) or Redux Toolkit (React), splitting state by domain to avoid global coupling.',
      },
      performance: {
        title: 'Lazy Loading & Code Splitting',
        description: 'Reduce initial bundle size by dynamically importing routes and heavy components, improving Time to Interactive on slow connections.',
      },
    },
    backend: {
      restful_api: {
        title: 'RESTful API Design',
        description: 'Structure APIs around resources with proper HTTP verbs, versioning, and consistent error responses — reducing client integration friction.',
      },
      repository_pattern: {
        title: 'Repository & Service Layer',
        description: 'Decouple business logic from data access by introducing service and repository layers, making controllers thin and logic testable.',
      },
      auth: {
        title: 'Authentication & Authorization',
        description: 'Implement token-based auth (JWT/Sanctum) with role and permission guards, keeping authorization logic centralized and auditable.',
      },
    },
    architecture: {
      ddd: {
        title: 'Domain-Driven Design (DDD)',
        description: 'Organize code around the business domain using Entities, Value Objects, Aggregates and Domain Services — aligning the technical model with business rules.',
      },
      clean_arch: {
        title: 'Clean / Hexagonal Architecture',
        description: 'Isolate the application core from frameworks and infrastructure via Ports & Adapters, making it easy to swap databases, queues, or HTTP layers.',
      },
      solid: {
        title: 'SOLID Principles',
        description: 'Apply Single Responsibility, Open/Closed, Liskov, Interface Segregation and Dependency Inversion to write maintainable, extensible code.',
      },
    },
    database: {
      schema_design: {
        title: 'Schema Design & Normalization',
        description: 'Design normalized schemas that avoid data duplication while using strategic denormalization for read-heavy paths.',
      },
      indexing: {
        title: 'Indexing & Query Optimization',
        description: 'Identify slow queries with EXPLAIN, add composite indexes on filtered/sorted columns, and rewrite N+1 patterns using eager loading.',
      },
      migrations: {
        title: 'Migrations & Seeding',
        description: 'Version database schema alongside code using migrations, with seeders for deterministic test data — enabling safe CI/CD deploys.',
      },
    },
    optimization: {
      caching: {
        title: 'Caching Strategies',
        description: 'Layer caches at the right level — HTTP headers, Redis query cache, or computed property memoization — to eliminate redundant work.',
      },
      n_plus_one: {
        title: 'N+1 Query Elimination',
        description: 'Use eager loading (with/load) and query scopes to prevent the N+1 problem, reducing hundreds of queries to a single join.',
      },
      bundle: {
        title: 'Bundle & Asset Optimization',
        description: 'Tree-shake unused code, split vendor chunks, compress images with WebP, and serve via CDN to hit Core Web Vitals targets.',
      },
    },
    platforms: {
      full_platform: {
        title: 'Full-Stack Platforms (SaaS & ERP)',
        description: 'Design and build complete management systems — from database schema to reactive UI — covering auth, business logic, background jobs, and financial integrations.',
      },
      institutional: {
        title: 'Institutional Websites',
        description: 'Deliver fast, SEO-optimized corporate websites with near-perfect Lighthouse scores, structured metadata, and multilingual support out of the box.',
      },
      landing_page: {
        title: 'Landing Pages',
        description: 'Build high-conversion landing pages structured around proven persuasion frameworks — designed to turn visitors into leads or paying customers.',
      },
    },
    visuals: {
      component_architecture: {
        type: 'layers',
        layers: [
          { icon: '📱', label: 'App Shell', sublabel: 'Routing, layout, global state' },
          { icon: '📄', label: 'Page Components', sublabel: 'Dashboard, Reports, Settings' },
          { icon: '🧩', label: 'Feature Components', sublabel: 'OrderForm, ProductList, Analytics' },
          { icon: '🔲', label: 'Base Components', sublabel: 'Button, Input, Modal, Table' },
        ],
      },
      state_management: {
        type: 'flow',
        steps: [
          { icon: '🖱️', label: 'Event',    sublabel: 'click / submit', class: 'bg-white border-gray-100 text-gray-700' },
          { icon: '⚙️', label: 'Action',   sublabel: 'triggers',       class: 'bg-white border-gray-100 text-gray-700' },
          { icon: '🗃️', label: 'Store',    sublabel: 'Pinia state',    class: 'bg-indigo-50 border-indigo-100 text-indigo-700' },
          { icon: '🔄', label: 'Computed', sublabel: 'reactive',       class: 'bg-white border-gray-100 text-gray-700' },
          { icon: '🖥️', label: 'UI',       sublabel: 're-render',      class: 'bg-white border-gray-100 text-gray-700' },
        ],
      },
      performance: {
        type: 'metrics',
        items: [
          { value: '340KB', label: 'Initial Bundle', delta: '−85%',    good: true },
          { value: '0.8s',  label: 'LCP',            delta: '−81%',    good: true },
          { value: '<50ms', label: 'Route Switch',   delta: 'instant', good: true },
        ],
      },
      restful_api: {
        type: 'routes',
        routes: [
          { method: 'GET',  path: '/api/v1/orders',             desc: 'paginated list' },
          { method: 'POST', path: '/api/v1/orders',             desc: 'create' },
          { method: 'GET',  path: '/api/v1/orders/{id}',        desc: 'detail' },
          { method: 'PUT',  path: '/api/v1/orders/{id}',        desc: 'update' },
          { method: 'POST', path: '/api/v1/orders/{id}/cancel', desc: 'action' },
        ],
      },
      repository_pattern: {
        type: 'layers',
        layers: [
          { icon: '🌐', label: 'Controller', sublabel: 'Validates HTTP, delegates' },
          { icon: '⚙️', label: 'Service',    sublabel: 'Business rules' },
          { icon: '🏛️', label: 'Repository', sublabel: 'Data abstraction' },
          { icon: '🗄️', label: 'Database',   sublabel: 'MySQL / PostgreSQL' },
        ],
      },
      auth: {
        type: 'matrix',
        columns: ['Orders', 'Reports', 'Financial', 'Admin'],
        rows: [
          { role: 'Admin',    permissions: [true,  true,  true,  true]  },
          { role: 'Manager',  permissions: [true,  true,  true,  false] },
          { role: 'Operator', permissions: [true,  false, false, false] },
          { role: 'Read',     permissions: [true,  true,  false, false] },
        ],
      },
      ddd: {
        type: 'layers',
        layers: [
          { label: 'Presentation',   sublabel: 'Controllers, CLI, APIs',          class: 'bg-white border-gray-100 text-gray-600' },
          { label: 'Infrastructure', sublabel: 'Repositories, Mailers, Cache',    class: 'bg-slate-50 border-slate-100 text-slate-600' },
          { label: 'Application',    sublabel: 'Use Cases, Commands, DTOs',       class: 'bg-blue-50 border-blue-100 text-blue-700' },
          { label: 'Domain',         sublabel: 'Entities, Value Objects, Events', class: 'bg-violet-50 border-violet-100 text-violet-700' },
        ],
      },
      clean_arch: {
        type: 'flow',
        steps: [
          { icon: '🔌', label: 'Adapters',  sublabel: 'Slack, Email, HTTP',   class: 'bg-white border-gray-100 text-gray-600' },
          { icon: '🚪', label: 'Ports',     sublabel: 'Interfaces',            class: 'bg-slate-50 border-slate-100 text-slate-600' },
          { icon: '⚙️', label: 'Use Cases', sublabel: 'Application logic',    class: 'bg-blue-50 border-blue-100 text-blue-700' },
          { icon: '💎', label: 'Domain',    sublabel: 'Pure business rules',  class: 'bg-violet-50 border-violet-100 text-violet-700' },
        ],
      },
      solid: {
        type: 'cards',
        cards: [
          { letter: 'S', title: 'Single Responsibility', desc: 'Each class has a single reason to change' },
          { letter: 'O', title: 'Open / Closed',         desc: 'Open for extension, closed for modification' },
          { letter: 'L', title: 'Liskov Substitution',   desc: 'Subtypes replace their bases without breaking the system' },
          { letter: 'I', title: 'Interface Segregation', desc: 'Small, specific interfaces instead of generic ones' },
          { letter: 'D', title: 'Dependency Inversion',  desc: 'Depend on abstractions, not concrete implementations' },
        ],
      },
      schema_design: {
        type: 'schema',
        entities: [
          { name: 'clients',     fields: [{ name: 'id', type: 'bigint', note: 'PK' }, { name: 'name', type: 'varchar' }, { name: 'email', type: 'varchar' }] },
          { name: 'orders',      fields: [{ name: 'id', type: 'bigint', note: 'PK' }, { name: 'client_id', type: 'bigint', note: 'FK' }, { name: 'status', type: 'varchar' }, { name: 'total_cents', type: 'bigint' }] },
          { name: 'order_items', fields: [{ name: 'id', type: 'bigint', note: 'PK' }, { name: 'order_id', type: 'bigint', note: 'FK' }, { name: 'product_id', type: 'bigint', note: 'FK' }, { name: 'quantity', type: 'int' }] },
          { name: 'products',    fields: [{ name: 'id', type: 'bigint', note: 'PK' }, { name: 'name', type: 'varchar' }, { name: 'price_cents', type: 'bigint' }] },
        ],
        relations: ['1 ──< N', '1 ──< N', 'N >── 1'],
      },
      indexing: {
        type: 'comparison',
        before: [
          { value: '580.000', label: 'rows scanned' },
          { value: '~1.2s',   label: 'response time' },
          { value: 'ALL',     label: 'access type' },
        ],
        after: [
          { value: '12',        label: 'rows scanned' },
          { value: '~2ms',      label: 'response time' },
          { value: 'idx range', label: 'access type' },
        ],
        note: 'INDEX (client_id, status, created_at)',
      },
      migrations: {
        type: 'timeline',
        steps: [
          { version: 'v1', label: 'Create orders',       sublabel: 'Base schema with FK and primary indexes' },
          { version: 'v2', label: 'Add order_items',     sublabel: '1:N relationship with cascade on delete' },
          { version: 'v3', label: 'Add payment columns', sublabel: 'nullable — zero downtime deploy' },
          { version: 'v4', label: 'Add composite index', sublabel: 'Dashboard query performance' },
        ],
      },
      caching: {
        type: 'comparison',
        before: [
          { value: '~80ms',  label: 'response time' },
          { value: '100%',   label: 'database load' },
          { value: 'always', label: 'executes query' },
        ],
        after: [
          { value: '~2ms',  label: 'cache hit (Redis)' },
          { value: '< 5%',  label: 'database load' },
          { value: '5 min', label: 'configurable TTL' },
        ],
        note: 'Tag-based cache — surgical invalidation per company',
      },
      n_plus_one: {
        type: 'comparison',
        before: [
          { value: '501',   label: 'queries (500 orders)' },
          { value: '1 + N', label: 'access pattern' },
          { value: '~3s',   label: 'total time' },
        ],
        after: [
          { value: '4',     label: 'queries (500 orders)' },
          { value: 'eager', label: 'with() + load()' },
          { value: '~80ms', label: 'total time' },
        ],
        note: "Order::with(['client', 'items.product'])->paginate()",
      },
      bundle: {
        type: 'metrics',
        items: [
          { value: '2.4MB', label: 'Monolithic bundle',    delta: 'before',    good: false },
          { value: '540KB', label: 'After code splitting', delta: '−77%',      good: true  },
          { value: '4',     label: 'Separate chunks',      delta: 'lazy load', good: true  },
        ],
      },
      full_platform: {
        type: 'layers',
        layers: [
          { icon: '🖥️', label: 'Frontend SPA',    sublabel: 'Vue.js / React — responsive, accessible' },
          { icon: '🔌', label: 'RESTful API',      sublabel: 'Laravel — versioned, authenticated' },
          { icon: '⚙️', label: 'Business Logic',   sublabel: 'Services, Queues, Schedulers' },
          { icon: '🗄️', label: 'Database + Cache', sublabel: 'MySQL · Redis · S3 Storage' },
        ],
      },
      institutional: {
        type: 'metrics',
        items: [
          { value: '~100', label: 'Lighthouse Score',   delta: 'performance', good: true },
          { value: 'SEO',  label: 'Meta + OG + Schema', delta: 'structured',  good: true },
          { value: 'i18n', label: 'Multilingual',        delta: 'PT · EN',    good: true },
        ],
      },
      landing_page: {
        type: 'flow',
        steps: [
          { icon: '👁️', label: 'Attention', sublabel: 'Hero + headline',  class: 'bg-white border-gray-100 text-gray-700' },
          { icon: '💡', label: 'Interest',  sublabel: 'Benefits',          class: 'bg-white border-gray-100 text-gray-700' },
          { icon: '✅', label: 'Decision',  sublabel: 'Social proof',      class: 'bg-white border-gray-100 text-gray-700' },
          { icon: '🚀', label: 'Action',    sublabel: 'CTA · Form',        class: 'bg-indigo-50 border-indigo-100 text-indigo-700' },
        ],
      },
    },
  },
  pt_BR: {
    nav: 'O que faço',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      architecture: 'Arquitetura',
      database: 'Banco de Dados',
      optimization: 'Otimização',
      platforms: 'Plataformas',
    },
    frontend: {
      component_architecture: {
        title: 'Arquitetura de Componentes',
        description: 'Projeto componentes reutilizáveis com Composition API (Vue) ou hooks (React), separando responsabilidades entre UI, lógica e camada de dados.',
      },
      state_management: {
        title: 'Gerenciamento de Estado',
        description: 'Gerencio estado de forma previsível com Pinia (Vue) ou Redux Toolkit (React), dividindo por domínio para evitar acoplamento global.',
      },
      performance: {
        title: 'Lazy Loading & Code Splitting',
        description: 'Reduzo o bundle inicial com importações dinâmicas de rotas e componentes pesados, melhorando o Time to Interactive em conexões lentas.',
      },
    },
    backend: {
      restful_api: {
        title: 'Design de API RESTful',
        description: 'Estruturo APIs em torno de recursos com verbos HTTP corretos, versionamento e respostas de erro consistentes — reduzindo fricção na integração.',
      },
      repository_pattern: {
        title: 'Repository & Service Layer',
        description: 'Desacolo lógica de negócio do acesso a dados com camadas de serviço e repositório, mantendo controllers enxutos e lógica testável.',
      },
      auth: {
        title: 'Autenticação & Autorização',
        description: 'Implemento autenticação por token (JWT/Sanctum) com guards de role e permissão, mantendo a lógica de autorização centralizada e auditável.',
      },
    },
    architecture: {
      ddd: {
        title: 'Domain-Driven Design (DDD)',
        description: 'Organizo o código em torno do domínio de negócio com Entidades, Value Objects, Agregados e Serviços de Domínio — alinhando modelo técnico com regras de negócio.',
      },
      clean_arch: {
        title: 'Arquitetura Limpa / Hexagonal',
        description: 'Isolo o núcleo da aplicação de frameworks e infraestrutura via Ports & Adapters, facilitando a troca de banco de dados, filas ou camada HTTP.',
      },
      solid: {
        title: 'Princípios SOLID',
        description: 'Aplico Responsabilidade Única, Aberto/Fechado, Liskov, Segregação de Interface e Inversão de Dependência para escrever código manutenível e extensível.',
      },
    },
    database: {
      schema_design: {
        title: 'Modelagem & Normalização',
        description: 'Projeto schemas normalizados que evitam duplicação de dados, usando desnormalização estratégica para caminhos de leitura intensiva.',
      },
      indexing: {
        title: 'Indexação & Otimização de Queries',
        description: 'Identifico queries lentas com EXPLAIN, adiciono índices compostos em colunas filtradas e reescrevo padrões N+1 com eager loading.',
      },
      migrations: {
        title: 'Migrations & Seeders',
        description: 'Versiono o schema junto com o código usando migrations e seeders para dados de teste determinísticos — garantindo deploys seguros em CI/CD.',
      },
    },
    optimization: {
      caching: {
        title: 'Estratégias de Cache',
        description: 'Aplico cache na camada correta — headers HTTP, cache de queries no Redis ou memoização de computed — eliminando trabalho redundante.',
      },
      n_plus_one: {
        title: 'Eliminação de N+1 Queries',
        description: 'Uso eager loading (with/load) e query scopes para prevenir o problema N+1, reduzindo centenas de queries a um único join.',
      },
      bundle: {
        title: 'Otimização de Bundle & Assets',
        description: 'Tree-shaking, divisão de chunks de vendor, compressão de imagens com WebP e entrega via CDN para atingir as métricas de Core Web Vitals.',
      },
    },
    platforms: {
      full_platform: {
        title: 'Plataformas Completas (SaaS & ERP)',
        description: 'Projeto e construo sistemas de gestão completos — do schema do banco até a interface reativa — cobrindo auth, regras de negócio, filas e integrações financeiras.',
      },
      institutional: {
        title: 'Sites Institucionais',
        description: 'Entrego sites corporativos rápidos e otimizados para SEO, com Lighthouse próximo de 100, metadados estruturados e suporte multilíngue.',
      },
      landing_page: {
        title: 'Landing Pages',
        description: 'Construo landing pages de alta conversão estruturadas em frameworks de persuasão — pensadas para transformar visitantes em leads ou clientes.',
      },
    },
    visuals: {
      component_architecture: {
        type: 'layers',
        layers: [
          { icon: '📱', label: 'App Shell', sublabel: 'Roteamento, layout, estado global' },
          { icon: '📄', label: 'Page Components', sublabel: 'Dashboard, Relatórios, Configurações' },
          { icon: '🧩', label: 'Feature Components', sublabel: 'OrderForm, ProductList, Analytics' },
          { icon: '🔲', label: 'Base Components', sublabel: 'Button, Input, Modal, Table' },
        ],
      },
      state_management: {
        type: 'flow',
        steps: [
          { icon: '🖱️', label: 'Evento',   sublabel: 'click / submit', class: 'bg-white border-gray-100 text-gray-700' },
          { icon: '⚙️', label: 'Action',   sublabel: 'dispara',        class: 'bg-white border-gray-100 text-gray-700' },
          { icon: '🗃️', label: 'Store',    sublabel: 'Pinia state',    class: 'bg-indigo-50 border-indigo-100 text-indigo-700' },
          { icon: '🔄', label: 'Computed', sublabel: 'reativo',        class: 'bg-white border-gray-100 text-gray-700' },
          { icon: '🖥️', label: 'UI',       sublabel: 're-render',      class: 'bg-white border-gray-100 text-gray-700' },
        ],
      },
      performance: {
        type: 'metrics',
        items: [
          { value: '340KB', label: 'Bundle inicial', delta: '−85%',    good: true },
          { value: '0.8s',  label: 'LCP',            delta: '−81%',    good: true },
          { value: '<50ms', label: 'Troca de rota',  delta: 'instant', good: true },
        ],
      },
      restful_api: {
        type: 'routes',
        routes: [
          { method: 'GET',  path: '/api/v1/orders',             desc: 'lista paginada' },
          { method: 'POST', path: '/api/v1/orders',             desc: 'criar' },
          { method: 'GET',  path: '/api/v1/orders/{id}',        desc: 'detalhe' },
          { method: 'PUT',  path: '/api/v1/orders/{id}',        desc: 'atualizar' },
          { method: 'POST', path: '/api/v1/orders/{id}/cancel', desc: 'ação' },
        ],
      },
      repository_pattern: {
        type: 'layers',
        layers: [
          { icon: '🌐', label: 'Controller', sublabel: 'Valida HTTP, delega' },
          { icon: '⚙️', label: 'Service',    sublabel: 'Regras de negócio' },
          { icon: '🏛️', label: 'Repository', sublabel: 'Abstração de dados' },
          { icon: '🗄️', label: 'Database',   sublabel: 'MySQL / PostgreSQL' },
        ],
      },
      auth: {
        type: 'matrix',
        columns: ['Pedidos', 'Relatórios', 'Financeiro', 'Admin'],
        rows: [
          { role: 'Admin',    permissions: [true,  true,  true,  true]  },
          { role: 'Gerente',  permissions: [true,  true,  true,  false] },
          { role: 'Operador', permissions: [true,  false, false, false] },
          { role: 'Leitura',  permissions: [true,  true,  false, false] },
        ],
      },
      ddd: {
        type: 'layers',
        layers: [
          { label: 'Presentation',   sublabel: 'Controllers, CLI, APIs',          class: 'bg-white border-gray-100 text-gray-600' },
          { label: 'Infrastructure', sublabel: 'Repositories, Mailers, Cache',    class: 'bg-slate-50 border-slate-100 text-slate-600' },
          { label: 'Application',    sublabel: 'Use Cases, Commands, DTOs',       class: 'bg-blue-50 border-blue-100 text-blue-700' },
          { label: 'Domain',         sublabel: 'Entities, Value Objects, Events', class: 'bg-violet-50 border-violet-100 text-violet-700' },
        ],
      },
      clean_arch: {
        type: 'flow',
        steps: [
          { icon: '🔌', label: 'Adapters',  sublabel: 'Slack, Email, HTTP',      class: 'bg-white border-gray-100 text-gray-600' },
          { icon: '🚪', label: 'Ports',     sublabel: 'Interfaces',               class: 'bg-slate-50 border-slate-100 text-slate-600' },
          { icon: '⚙️', label: 'Use Cases', sublabel: 'Lógica da aplicação',     class: 'bg-blue-50 border-blue-100 text-blue-700' },
          { icon: '💎', label: 'Domain',    sublabel: 'Regras puras de negócio',  class: 'bg-violet-50 border-violet-100 text-violet-700' },
        ],
      },
      solid: {
        type: 'cards',
        cards: [
          { letter: 'S', title: 'Single Responsibility', desc: 'Cada classe tem um único motivo para mudar' },
          { letter: 'O', title: 'Open / Closed',         desc: 'Aberto para extensão, fechado para modificação' },
          { letter: 'L', title: 'Liskov Substitution',   desc: 'Subtipos substituem suas bases sem quebrar o sistema' },
          { letter: 'I', title: 'Interface Segregation', desc: 'Interfaces pequenas e específicas ao invés de genéricas' },
          { letter: 'D', title: 'Dependency Inversion',  desc: 'Dependa de abstrações, não de implementações concretas' },
        ],
      },
      schema_design: {
        type: 'schema',
        entities: [
          { name: 'clients',     fields: [{ name: 'id', type: 'bigint', note: 'PK' }, { name: 'name', type: 'varchar' }, { name: 'email', type: 'varchar' }] },
          { name: 'orders',      fields: [{ name: 'id', type: 'bigint', note: 'PK' }, { name: 'client_id', type: 'bigint', note: 'FK' }, { name: 'status', type: 'varchar' }, { name: 'total_cents', type: 'bigint' }] },
          { name: 'order_items', fields: [{ name: 'id', type: 'bigint', note: 'PK' }, { name: 'order_id', type: 'bigint', note: 'FK' }, { name: 'product_id', type: 'bigint', note: 'FK' }, { name: 'quantity', type: 'int' }] },
          { name: 'products',    fields: [{ name: 'id', type: 'bigint', note: 'PK' }, { name: 'name', type: 'varchar' }, { name: 'price_cents', type: 'bigint' }] },
        ],
        relations: ['1 ──< N', '1 ──< N', 'N >── 1'],
      },
      indexing: {
        type: 'comparison',
        before: [
          { value: '580.000', label: 'linhas escaneadas' },
          { value: '~1.2s',   label: 'tempo de resposta' },
          { value: 'ALL',     label: 'tipo de acesso' },
        ],
        after: [
          { value: '12',        label: 'linhas escaneadas' },
          { value: '~2ms',      label: 'tempo de resposta' },
          { value: 'idx range', label: 'tipo de acesso' },
        ],
        note: 'INDEX (client_id, status, created_at)',
      },
      migrations: {
        type: 'timeline',
        steps: [
          { version: 'v1', label: 'Create orders',       sublabel: 'Schema base com FK e índices primários' },
          { version: 'v2', label: 'Add order_items',     sublabel: 'Relação 1:N com cascade on delete' },
          { version: 'v3', label: 'Add payment columns', sublabel: 'nullable — zero downtime deploy' },
          { version: 'v4', label: 'Add composite index', sublabel: 'Performance em queries de dashboard' },
        ],
      },
      caching: {
        type: 'comparison',
        before: [
          { value: '~80ms',  label: 'tempo de resposta' },
          { value: '100%',   label: 'carga no banco' },
          { value: 'sempre', label: 'executa query' },
        ],
        after: [
          { value: '~2ms',  label: 'cache hit (Redis)' },
          { value: '< 5%',  label: 'carga no banco' },
          { value: '5 min', label: 'TTL configurável' },
        ],
        note: 'Cache por tags — invalidação cirúrgica por empresa',
      },
      n_plus_one: {
        type: 'comparison',
        before: [
          { value: '501',   label: 'queries (500 pedidos)' },
          { value: '1 + N', label: 'padrão de acesso' },
          { value: '~3s',   label: 'tempo total' },
        ],
        after: [
          { value: '4',     label: 'queries (500 pedidos)' },
          { value: 'eager', label: 'with() + load()' },
          { value: '~80ms', label: 'tempo total' },
        ],
        note: "Order::with(['client', 'items.product'])->paginate()",
      },
      bundle: {
        type: 'metrics',
        items: [
          { value: '2.4MB', label: 'Bundle monolítico',   delta: 'antes',     good: false },
          { value: '540KB', label: 'Após code splitting', delta: '−77%',      good: true  },
          { value: '4',     label: 'Chunks separados',    delta: 'lazy load', good: true  },
        ],
      },
      full_platform: {
        type: 'layers',
        layers: [
          { icon: '🖥️', label: 'Frontend SPA',    sublabel: 'Vue.js / React — responsivo, acessível' },
          { icon: '🔌', label: 'API RESTful',      sublabel: 'Laravel — versionada, autenticada' },
          { icon: '⚙️', label: 'Business Logic',   sublabel: 'Services, Queues, Schedulers' },
          { icon: '🗄️', label: 'Database + Cache', sublabel: 'MySQL · Redis · S3 Storage' },
        ],
      },
      institutional: {
        type: 'metrics',
        items: [
          { value: '~100', label: 'Lighthouse Score',   delta: 'performance', good: true },
          { value: 'SEO',  label: 'Meta + OG + Schema', delta: 'estruturado', good: true },
          { value: 'i18n', label: 'Multilíngue',        delta: 'PT · EN',     good: true },
        ],
      },
      landing_page: {
        type: 'flow',
        steps: [
          { icon: '👁️', label: 'Atenção',  sublabel: 'Hero + headline',  class: 'bg-white border-gray-100 text-gray-700' },
          { icon: '💡', label: 'Interesse', sublabel: 'Benefícios',       class: 'bg-white border-gray-100 text-gray-700' },
          { icon: '✅', label: 'Decisão',   sublabel: 'Prova social',     class: 'bg-white border-gray-100 text-gray-700' },
          { icon: '🚀', label: 'Ação',      sublabel: 'CTA · Formulário', class: 'bg-indigo-50 border-indigo-100 text-indigo-700' },
        ],
      },
    },
  },
}

export default whatcanido

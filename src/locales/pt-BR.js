import xp from './xp.js';
import texts from './stacks.js';
import services from './services.js';
import projects from './projects.js';
import whatcanido from './whatcanido.js';
const pt_BR = {
    more: 'Mais',
    about: {
        title: 'Sobre mim',
        headline: 'Engenheiro de Software focado em Arquitetura de Sistemas, Otimização e Impacto de Negócios',
        paragraph1 : `Com mais de ${new Date().getFullYear() - 2021} anos de experiência, projeto e desenvolvo sistemas SaaS e ERPs escaláveis com foco em organização operacional, automação financeira e eficiência técnica. Atuo principalmente com PHP e Laravel no backend, Vue.js no frontend e integrações com APIs financeiras como ASAAS — construindo soluções que impactam diretamente o resultado do negócio.`,
        paragraph2 : `Minha trajetória no desenvolvimento começou na faculdade, onde rapidamente percebi o poder da tecnologia bem aplicada. Desde então, construí sistemas de gestão completos, plataformas de e-commerce, aplicações mobile e integrações entre sistemas, sempre com foco em código limpo, escalabilidade e entrega de valor real para quem usa o produto.`,
        stacks: 'Tecnologias',
        services: {...services.pt_BR},
        stack_texts: {...texts.pt_BR},
    },
    xp: {
        title: 'Experiência em projetos',
        xp: {...xp.pt_BR},
    },
    projects: {
        title: 'Projetos Pessoais',
        list: [...projects.pt_BR],
    },
    what_can_i_do: {
        title: 'O que posso fazer?',
        ...whatcanido.pt_BR,
    },
    contacts: {
        title: 'Contatos',
        contact: {
            label: '',
        }
    },
    language: {
        en:'EN',
        pt:'PT-BR',
    },
    github: 'GitHub',
    theme: {
        toggle: 'Alternar tema',
    },
    visual: {
        before: 'Antes',
        after: 'Depois',
        role: 'Papel',
    },
}

export default pt_BR
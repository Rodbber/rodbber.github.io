import xp from './xp.js';
import texts from './stacks.js';
import services from './services.js';
import projects from './projects.js';
import whatcanido from './whatcanido.js';
const en = {
    more: 'More',
    about: {
        title: 'About me',
        headline: 'Software Engineer focused on Systems Architecture, Optimization and Business Impact',
        paragraph1 : `With over ${new Date().getFullYear() - 2021} years of experience, I design and build scalable SaaS systems and ERPs, focused on operational organization, financial automation, and technical efficiency. My core stack includes PHP and Laravel for robust backends, Vue.js for reactive interfaces, and integrations with financial APIs — delivering solutions that directly impact business outcomes.`,
        paragraph2 : `My development journey started in college, where I quickly realized how well-applied technology can transform operations. Since then, I've built full management systems, e-commerce platforms, mobile applications, and system integrations — always with a focus on clean code, scalability, and delivering real value to end users.`,
        stacks: 'Stacks',
        services: {...services.en},
        stack_texts: {...texts.en},
    },
    xp: {
        title: 'Experience in projects',
        xp: {...xp.en},
    },
    projects: {
        title: 'Personal Projects',
        list: [...projects.en],
    },
    what_can_i_do: {
        title: 'What can I do for you?',
        ...whatcanido.en,
    },
    contacts: {
        title: 'Contacts',
        contact: {
            label: '',
        }
    },
    language: {
        en:'English',
        pt:'Portuguese',
    },
    github: 'GitHub',
    theme: {
        toggle: 'Toggle theme',
    },
    visual: {
        before: 'Before',
        after: 'After',
        role: 'Role',
    },
}

export default en
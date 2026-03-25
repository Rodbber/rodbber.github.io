import { createApp } from 'vue'
import './style.css'
import './style.scss';
import App from './App.vue'
import i18n from './translations'
import Popper from "vue3-popper";
import PrimeVue from 'primevue/config';
import Button from "primevue/button"
import Dialog from 'primevue/dialog';
import Card from 'primevue/card';
import Dropdown from 'primevue/dropdown';

import 'primevue/resources/themes/aura-light-green/theme.css'

const app = createApp(App)

app.use(i18n)
app.component("Popper", Popper);
app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('Card', Card);
app.component('Dropdown', Dropdown);
app.use(PrimeVue);
app.mount('#app')

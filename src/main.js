import { createApp } from 'vue';
import App from './App.vue';
import i18n from "./i18n.js";
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import ToggleButton from 'primevue/togglebutton';
// Importa los estilos de Font Awesome
//import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
app.use(i18n);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: false
        }
    }
});
app.component("pv-togglebutton", ToggleButton);
app.mount('#app');

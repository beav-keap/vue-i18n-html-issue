import { createI18n } from 'vue-i18n';
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
const i18n = createI18n({
    legacy: true,
    allowComposition: true,
    locale: 'en-us',
    missing: () => {},
});
app.use(i18n);
app.mount('#app')

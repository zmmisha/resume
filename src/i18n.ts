import {createI18n} from "vue-i18n";
import en from '@/locales/en.json';
import ru from '@/locales/ru.json';


const messages = {
    en,
    ru
};

const savedLocale = localStorage.getItem('locale')

const i18n = createI18n({
    locale: savedLocale || 'ru',
    fallbackLocale: 'ru',
    messages
});

export default i18n;
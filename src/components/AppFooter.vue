<script setup lang="ts">
import {useI18n} from 'vue-i18n';

const {t} = useI18n();

</script>

<template>
    <footer class="app-footer">
        <span v-html="t('footerRights')" class="app-footer__text"></span>
    </footer>

</template>

<style scoped lang="scss">
a {
    color: inherit; // Наследует цвет текста от родительского элемента
    text-decoration: none; // Убирает подчеркивание
    cursor: pointer; // Курсор в виде указателя
}

.app-footer {
    display: flex;
    //align-items: center;
    justify-content: center;
    //height: 50px;
    //width: 100%;
    //padding: 10px;

    &__text {
        margin-bottom: 8px;
        font-size: 12px;
        color: var(--main-color);
        display: flex;
        align-items: center;
    }
}

@media (max-width: 425px) {

}

@media (max-width: 768px) {

}

@media (max-width: 1024px) {

}
</style>
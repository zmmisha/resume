<script setup lang="ts">

import AppDialog from "@/components/AppDialog.vue";
import {ref} from "vue";
import {useI18n} from "vue-i18n";

const { locale } = useI18n()

const langList = [{ label: 'English', lang: 'en' }, { label: 'Русский', lang: 'ru' }]
const dialogRef = ref(null)

const showDialog = () => {
    if (dialogRef.value) {
        dialogRef.value.showDialog()
    }
}

const hideDialog = () => {
    if (dialogRef.value) {
        dialogRef.value.hideDialog()
    }
}

const toggleLang = (lang: string) => {
    locale.value = lang
    localStorage.setItem('locale', lang)
}
</script>

<template>
    <div class="switch-lang__wrapper">
        <div @mouseover="showDialog" @mouseleave="hideDialog" class="switch-lang">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
                 class="switch-lang__svg">
                <path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "></path>
            </svg>
        </div>

        <AppDialog class="switch-lang__dialog" ref="dialogRef">
            <div class="switch-lang__dialog-content">
                <span v-for="lang in langList" :key="lang" @click="toggleLang(lang.lang)"
                      class="switch-lang__language">
                    {{ lang.label }}
                </span>
            </div>
        </AppDialog>
    </div>
</template>

<style scoped lang="scss">
.switch-lang {
    //z-index: 150;
    &__language {
        cursor: pointer;
        transition: color 0.4s ease;

        &:hover {
            color: var(--main-color);
        }
    }

    &__wrapper {
        position: relative;
    }

    &__dialog {

        top: 140%;
        right: 20%;

        &-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 16px;
            line-height: 24px;
        }
    }

    position: relative;
    width: 42px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    transition: transform 0.4s ease;

    &:before, &:after {
        transition: background-color 0.4s ease;
        content: '';
        position: absolute;
        background-color: var(--nav-item-color);
        width: 1px;
        height: 22px;

    }

    &:before {
        left: 0;
        margin-left: 3px;
    }

    &:after {
        right: 0;
        margin-right: 3px;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }

    &__svg {
        transition: fill 0.4s ease;
        fill: var(--main-color);
        width: 20px;
        height: 20px;
    }

    &:hover &__svg {
        fill: var(--main-color-hover);
    }

    &:hover::after, &:hover::before {
        background-color: var(--main-color-hover);
    }
}
</style>
<script setup lang="ts">

import AppButton from "@/components/AppButton.vue";
// import {AppHomeListLink} from "@/types/AppHomeListLink";
import {useI18n} from "vue-i18n";
import router from "@/router";

const {t} = useI18n();

const listLink: {label: string, route: string}[] = [{label: 'homeBtnAbout', route: '/about'}, {label:
            'homeBtnProjects', route: '/projects'}];

const navigateTo = (route: string) => {
    router.push(route)
}
</script>

<template>
    <div class="home__wrapper">
        <div class="home__welcome-text">
            <h1>{{ t('developer') }}</h1>
            <h2>{{ t('developerDescription') }}</h2>
        </div>

        <ul class="home__list-link">
            <li v-for="item in listLink" :key="item">
                <AppButton @click="navigateTo(item.route)" class="home__btn">{{ t(item.label) }}</AppButton>
            </li>
        </ul>
    </div>

    <div class="home__background">
        <svg width="100%" height="auto" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="90%" text-anchor="middle" font-size="220" font-family="Arial, sans-serif"
                  fill="none" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"
                  class="animated-text">
                Welcome
            </text>
        </svg>
    </div>

    <div class="home__background">
        <svg width="100%" height="min" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
            <text x="51%" y="90%" text-anchor="middle" font-size="220" font-family="Arial, sans-serif"
                  fill="none" stroke="#b37f43" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"
                  class="animated-text">
                Welcome
            </text>
        </svg>
    </div>

</template>

<style scoped lang="scss">
@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}

.animated-text {
    font-weight: bold;
    font-style: italic;
    opacity: 0.15;
    stroke-dasharray: 1400;
    stroke-dashoffset: 1400;
    animation: draw 4s ease-in-out forwards;
    stroke-linecap: round; /* Закругляет концы линий */
    stroke-linejoin: round; /* Закругляет углы линий */
}

.home {
    &__background {
        width: 100%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotateZ(-25deg);
        z-index: -9;
    }

    &__btn {
        width: 200px;
        height: 65px;
        font-size: 18px;
        text-transform: uppercase;
    }

    &__welcome-text {
        font-size: 64px;
        text-align: center;
        line-height: 80px;
        text-transform: uppercase;
        color: var(--text-color);
        margin-bottom: 20px;
    }

    &__list-link {
        display: flex;
        justify-content: center;
        list-style-type: none;
        column-gap: 20px;
    }

    &__wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

@media (max-width: 481px) {

    .home {
        &__welcome-text {
            font-size: 32px;
            line-height: 40px;
        }

        &__btn {
            width: 140px;
            height: 50px;
            font-size: 16px;
        }
    }
}

@media (min-width: 481px) and (max-width: 769px) {
    .home {
        &__welcome-text {
            font-size: 32px;
            line-height: 40px;
        }

        &__btn {
            width: 140px;
            height: 50px;
            font-size: 16px;
        }
    }
}

@media (min-width: 769px) and (max-width: 1024px) {

}

</style>
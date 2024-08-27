<script setup lang="ts">
// import { onMounted } from 'vue'
// import { useRoute } from 'vue-router'
// import { useI18n } from 'vue-i18n'
// import { useThemeLocaleData } from './composables/index.js'


import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
// import {onMounted, Ref, ref} from "vue";
// import {useRouter} from "vue-router";
// import AppLoadingAnimation from "@/components/AppLoadingAnimation.vue";

// const router = useRouter();
// const isLoading: Ref<boolean> = ref(false);
//
// onMounted(() => {
//     router.beforeEach((to, from, next) => {
//         isLoading.value = true;
//         setTimeout(() => {
//             isLoading.value = false;
//             next();
//         }, 1000); // 3 секунды
//     });
// });
</script>

<template>
    <div class="view-container">
        <AppHeader/>
        <router-view></router-view>
        <AppFooter/>
<!--        <AppLoadingAnimation v-if="isLoading"/>-->
    </div>

</template>

<style lang="scss">
.view-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: -10;
    transition: all 0.5s ease;
}
@media (max-width: 481px) {
    .view-container {
        border: 8px solid rgba(98, 98, 98, 0.08);
        border-top: none;
    }
}

@media (min-width: 481px) and (max-width: 769px) {
    .view-container {
        border: 8px solid rgba(98, 98, 98, 0.08);
        border-top: none;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {

}
</style>
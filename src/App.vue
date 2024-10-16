<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
    <div class="view-container">
        <AppHeader/>
        <router-view></router-view>
        <AppFooter/>
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
    transition: background-color 1s ease;
    overflow: hidden;
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
<script setup lang="ts">

</script>

<template>
    <button class="app-button">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.app-button {
    border: none;
    opacity: 0.9;
    padding: 10px;
    background-color: var(--btn-bg-color);
    color: var(--btn-text-color);
    &:hover {
        background-color: var(--btn-hover-bg-color);
        color: var(--btn-hover-text-color);
        cursor: pointer;
        transition: 0.7s all;
    }
}
</style>
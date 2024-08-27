<script setup lang="ts">

</script>

<template>
<div class="loading-animation">
    <div class="loading-animation__top-half"></div>
    <div class="loading-animation__bottom-half"></div>
</div>
</template>

<style scoped lang="scss">
.loading-animation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    overflow: hidden;
    &__top-half, &__bottom-half {
        width: 100%;
        height: 50%;
        transition: transform 3s ease;
    }
    &__top-half {
        background-color: #ff6347; /* tomato color */
        transform-origin: bottom center;
        animation: rotateTop 3s infinite;
    }
    &__bottom-half {
        background-color: #4682b4; /* steelblue color */
        transform-origin: top center;
        animation: rotateBottom 3s infinite;
    }
}

@keyframes rotateTop {
    0% {
        transform: rotateX(0deg);
    }
    50% {
        transform: rotateX(180deg);
    }
    100% {
        transform: rotateX(360deg);
    }
}

@keyframes rotateBottom {
    0% {
        transform: rotateX(0deg);
    }
    50% {
        transform: rotateX(-180deg);
    }
    100% {
        transform: rotateX(-360deg);
    }
}
</style>
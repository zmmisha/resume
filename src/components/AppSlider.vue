<script setup lang="ts">
import { ref } from 'vue';

const slides = ref([
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
]);

const currentSlide = ref(0);

const nextSlide = () => {
    if (currentSlide.value === slides.value.length - 1) {
        currentSlide.value = 0;
    } else {
        currentSlide.value = currentSlide.value + 1;
    }

};

const prevSlide = () => {
    if (currentSlide.value === 0) {
        currentSlide.value = slides.value.length - 1;
    } else {
        currentSlide.value = currentSlide.value - 1;
    }

};
</script>

<template>
    <div>
        <div class="slider">
            <div class="slide" v-for="(slide, index) in slides" :key="slide.id" :class="{ active: index === currentSlide }">
                {{ slide.content }}
            </div>
        </div>
        <button @click="prevSlide">Prev</button>
        <button @click="nextSlide">Next</button>
    </div>
</template>

<style scoped lang="scss">
.slider {
    display: flex;
    justify-content: center;
    //overflow: hidden;
}

.slide {
    width: 100px;
    height: 100px;
    background-color: #b37f43;
    transition: transform 0.5s;
    opacity: 0;
    display: none;

    &.active {
        transition: all 1s;
        display: flex;
        opacity: 1;
    }
}
</style>
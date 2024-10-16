<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import AppButton from "@/components/AppButton.vue";
import SvgGallows from "@/assets/svg/SvgGallows.vue";
import SvgTodos from "@/assets/svg/SvgTodos.vue";
import SvgArrow from "@/assets/svg/SvgArrow.vue";
import SvgToolyard from "@/assets/svg/SvgToolyard.vue";

const {t} = useI18n();

const slides = [
    {
        id: 1,
        image: SvgGallows,
        title: 'gallows',
        description: 'todosDescription',
        info: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Vite', 'Bootstrap', 'Tailwind', 'Figma'],
        link: 'https://github.com/kotlyarovmik/gallows',
        bgcTop: 'var(--p1-bg-top-color)',
        bgcBottom: 'var(--p1-bg-bottom-color)',
        imgColor: 'var(--p1-img-color)',

    },
    {
        id: 2,
        image: SvgTodos,
        title: 'todos',
        description: 'todosDescription',
        info: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Vite', 'Bootstrap', 'Tailwind', 'Figma'],
        link: 'https://github.com/kotlyarovmik/gallows',
        bgcTop: 'var(--p2-bg-top-color)',
        bgcBottom: 'var(--p2-bg-bottom-color)',
        imgColor: 'var(--p2-img-color)',
    },
    {
        id: 3,
        image: SvgToolyard,
        title: 'toolyards',
        description: 'toolyardsDescription',
        info: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Vite', 'Bootstrap', 'Tailwind', 'Figma'],
        link: 'https://github.com/kotlyarovmik/gallows',
        bgcTop: 'var(--p3-bg-top-color)',
        bgcBottom: 'var(--p3-bg-bottom-color)',
        imgColor: 'var(--p3-img-color)',
    },
    {
        id: 4,
        image: SvgToolyard,
        title: 'mainCraft',
        description: 'mainCraftDescription',
        info: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Vite', 'Bootstrap', 'Tailwind', 'Figma'],
        link: 'https://github.com/kotlyarovmik/gallows',
        bgcTop: 'var(--p4-bg-top-color)',
        bgcBottom: 'var(--p4-bg-bottom-color)',
        imgColor: 'var(--p4-img-color)',
    },
    {
        id: 5,
        image: SvgToolyard,
        title: 'world',
        description: 'worldDescription',
        info: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Vite', 'Bootstrap', 'Tailwind', 'Figma'],
        link: 'https://github.com/kotlyarovmik/gallows',
        bgcTop: 'var(--p5-bg-top-color)',
        bgcBottom: 'var(--p5-bg-bottom-color)',
        imgColor: 'var(--p5-img-color)',
    },
];

const currentSlide = ref<number>(1);
const currentTabSlide = ref<number>(currentSlide.value);
const isAnimating = ref<boolean>(false);

const nextSlide = () => {
    if (isAnimating.value) return;
    const currentIndex = currentSlide.value;
    const nextIndex = currentIndex === slides.length ? 1 : currentIndex + 1;
    animateSlideChange(nextIndex, 'right');
};

const prevSlide = () => {
    if (isAnimating.value) return;
    const currentIndex = currentSlide.value;
    const prevIndex = currentIndex === 1 ? slides.length : currentIndex - 1;
    animateSlideChange(prevIndex, 'left');
};

const selectSlide = (slideId: number) => {
    if (isAnimating.value || slideId === currentSlide.value) return;
    const direction = slideId > currentSlide.value ? 'right' : 'left';
    animateSlideChange(slideId, direction);
};

const animateSlideChange = (newSlideId: number, direction: 'left' | 'right') => {
    isAnimating.value = true;
    currentTabSlide.value = newSlideId;
    const currentSlideElement = document.querySelector('.app-swiper__item_active');
    const newSlideElement = document.querySelector(`.app-swiper__item:nth-child(${newSlideId})`);

    if (currentSlideElement && newSlideElement) {
        currentSlideElement.classList.add(`app-swiper__item_animate-current-${direction}`);
        newSlideElement.classList.add(`app-swiper__item_animate-next-${direction}`);
        currentSlideElement.classList.add('app-swiper__item_hide-current');
        newSlideElement.classList.add('app-swiper__item_show-next');

        setTimeout(() => {
            currentSlideElement.classList.remove('app-swiper__item_active');
            currentSlideElement.classList.remove('app-swiper__item_hide-current');
            newSlideElement.classList.remove('app-swiper__item_show-next');
            newSlideElement.classList.add('app-swiper__item_active');
            newSlideElement.classList.add('app-swiper__item_animate-slide-content');
            setTimeout(() => {
                currentSlide.value = newSlideId;
                isAnimating.value = false;
            }, 800);
        }, 1500); // Длительность анимации
    }
};

const animateFirstSlide = (direction: 'left' | 'right') => {
    isAnimating.value = true;
    const currentSlideElement = document.querySelector('.app-swiper__item_active');

    if (currentSlideElement) {
        currentSlideElement.classList.add(`app-swiper__item_animate-next-${direction}`);
        currentSlideElement.classList.add('app-swiper__item_hide-first');

        setTimeout(() => {
            currentSlideElement.classList.remove('app-swiper__item_hide-first');
            currentSlideElement.classList.remove(`app-swiper__item_animate-next-${direction}`);
            currentSlideElement.classList.add('app-swiper__item_animate-slide-content');
            setTimeout(() => {
                isAnimating.value = false;
                currentSlideElement.classList.remove('app-swiper__item_animate-slide-content');
            }, 800);
        }, 1500); // Длительность анимации
    }
};

onMounted(() => {
    animateFirstSlide('left');
})
</script>

<template>
    <div class="app-swiper">
        <div
                v-for="slide in slides"
                :key="slide.id"
                :class="{ 'app-swiper__item_active': slide.id === currentSlide }"
                class="app-swiper__item"
        >
            <div
                    :style="{ 'background-color': slide.bgcTop }"
                    class="app-swiper__top-half">
            </div>

            <div class="app-swiper__item-wrapper">
                <div
                        class="app-swiper__visual"
                >
                    <component
                            class="app-swiper__img"
                            :is="slide.image"
                            :style="{ 'fill': slide.imgColor }"
                    />
                </div>

                <div class="app-swiper__content-wrapper">
                    <p class="app-swiper__title">{{ t(slide.title) }}</p>
                    <p class="app-swiper__description">{{ t(slide.description) }}</p>
                    <AppButton class="app-swiper__btn">{{ t('projectView') }}</AppButton>
                </div>

                <ul class="app-swiper__info">
                    <li
                            v-for="item in slide.info"
                            :key="item"
                            class="app-swiper__info-item">{{ item }}
                    </li>
                </ul>
            </div>

            <div
                    :style="{ 'background-color': slide.bgcBottom }"
                    class="app-swiper__bottom-half">
            </div>
        </div>

        <div @click="prevSlide" class="app-swiper__prev">
            <SvgArrow/>
        </div>
        <div @click="nextSlide" class="app-swiper__next">
            <SvgArrow/>
        </div>

        <ul class="app-swiper__switcher">
            <li
                    v-for="slide in slides"
                    :key="slide.id"
                    class="app-swiper__switcher-item"
                    :class="{ 'app-swiper__switcher-item_active': slide.id === currentTabSlide}"
                    @click="selectSlide(slide.id)"
            >
                {{ slide.id }}
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.app-swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;

    &__switcher {
        position: relative;
        z-index: 4;
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px auto 0 auto;
        color: var(--text-color);
        font-size: 18px;

        &-item {
            transition: 0.4s border ease, 0.4s transform ease;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border-radius: 10%;
            background-color: var(--swiper-switcher-bg-color);
            cursor: pointer;
            opacity: 0.5;
            box-sizing: border-box;

            &_active {
                opacity: 1;
                border: solid 0.8px var(--main-color);
            }

            &:not(&_active):hover {
                opacity: 0.8;
                border: solid 0.8px var(--main-color);
                transform: scale(1.03);
            }
        }
    }

    &__prev,
    &__next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 15px;
        height: 25px;
        z-index: 20;
        cursor: pointer;
        fill: var(--main-color);
        opacity: 0.6;
        transition: scale 0.4s ease;

        &:hover {
            scale: 1.05;
            opacity: 1;
        }
    }

    &__prev {
        left: 5%;
    }

    &__next {
        right: 5%;
        transform: rotateZ(180deg) translateY(50%);
    }


    &__content-wrapper {
        position: absolute;
        top: calc(50% - 30px);
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: calc(50% + 30px);
    }

    &__top-half {
        left: 0;
        top: 0;
        width: 100%;
        height: 50%;
        position: absolute;
        z-index: -1;
        transition: background-color 0.4s ease;
    }

    &__bottom-half {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50%;
        position: absolute;
        z-index: -1;
        transition: background-color 0.4s ease;
    }

    &__title {
        font-size: 60px;
        font-weight: 700;
        color: var(--text-color);
        letter-spacing: 30px;
        text-align: center;
        text-transform: uppercase;
        z-index: 1;
    }

    &__description {
        color: var(--text-color);
        font-size: 16px;
        max-width: 400px;
        width: 90%;
        margin-top: 20px;
        line-height: 20px;
        text-align: justify;
        z-index: 1;
    }

    &__btn {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 55px;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 700;
        z-index: 4;
    }

    &__item {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;

        &-wrapper {
            height: 100%;
        }

        &_active {
            opacity: 1;
        }

        &_hide-current {
            opacity: 1;
            .app-swiper__item-wrapper {
                transition: opacity 0.5s;
                opacity: 0;
            }
        }

        &_show-next {
            z-index: -2;
            opacity: 1;
            .app-swiper__item-wrapper {
                opacity: 0;
            }
        }

        &_hide-first {
            opacity: 1;

            .app-swiper__item-wrapper {
                opacity: 0;
            }
        }

        &_animate-current-left {
            .app-swiper__top-half {
                animation: slide-out-left 1s 0.5s ease-in forwards;
            }

            .app-swiper__bottom-half {
                animation: slide-out-left 1s ease-in forwards;
            }
        }

        &_animate-next-left {
            .app-swiper__top-half {
                animation: slide-in-left 1s 0.5s ease-in forwards;
                opacity: 1;
            }

            .app-swiper__bottom-half {
                animation: slide-in-left 1s ease-in forwards;
            }
        }

        &_animate-current-right {
            .app-swiper__top-half {
                animation: slide-out-right 1s 0.5s ease-in forwards;
            }

            .app-swiper__bottom-half {
                animation: slide-out-right 1s ease-in forwards;
            }
        }

        &_animate-next-right {
            .app-swiper__top-half {
                animation: slide-in-right 1s 0.5s ease-in forwards;
                opacity: 1;
            }

            .app-swiper__bottom-half {
                animation: slide-in-right 1s ease-in forwards;
            }
        }

        &_animate-slide-content {
            .app-swiper__item-wrapper {
                animation: slide-content-animate 0.8s ease;
            }
        }
    }


    &__visual {
        position: absolute;
        width: 755px;
        max-height: 573px;
        min-height: 380px;
        height: 60%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &__img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        opacity: 0.7;
    }

    &__info {
        position: absolute;
        bottom: 15%;
        right: 10%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        color: var(--text-color-secondary);
        z-index: 1;

        &-item {
            font-size: 14px;
            line-height: 20px;
            text-transform: uppercase;
        }
    }
}


@keyframes slide-out-left {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

@keyframes slide-in-left {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}

@keyframes slide-out-right {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
}

@keyframes slide-in-right {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}

@keyframes slide-content-animate {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 481px) {
    .app-swiper {
        &__title {
            font-size: 32px;
            line-height: 40px;
            letter-spacing: 10px;
        }

        &__description {
            font-size: 12px;
            line-height: 16px;
            max-width: 300px;
        }

        &__content-wrapper {
            top: calc(50% - 20px);
            height: calc(50% + 20px);
        }

        &__btn {
            height: 40px;
            width: 170px;
        }

        &__visual {
            min-height: 250px;
        }

        &__info {
            display: none;
        }
    }
}

@media (min-width: 481px) and (max-width: 769px) {
    .app-swiper {
        &__title {
            font-size: 50px;
            line-height: 50px;
            letter-spacing: 13px;
        }

        &__description {
            font-size: 14px;
            line-height: 16px;
            max-width: 300px;
        }

        &__content-wrapper {
            top: calc(50% - 25px);
            height: calc(50% + 25px);
        }

        &__btn {
            height: 50px;
            width: 200px;
        }

        &__visual {
            min-height: 250px;
        }

        &__info {
            display: none;
        }
    }
}

@media (min-width: 769px) and (max-width: 1024px) {

}
</style>
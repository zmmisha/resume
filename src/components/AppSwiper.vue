<script setup lang="ts">
import {ref} from 'vue';
import AppButton from "@/components/AppButton.vue";
import SvgGallows from "@/assets/svg/SvgGallows.vue";
import SvgTodos from "@/assets/svg/SvgTodos.vue";
import SvgArrow from "@/assets/svg/SvgArrow.vue";
import SvgToolyard from "@/assets/svg/SvgToolyard.vue";

const slides = [
    {
        id: 1,
        image: SvgGallows,
        title: 'gallows',
        description: 'On the occasion of the evolution of its services , Airfrance organized an exhibition to allow travelers to discover all their lastest services. In this exhibition, visitors could use an iOS application to discover additional content and attempt to win airplane tickets.',
        info: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Vite', 'Bootstrap', 'Tailwind', 'Figma'],
        link: 'https://github.com/kotlyarovmik/gallows',
        bgcTop: 'var(--p1-bg-top-color)',
        bgcBottom: 'var(--p1-bg-bottom-color)',
        imgColor: 'var(--p1-img-color)',

    },
    {
        id: 2,
        image: SvgTodos,
        title: 'Todos',
        description:
                'For the reopening of the National Museum Picasso Paris, the museum team organized a competition to create an iOS application to showcase the univers of the artist Picasso and encourage visitors to come and discover the new exhibition in the museum.',
        info: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Vite', 'Bootstrap', 'Tailwind', 'Figma'],
        link: 'https://github.com/kotlyarovmik/gallows',
        bgcTop: 'var(--p2-bg-top-color)',
        bgcBottom: 'var(--p2-bg-bottom-color)',
        imgColor: 'var(--p2-img-color)',
    },
    {
        id: 3,
        image: SvgToolyard,
        title: 'Toolyard',
        description:
                'Omnisense is an interactive experience which combines a smartphone and a desktop. The goal of the project is to make you think about the different uses of social data. ',
        info: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Vite', 'Bootstrap', 'Tailwind', 'Figma'],
        link: 'https://github.com/kotlyarovmik/gallows',
        bgcTop: 'var(--p3-bg-top-color)',
        bgcBottom: 'var(--p3-bg-bottom-color)',
        imgColor: 'var(--p3-img-color)',
    },
    {
        id: 4,
        image: SvgToolyard,
        title: 'MainCraft',
        description:
                'Omnisense is an interactive experience which combines a smartphone and a desktop. The goal of the project is to make you think about the different uses of social data. ',
        info: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Vite', 'Bootstrap', 'Tailwind', 'Figma'],
        link: 'https://github.com/kotlyarovmik/gallows',
        bgcTop: 'var(--p4-bg-top-color)',
        bgcBottom: 'var(--p4-bg-bottom-color)',
        imgColor: 'var(--p4-img-color)',
    },
    {
        id: 5,
        image: SvgToolyard,
        title: 'World',
        description:
                'Omnisense is an interactive experience which combines a smartphone and a desktop. The goal of the project is to make you think about the different uses of social data. ',
        info: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Vite', 'Bootstrap', 'Tailwind', 'Figma'],
        link: 'https://github.com/kotlyarovmik/gallows',
        bgcTop: 'var(--p5-bg-top-color)',
        bgcBottom: 'var(--p5-bg-bottom-color)',
        imgColor: 'var(--p5-img-color)',
    },
];

const currentSlide = ref<number>(1);

const nextSlide = () => {
    const currentIndex = currentSlide.value;
    const nextIndex = currentIndex === slides.length ? 1 : currentIndex + 1;
    animateSlideChange(nextIndex);
};

const prevSlide = () => {
    const currentIndex = currentSlide.value;
    const prevIndex = currentIndex === 1 ? slides.length : currentIndex - 1;
    animateSlideChange(prevIndex);
};

const selectSlide = (slideId: number) => {
    currentSlide.value = slideId
}

const animateSlideChange = (newSlideId: number) => {
    const currentSlideElement = document.querySelector('.app-swiper__item_active');
    const newSlideElement = document.querySelector(`.app-swiper__item:nth-child(${newSlideId})`);

    if (currentSlideElement && newSlideElement) {
        // currentSlideElement.classList.remove('app-swiper__item_active');
        currentSlideElement.classList.add('app-swiper__item_animate-current');
        newSlideElement.classList.add('app-swiper__item_animate-next');

        currentSlideElement.classList.add('app-swiper__item_hide-current');
        newSlideElement.classList.add('app-swiper__item_show-next');


        setTimeout(() => {
            currentSlideElement.classList.remove('app-swiper__item_active');
            currentSlideElement.classList.remove('app-swiper__item_hide-current');
            newSlideElement.classList.remove('app-swiper__item_show-next');
            currentSlideElement.classList.remove('app-swiper__item_animate-current');
            newSlideElement.classList.remove('app-swiper__item_animate-next');
            newSlideElement.classList.add('app-swiper__item_active');
            newSlideElement.classList.add('app-swiper__item_animate-slide-content');
            setTimeout(() => {
                currentSlide.value = newSlideId;
            }, 800);
        }, 1500); // Длительность анимации
    }
};
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
                    <p class="app-swiper__title">{{ slide.title }}</p>
                    <p class="app-swiper__description">{{ slide.description }}</p>
                    <AppButton class="app-swiper__btn">View Project</AppButton>
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
                    :class="{ 'app-swiper__switcher-item_active': slide.id === currentSlide}"
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
        z-index: 20;
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px auto 0 auto;
        color: var(--text-color);
        font-size: 18px;

        &-item {
            transition: 0.8s background-color ease;
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

            &:hover {
                border: solid 0.8px var(--main-color);
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
        background-color: #33b3c7;
        z-index: -1;
    }

    &__bottom-half {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50%;
        position: absolute;
        background-color: #025764;
        z-index: -1;
    }

    &__title {
        //position: absolute;
        //top: 50%;
        //left: 50%;
        //transform: translate(-50%, -50%);

        font-size: 60px;
        font-weight: 700;
        color: var(--text-color);
        letter-spacing: 30px;
        text-align: center;
        text-transform: uppercase;
    }

    &__description {
        //position: absolute;
        //top: 50%;
        //left: 50%;
        //transform: translate(-50%, -50%);
        color: var(--text-color);
        font-size: 16px;
        max-width: 400px;
        width: 90%;
        margin-top: 20px;
        line-height: 20px;
        text-align: justify;
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
        //margin-top: 40px;
        z-index: 4;
        //border: 1px solid rgba(255, 255, 255, 0.15);
        //background-color: rgba(255, 255, 255, 0.15);
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
            //transition: opacity 0.5s;
        }

        &_hide-current {
            opacity: 1;
            //.app-swiper__content-wrapper,
            //.app-swiper__visual,
            //.app-swiper__info {
            //    opacity: 0;
            //    transition: opacity 2s;
            //}
            .app-swiper__item-wrapper {
                transition: opacity 0.5s;
                opacity: 0;
            }


        }

        &_show-next {
            z-index: -2;
            opacity: 1;
            //transition: opacity 0.5s;

            .app-swiper__item-wrapper {
                opacity: 0;
            }


        }

        &_animate-current {
            .app-swiper__top-half {
                animation: slide-out 1s 0.5s ease-in forwards;
            }

            .app-swiper__bottom-half {
                animation: slide-out 1s ease-in forwards;
            }
        }

        &_animate-next {
            .app-swiper__top-half {
                animation: slide-in 1s 0.5s ease-in forwards;
                opacity: 1;
            }

            .app-swiper__bottom-half {
                animation: slide-in 1s ease-in forwards;
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
        //fill: var(--p1-img-color);
        opacity: 0.7;
    }

    &__info {
        position: absolute;
        bottom: 15%;
        right: 10%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        //row-gap: 50px;
        color: var(--text-color-secondary);

        &-item {
            font-size: 14px;
            line-height: 20px;
            text-transform: uppercase;
        }
    }
}


@keyframes slide-out {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

@keyframes slide-in {
    0% {
        transform: translateX(100%);
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
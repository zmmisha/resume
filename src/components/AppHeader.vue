<script setup lang="ts">

import {AppNavListItem} from "@/types/AppNavListItem";
// import {useRouter} from "vue-router";
import AppSwitchMode from "@/components/AppSwitchMode.vue";
import {Ref, ref} from "vue";

const navList: AppNavListItem[] = ['home', 'about', 'projects', 'contact']
// const router = useRouter()
const isMenuOpen: Ref<boolean> = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <header :class="{'app-header_toggle-menu': isMenuOpen}" class="app-header">
    <span class="app-header__logo"><svg width="220" height="50" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="ISOCPEUR, cursive"
              fill="#b37f43" font-style="normal" font-weight="bold" letter-spacing="-1">
            KOTLYAROFF
        </text>
    </svg></span>

        <div class="app-header__right">
            <nav
                    class="app-header__nav"
                    :class="{'app-header__nav_toggle-menu': isMenuOpen}"
            >
                <ul class="app-header__nav-list">
                    <li v-for="item in navList"
                        :key="item"
                        class="app-header__nav-item"
                    >
                        <router-link
                                :to="`/${item}`"
                                active-class="app-header__nav-item_active"
                        >
                            {{ item }}
                        </router-link>
                    </li>
                </ul>
            </nav>

            <AppSwitchMode/>

            <div
                    @click="toggleMenu"
                    class="app-header__hamburger"
                    :class="{'app-header__closer': isMenuOpen}"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>

</template>

<style scoped lang="scss">
a {
    color: inherit; // Наследует цвет текста от родительского элемента
    text-decoration: none; // Убирает подчеркивание
    cursor: pointer; // Курсор в виде указателя
}

.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 10px;
    z-index: 4;

    &__hamburger {
        display: none;
    }

    &__logo {
        font-size: 30px;
        text-transform: uppercase;
        color: #b37f43;
        display: flex;
        align-items: center;
    }

    &__right {
        display: flex;
        align-items: center;
    }

    &__nav {
        margin: 0 10px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;

        &-list {
            display: flex;
            align-items: center;
            list-style-type: none;
        }

        &-item {


            color: rgb(134, 130, 130);
            margin-right: 15px;
            font-size: 13px;
            text-transform: uppercase;
            transition: 0.5s all;
            position: relative;

            &:after {
                content: '';
                display: flex;
                justify-content: center;
                width: 0;
                height: 1.5px;
                background-color: #b37f43;
                margin-top: 2px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                transition: width 0.5s ease, transform 0.5s ease;
            }

            &:hover {
                transform: scale(1.1);
                color: #b37f43;
                &:after {
                    width: 100%;
                }
            }
            &_active {
                color: #b37f43;

                &:after {
                    content: '';
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    height: 1.5px;
                    background-color: #b37f43;
                    margin-top: 2px;
                    position: absolute;
                    //left: 50%;
                    //transform: translateX(-50%);
                    //transition: width 0.5s ease, transform 0.5s ease;
                }
            }
        }
    }
}

@media (max-width: 481px) {
    .app-header {
        transition: margin-top 1s;
        &_toggle-menu {
            transition: margin-top 1s;
            margin-top: 50px;
        }

        &__hamburger {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 24px;
            height: 18px;
            cursor: pointer;
            margin-left: 15px;

            & span {
                transition: 0.5s all;
                width: 100%;
                height: 2px;
                background-color: var(--text-color);
            }
        }

        &__closer {
            position: relative;

            & span {
                transition: 0.5s all;

                &:nth-child(1) {
                    position: absolute;
                    transform: rotate(45deg);
                    top: 50%;
                    transform-origin: center;
                }

                &:nth-child(2) {
                    position: absolute;
                    transform: rotate(-45deg);
                    top: 50%;
                    transform-origin: center;
                }

                &:nth-child(3) {
                    display: none;
                }
            }
        }

        &__logo {
            & svg {
                width: 150px;
                font-size: 24px;
            }
        }

        &__nav {
            transition: 1s all;
            display: none;
            opacity: 0;

            &_toggle-menu {
                display: flex;
                transition: opacity 1s ease 1s; // Задержка в 1 секунду
                opacity: 1;
                //visibility: hidden;
                position: absolute;
                top: 0;
                left: 0;
                margin: 0;
                width: 100%;
                height: 50px;
                justify-content: center;
            }

            &-list {
                width: 100%;
                justify-content: space-evenly;
            }

            &-item {
                &:hover {
                    transform: none;
                }
            }
        }
    }
}

@media (min-width: 481px) and (max-width: 769px) {
    .app-header {
        border-top: 8px solid rgba(98, 98, 98, 0.08);
        transition: margin-top 1s;
        &_toggle-menu {
            transition: margin-top 1s;
            margin-top: 50px;
        }

        &__hamburger {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 24px;
            height: 18px;
            cursor: pointer;
            margin-left: 15px;

            & span {
                transition: 0.5s all;
                width: 100%;
                height: 2px;
                background-color: var(--text-color);
            }
        }

        &__closer {
            position: relative;

            & span {
                transition: 0.5s all;

                &:nth-child(1) {
                    position: absolute;
                    transform: rotate(45deg);
                    top: 50%;
                    transform-origin: center;
                }

                &:nth-child(2) {
                    position: absolute;
                    transform: rotate(-45deg);
                    top: 50%;
                    transform-origin: center;
                }

                &:nth-child(3) {
                    display: none;
                }
            }
        }

        &__logo {
            & svg {
                width: 180px;
                font-size: 28px;
            }
        }

        &__nav {
            transition: 1s all;
            display: none;


            &_toggle-menu {
                display: flex;
                transition: 1s all;
                position: absolute;
                top: 0;
                left: 0;
                margin: 0;
                width: 100%;
                height: 50px;
                justify-content: center;
            }

            &-list {
                width: 100%;
                justify-content: space-evenly;
            }

            &-item {
                &:hover {
                    transform: none;
                }
            }
        }
    }
}

@media (min-width: 769px) and (max-width: 1024px) {

}
</style>
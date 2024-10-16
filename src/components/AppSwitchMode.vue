<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import {AppSwitchMode} from "@/types/AppSwitchMode";

const switchMode = ref<AppSwitchMode>( localStorage.getItem('theme') as AppSwitchMode || 'dark')
const switchModeToggle = () => {
    switchMode.value = switchMode.value === 'light' ? 'dark' : 'light'
}

const setTheme = (newSwitchMode: AppSwitchMode) => {
    document.documentElement.setAttribute('data-theme', switchMode.value)
    localStorage.setItem('theme', newSwitchMode)
}

watch(switchMode, (newSwitchMode) => {
    setTheme(newSwitchMode)
})

onMounted(() => {
    setTheme(switchMode.value)
})

const computedClassMode = computed(() => {
    if (switchMode.value === 'light') {
        return 'switch-mode__icon-light'
    } else {
        return 'switch-mode__icon-dark'
    }
})
</script>

<template>
<div class="switch-mode">
    <button @click="switchModeToggle" class="switch-mode__button">
        <span class="switch-mode__icon" :class="computedClassMode">
            <svg v-if="switchMode === 'light'" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                 viewBox="0 0 24 24"
                 width="100%" height="14" class="switch-mode__icon-sun"><path
                    d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                 viewBox="0 0 24 24"
                 width="14px" height="14px"
                 class="switch-mode__icon-moon"><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>
        </span>
    </button>
</div>
</template>

<style scoped lang="scss">
.switch-mode {
    margin: 0 10px;
    width: 40px;
    height: 22px;
    &__button {
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: var(--switch-bg-color);
        border-radius: 11px;
        border: 0.8px solid #b37f43;
        position: relative;
        z-index: 1;
        cursor: pointer;
        transition: 0.3s all;
        &:hover {
            border-color: var(--main-color-hover);
            transform: scale(1.03);
        }
    }
    &__icon {
        border-radius: 18px;
        height: 18px;
        width: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        transition: top 1s ease, left 1s ease, right 1s ease, background-color 1s ease;
        &-sun {
            fill: rgba(60, 60, 60, 0.7);
        }
        &-moon {
            fill: rgba(255, 255, 255, 0.87);
        }
        &-light {
            top: 1.2px;
            left: 1.2px;
            background-color: var(--switch-color);
        }
        &-dark {
            top: 1.2px;
            right: 1.2px;
            background-color: var(--switch-color);
        }
    }
}
</style>
<script setup lang="ts">
import {ref, Ref} from "vue";

const isVisible: Ref<boolean> = ref(false)
const isShowing: Ref<boolean> = ref(false)
let hideTimer: ReturnType<typeof setTimeout> | null = null;


const clearHideTimer = () => {
    if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
    }
};
const showDialog = () => {
    isVisible.value = true
    isShowing.value = true
    clearHideTimer();
}

const hideDialog = () => {
    // isShowing.value = false
    hideTimer = setTimeout(() => {
        isShowing.value = false
        setTimeout(() => {
            isVisible.value = false
        }, 400)
    }, 600);
}

// eslint-disable-next-line no-undef
defineExpose({
    showDialog,
    hideDialog
})

</script>

<template>
    <div
            v-if="isVisible"
            :class="['dialog', { 'dialog_show': isShowing, 'dialog_hide': !isShowing }]"
            @mouseleave="hideDialog"
            @mouseover="clearHideTimer"

    >
        <div class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dialog {
    position: absolute;
    transition: display 0.4s ease;

    &__content {
        color: var(--text-color);
        border: solid 1px var(--main-color);
        background-color: var(--bg-color-dialog);
        border-radius: 5px;
        padding: 20px;
    }

    &_show {
        animation: dialog-show 0.4s ease forwards;
    }

    &_hide {
        animation: dialog-hide 0.4s ease forwards;
    }
}

@keyframes dialog-show {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes dialog-hide {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(-100%);
    }
}
</style>
<script setup lang="ts">
// #region Imports
// Types
import type { IVSkeleton } from '~/components/ui/types';
// #endregion

// #region Props
const {
    width = '100%',
    height = '40px',
    background = '#F3F3F3',
    highlight = 'linear-gradient(110deg, rgb(255 255 255 / 70%), rgb(247 247 247 / 70%))',
    isLoading,
    sharp,
    round,
    absolute,
    radius = '1.2rem',
} = defineProps<IVSkeleton>();
// #endregion

// #region Data
const $style = useCssModule();
// #endregion

// #region Computed
const classList = computed(() => [
    {
        [$style._sharp]: sharp,
        [$style._round]: round,
        [$style._absolute]: absolute,
    },
]);

const styleList = computed(() => ({
    main: {
        width,
        height,
        background,
        borderRadius: round ? '' : radius,
    },
    highlight: {
        background: highlight,
    },
}));
// #endregion
</script>

<template>
    <transition
        name="fade"
        mode="out-in"
    >
        <div
            v-if="isLoading"
            :class="[$style.VSkeleton, $attrs.class, classList]"
            :style="styleList.main"
        >
            <div
                :class="$style.highlight"
                :style="styleList.highlight"
            />
        </div>

        <template v-else>
            <slot name="default" />
        </template>
    </transition>
</template>

<style lang="scss" module>
.VSkeleton {
    position: relative;
    overflow: hidden;

    .highlight {
        content: "";
        position: absolute;
        top: -25%;
        left: 0;
        display: block;
        width: 100%;
        height: 200%;
        transform: skewX(-10deg);
        animation: translate-left 1.5s infinite;

        @keyframes translate-left {
            0% {
                left: -110%;
                opacity: 0;
            }

            30% {
                opacity: 1;
            }

            70% {
                opacity: 1;
            }

            100% {
                left: 110%;
                opacity: 0;
            }
        }
    }

    &._sharp {
        border-radius: 0;
    }

    &._round {
        border-radius: 100%;
    }

    &._absolute {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
}
</style>

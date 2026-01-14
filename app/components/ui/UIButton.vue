<script setup lang="ts">
// #region Types
// Constants
import type { IUIButton } from '~/components/ui/types';
// #endregion

// #region Props
const {
    theme,
} = defineProps<IUIButton>();
// #endregion

// #region Data
const $style = useCssModule();
// #endregion

// #region Computed
const classList = computed(() => [
    {
        [$style[`_${theme}`]]: theme,
    },
]);
// #endregion
</script>

<template>
    <button :class="[$style.UIButton, ...classList]">
        <slot name="default" />
    </button>
</template>

<style module lang="scss">
    .UIButton {
        position: relative;
        display: inline-block;
        padding: 1.2rem;
        border-radius: 1.2rem;
        border: 1px solid transparent;
        outline: none;
        cursor: pointer;
        user-select: none;
        background-color: $gray-100;
        transition: color $default-transition, background-color $default-transition;

        // Themes
        &._green {
            background-color: $green-300;
            color: $green-600;

            @include hover {
                background-color: $green-600;
                color: $green-300;
            }
        }

        &._red {
            background-color: $red-300;
            color: $red-600;

            @include hover {
                background-color: $red-600;
                color: $red-300;
            }
        }
    }
</style>

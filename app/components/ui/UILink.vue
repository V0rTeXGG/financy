<script setup lang="ts">
// #region Imports
// Types
import type { IUILink } from '~/components/ui/types';
// #endregion

// #region Props
const {
    target = '_blank',
    to,
    theme = 'gray',
    disabled,
    active,
} = defineProps<IUILink>();
// #endregion

// #region Data
const $style = useCssModule();
// #endregion

// #region Computed
const classList = computed(() => [
    {
        [$style[`_${theme}`]]: theme,
        [$style._active]: active,
        [$style._disabled]: disabled,
    },
]);
// #endregion
</script>

<template>
    <NuxtLink
        :to="to"
        :target="target"
        :class="[$style.UILink, ...classList]"
    >
        <span :class="$style.text">
            <slot name="default" />
        </span>
    </NuxtLink>
</template>

<style module lang="scss">
    .UILink {
        display: inline-flex;
        outline: none;
        transition: color $default-transition;
        cursor: pointer;
        user-select: none;

        // Themes
        &._gray {
            color: $gray-600;

            &._active {
                color: $brand-600;
            }

            &._disabled {
                color: $gray-100;
            }

            @include hover {
                &:not(._disabled) {
                    color: $brand-600;
                }
            }
        }
    }
</style>

<script setup lang="ts">
// #region Imports
// Types
import type { IUIIcon } from '~/components/ui/types';
// #endregion

// #region Props
const {
    name,
    size = 'medium',
    isFillSource,
} = defineProps<IUIIcon>();
// #endregion

// #region Data
const $style = useCssModule();
// #endregion

// #region Computed
const classList = computed(() => [
    {
        [$style[`_${size}`]]: size,
        [$style._isFillSource]: isFillSource,
    },
]);
// #endregion
</script>

<template>
    <nuxt-icon
        :class="[$style.UIIcon, ...classList]"
        :name="name"
    />
</template>

<style module lang="scss">
    .UIIcon {
        &:global(.nuxt-icon) {
            display: inline-block;
            margin-bottom: 0;

            & svg {
                margin-bottom: 0;
            }
        }

        &:global(.nuxt-icon.nuxt-icon--fill *) {
            fill: none !important;
        }

        // Sizes
        &._small {
            &:global(.nuxt-icon) {
                width: 2.4rem;
                height: 2.4rem;

                svg {
                    width: 2.4rem;
                    height: 2.4rem;
                }
            }
        }

        &._medium {
            &:global(.nuxt-icon) {
                width: 3.2rem;
                height: 3.2rem;

                svg {
                    width: 3.2rem;
                    height: 3.2rem;
                }
            }
        }

        // Modificators
        &._isFillSource {
            &:global(.nuxt-icon.nuxt-icon--fill *) {
                fill: revert-layer !important;
            }
        }
    }
</style>

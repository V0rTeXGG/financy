<script setup lang="ts">
// #region Imports
// Types
import type { ICurrencyCard } from '~/components/pages/common/card/types';
// Utils
import { formatterNumber } from '~/assets/ts/utils/number-utils';
// #endregion

// #region Props
const {
    label,
    value,
    tagText,
    isBlueValueColor,
} = defineProps<ICurrencyCard>();
// #endregion

// #region Computed
const FormatterValue = computed(() => {
    if (!value) {
        return '';
    }

    return formatterNumber(value);
});
// #endregion
</script>

<template>
    <div :class="$style.CurrencyCard">
        <span
            v-if="label || $slots.label"
            :class="$style.label"
        >
            <slot name="label">
                {{ label }}
            </slot>
        </span>
        <div :class="$style.content">
            <span
                v-if="value || $slots.value"
                :class="[$style.value, { [$style._blueValueColor]: isBlueValueColor }]"
            >
                <slot name="value">
                    {{ FormatterValue }}
                </slot>
            </span>
            <div
                v-if="tagText || $slots.tagText"
                :class="$style.tag"
            >
                <span :class="$style.tagText">
                    <slot name="tagText">
                        {{ tagText }}
                    </slot>
                </span>
            </div>
        </div>
    </div>
</template>

<style module lang="scss">
    .CurrencyCard {
        padding: 2.4rem;
        border-radius: 1.2rem;
        background-color: $white;
        border: 1px solid $gray-100;
    }

    .label {
        display: inline-block;
        margin-bottom: .8rem;

        @include text(p2);
    }

    .content {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
    }

    .value {
        color: $gray-950;

        @include text(title);

        &._blueValueColor {
            color: $brand-600;
        }
    }
</style>

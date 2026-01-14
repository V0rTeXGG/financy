<script setup lang="ts">
// #region Imports
// Types
import type { ICardWithButton } from '~/components/pages/common/card/types';
// Utils

// Pinia

// Constants

// Components

// Composables

// #endregion

// #region Interfaces

// #endregion

// #region Props
const {
    title,
    description,
} = defineProps<ICardWithButton>();
// #endregion

// #region Emits
//
// #endregion

// #region Data
//
// #endregion

// #region Computed
//
// #endregion

// #region Methods
//
// #endregion
</script>

<template>
    <div :class="$style.CardWithButton">
        <slot name="button" />
        <div :class="$style.content">
            <span
                v-if="title"
                :class="$style.title"
            >
                {{ title }}
            </span>
            <span
                v-if="description"
                :class="$style.description"
            >
                {{ description }}
            </span>
        </div>
    </div>
</template>

<style module lang="scss">
    .CardWithButton {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.2rem;
        padding: 2rem;
        border-radius: 1.2rem;
        background-color: $white;
        border: 1px solid $gray-100;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: .2rem;
    }

    .title {
        @include text(p1);

        color: $dark;
    }

    .description {
        @include text(p2);
    }
</style>

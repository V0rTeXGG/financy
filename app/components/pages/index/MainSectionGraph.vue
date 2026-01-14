<script setup lang="ts">
// #region Imports
// Types
import type { IMainSectionGraphProps } from '~/components/pages/index/types';
// Components
import IndexRadialGraph from '~/components/pages/index/IndexRadialGraph.vue';
// #endregion

// #region Props
const {
    transactions,
} = defineProps<IMainSectionGraphProps>();
// #endregion

// #region Data
// Constants
const TITLE = 'Expenses by category';
// #endregion
</script>

<template>
    <div :class="$style.MainSectionGraph">
        <h3 :class="$style.title">
            {{ TITLE }}
        </h3>
        <IndexRadialGraph
            v-if="transactions && transactions.length"
            :transactions="transactions"
        />
    </div>
</template>

<style module lang="scss">
    .MainSectionGraph {
        padding: 2rem;
        border: 1px solid $gray-100;
        border-radius: 1.2rem;
        background-color: $white;
    }

    .title {
        margin-bottom: 2.4rem;
        color: $dark;

        @include text(smallTitle);
    }
</style>

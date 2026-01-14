<script setup lang="ts">
// #region Imports
// Types
import type { IMainSectionFinanceProps } from '~/components/pages/index/types';
// Components
import MainSectionTable from '~/components/pages/index/MainSectionTable.vue';
import MainSectionGraph from '~/components/pages/index/MainSectionGraph.vue';
// #endregion

// #region Props
const {
    transactions,
} = defineProps<IMainSectionFinanceProps>();
// #endregion
</script>

<template>
    <section :class="[$style.MainSectionFinance, 'container']">
        <MainSectionGraph
            v-if="transactions && transactions.length"
            :transactions="transactions"
            :class="$style.graph"
        />
        <MainSectionTable
            v-if="transactions && transactions.length"
            :transactions="transactions"
            :class="$style.table"
        />
    </section>
</template>

<style module lang="scss">
    .MainSectionFinance {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3.2rem;
    }

    .graph {
        position: sticky;
        top: 0;
        width: 100%;
        max-width: 38.4rem;
    }

    .table {
        width: 100%;
        max-width: 83.2rem;
        border-radius: 1.2rem;
    }
</style>

<script setup  lang="ts">
// #region Imports
// Types
import type { ITransactionsItem } from '~~/repository/modules/transactions/types';
import type { IBalanceData } from '~~/repository/modules/balance/types';
// Components
import MainSection from '~/components/pages/index/MainSection.vue';

const MainSectionFinance = defineAsyncComponent(() => import('~/components/pages/index/MainSectionFinance.vue'));
// #endregion

// #region Data
const { $fetchData } = useNuxtApp();
const transactionsData = ref<ITransactionsItem[]>([]);
const balanceData = ref<IBalanceData | null>(null);
// #endregion

// #region AsyncData
try {
    const useAsyncDataResult = await useAsyncData('useIndexSSR', async () => {
        const [transactions, balance] = await Promise.all([
            $fetchData.transactions.getTransactions().catch((err) => {
                console.error(`[IndexPage/useAsyncData/getTransactions]: ${err}`);
                return undefined;
            }),
            $fetchData.balance.getBalanceData().catch((err) => {
                console.error(`[IndexPage/useAsyncData/getBalanceData]: ${err}`);
                return undefined;
            }),
        ]);

        return {
            transactions,
            balance,
        };
    });

    if (!useAsyncDataResult.data.value) {
        throw new Error('useAsyncDataResult missing');
    }

    transactionsData.value = useAsyncDataResult.data.value.transactions || [];
    balanceData.value = useAsyncDataResult.data.value.balance?.[0] || null;
}
catch (error) {
    console.warn('[IndexPage/SSR] GET request failed: ', error);
}
// #endregion
</script>

<template>
    <div :class="[$style.index, 'page']">
        <MainSection :balance="balanceData" />
        <MainSectionFinance
            v-if="transactionsData && transactionsData.length"
            :transactions="transactionsData"
        />
    </div>
</template>

<style module  lang="scss">
    .index {
        padding-top: 4.8rem;
    }
</style>

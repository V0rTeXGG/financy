<script setup lang="ts">
// #region Imports
// Types
import type { IMainSectionTableProps } from '~/components/pages/index/types';
// Components
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
// #endregion

// #region Props
const {
    transactions,
} = defineProps<IMainSectionTableProps>();
// #endregion

// #region Data
// Constants
const TITLE: string = 'Last transactions';
const SUBTITLE: string = 'Check your last transactions';
const COLUMNS_DATA_MAP = {
    description: {
        field: 'description',
        header: 'Description',
        width: '23.2rem',
    },
    method: {
        field: 'method',
        header: 'Method',
        width: '17rem',
    },
    date: {
        field: 'date',
        header: 'Date',
        width: '13rem',
    },
    amount: {
        field: 'amount',
        header: 'Amount',
        width: '15rem',
    },
};
// #endregion

// #region Methods
function handleConvertAmount(text: number, addition: boolean) {
    if (!text) {
        return '';
    }

    const additionSign = addition ? '+' : '-';

    return `${additionSign}$${text.toFixed(2)}`;
}
// #endregion
</script>

<template>
    <div :class="$style.MainSectionTable">
        <div :class="$style.head">
            <h3 :class="$style.title">
                {{ TITLE }}
            </h3>
            <p :class="$style.subtitle">
                {{ SUBTITLE }}
            </p>
        </div>
        <DataTable
            v-if="transactions && transactions.length"
            :value="transactions"
            :class="$style.table"
        >
            <Column
                :field="COLUMNS_DATA_MAP.description.field"
                :header="COLUMNS_DATA_MAP.description.header"
                :class="[$style.column, $style._desctiption]"
                :style="{ maxWidth: COLUMNS_DATA_MAP.description.width }"
            >
                <template #body="{ data }">
                    <div :class="$style.desctiptionContent">
                        <div
                            v-if="data.color"
                            :class="$style.colorMark"
                            :style="{ backgroundColor: data.color }"
                        />
                        <span
                            v-if="data.description"
                            :class="$style.desctiption"
                        >
                            {{ data.description }}
                        </span>
                    </div>
                </template>
            </Column>
            <Column
                :field="COLUMNS_DATA_MAP.method.field"
                :header="COLUMNS_DATA_MAP.method.header"
                :style="{ maxWidth: COLUMNS_DATA_MAP.method.width }"
            />
            <Column
                :field="COLUMNS_DATA_MAP.date.field"
                :header="COLUMNS_DATA_MAP.date.header"
                :style="{ maxWidth: COLUMNS_DATA_MAP.date.width }"
            />
            <Column
                :field="COLUMNS_DATA_MAP.amount.field"
                :header="COLUMNS_DATA_MAP.amount.header"
                :style="{ maxWidth: COLUMNS_DATA_MAP.amount.width }"
            >
                <template #body="{ data }">
                    <span :class="[$style.column, { [$style._green]: data.income }]">
                        {{ handleConvertAmount(data.amount, data.income) }}
                    </span>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<style module lang="scss">
    .MainSectionTable {
        border: 1px solid $gray-100;
        background-color: $white;
    }

    .head {
        padding: 2.4rem;
    }

    .title {
        margin-bottom: .4rem;
        color: $dark;

        @include text(smallTitle);
    }

    .subtitle {
        color: $gray-600;

        @include text(p2);
    }

    .table {
        @include text(p2);
    }

    .column {
        &._desctiption {
            color: $dark;
        }

        &._green {
            color: $green-600;
        }
    }

    .desctiptionContent {
        display: flex;
        align-items: center;
        gap: 1.2rem;
    }

    .colorMark {
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
    }

    .desctiption {
        @include text(p2);
    }
</style>

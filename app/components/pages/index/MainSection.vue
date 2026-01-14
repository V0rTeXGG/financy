<script setup lang="ts">
// #region Imports
// Types
import type { IMainSectionProps } from '~/components/pages/index/types';
// Constants
import { ACTION_CARDS } from '~/assets/ts/contants/main';
// Components
import CurrencyCard from '~/components/pages/common/card/CurrencyCard.vue';
import CardWithButton from '~/components/pages/common/card/CardWithButton.vue';
// #endregion

const {
    balance,
} = defineProps<IMainSectionProps>();

// #region Data
const $style = useCssModule();
// Constants
const TRANSFER_ICON_LABEL: string = 'transfer';
const CARD_LABELS = {
    balance: 'Balance',
    incomes: 'Incomes',
    expenses: 'Expenses',
};
// #endregion
</script>

<template>
    <section :class="$style.MainSection">
        <div class="container">
            <div :class="$style.cards">
                <CurrencyCard
                    :value="balance?.balance || 0"
                    :label="CARD_LABELS.balance"
                    is-blue-value-color
                    :class="$style.card"
                />
                <CurrencyCard
                    :value="balance?.incomes || 0"
                    :label="CARD_LABELS.incomes"
                    :class="$style.card"
                />
                <CurrencyCard
                    :value="balance?.expenses || 0"
                    :label="CARD_LABELS.expenses"
                    :class="$style.card"
                />
            </div>
            <div :class="$style.cards">
                <CardWithButton
                    v-for="item in ACTION_CARDS"
                    :key="`card-action-${item.id}`"
                    :title="item.title"
                    :description="item.description"
                    :class="$style.card"
                >
                    <template #button>
                        <UIButton
                            v-if="item.icon"
                            :theme="item.themeButton"
                            :class="$style.cardButton"
                        >
                            <UIIcon
                                :name="item.icon"
                                size="small"
                                :class="[$style.icon, { [$style._blue]: item.icon === TRANSFER_ICON_LABEL }]"
                            />
                        </UIButton>
                    </template>
                </CardWithButton>
            </div>
        </div>
    </section>
</template>

<style module lang="scss">
    .cards {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3.2rem;
        margin-bottom: 3.2rem;
    }

    .card {
        width: 100%;
        max-width: 38.4rem;
    }

    .icon {
        &._blue {
            color: $brand-600;
        }
    }
</style>

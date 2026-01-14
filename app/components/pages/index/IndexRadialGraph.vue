<script setup lang="ts">
// #region Imports
import { Doughnut } from 'vue-chartjs';
// Types
import type { IIndexRadialGraphProps } from '~/components/pages/index/types';
// Composables
import { useRadialGraph } from '~/composables/useRadialGraph';
// #endregion

// #region Props
const {
    transactions,
} = defineProps<IIndexRadialGraphProps>();
// #endregion

// #region Data
const {
    chartData,
    chartOptions,
    legendItems,
} = useRadialGraph(transactions);
// #endregion
</script>

<template>
    <div :class="$style.IndexRadialGraph">
        <div :class="$style.chartArea">
            <Doughnut
                v-if="chartData"
                :data="chartData"
                :options="chartOptions"
                :class="$style.chart"
            />
        </div>
        <div
            v-if="legendItems.length"
            :class="$style.legend"
        >
            <div
                v-for="(item, index) in legendItems"
                :key="`graph-legend-label-${index}`"
                :class="$style.legendItem"
            >
                <div :class="$style.legendItemContent">
                    <div
                        :class="$style.colorIndicator"
                        :style="{ backgroundColor: item.color }"
                    />
                    <div :class="$style.legendText">
                        <div
                            v-if="item.label"
                            :class="$style.legendLabel"
                        >
                            {{ item.label }}
                        </div>
                        <div
                            v-if="item.percentage"
                            :class="$style.legendValue"
                        >
                            {{ item.percentage }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style module lang="scss">
    .IndexRadialGraph {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.4rem;
        width: 100%;
        height: 100%;
        background-color: $white;
    }

    .chartArea {
        width: 24rem;
        height: 24rem;
    }

    .chart {
        width: 100%;
        height: 100%;
    }

    .legend {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .legendItem {
        border-bottom: 1px solid $gray-100;
    }

    .legendItemContent {
        display: flex;
        align-items: center;
        gap: .8rem;
        padding: 1.4rem .8rem;
    }

    .colorIndicator {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
    }

    .legendText {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .legendLabel {
        @include text(p1);

        color: $dark;
    }

    .legendValue {
        @include text(p1);

        color: $gray-600;
    }
</style>

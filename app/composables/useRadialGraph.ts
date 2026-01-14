// #region Imports
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
// Types
import type { ChartData, ChartOptions } from 'chart.js';
import type { ITransactionsItem } from '~~/repository/modules/transactions/types';
// Utils
import {
    handleFilterTransactionsByField,
    handleGroupedTransactions,
} from '~/assets/ts/utils/main-section-graph-utils';
// #endregion

export function useRadialGraph(data: ITransactionsItem[]) {
    // #region Data
    ChartJS.register(
        ArcElement,
        Tooltip,
        Legend,
        Title,
    );
    const chartData = ref<ChartData<'doughnut'>>({
        labels: handleFilterTransactionsByField(data, 'method'),
        datasets: [
            {
                data: handleGroupedTransactions(data),
                backgroundColor: handleFilterTransactionsByField(data, 'color') as string[],
                borderWidth: 0,
                spacing: 0,
            },
        ],
    });
    const chartOptions = ref<ChartOptions<'doughnut'>>({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        events: [],
        cutout: '40%',
        animation: {
            animateRotate: true,
            duration: 1000,
            easing: 'easeInOutCubic',
        },
    });
    // Constants
    const DEFAULT_COLOR = '#000';
    // #endregion

    // #region Computed
    const legendItems = computed(() => {
        if (!chartData.value.labels || !chartData.value.datasets[0]) {
            return [];
        }

        const labels = chartData.value.labels;
        const backgroundColor = chartData.value.datasets[0].backgroundColor;
        const data = chartData.value.datasets[0].data;
        const total = data.reduce((a: number, b: number) => a + b, 0);

        const backgroundColorArray = Array.isArray(backgroundColor) ? backgroundColor : [DEFAULT_COLOR];

        return labels.map((label, index) => {
            const value = data[index] || 0;
            const percentage = value / total * 100;
            return {
                label,
                color: backgroundColorArray[index],
                value: `${value}%`,
                percentage: `${percentage.toFixed(2)}%`,
            };
        });
    });
    // #endregion

    return {
        chartData,
        chartOptions,
        legendItems,
    };
}

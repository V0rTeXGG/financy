import type { IActionCard } from '~/components/pages/index/types';

export const ACTION_CARDS: IActionCard[] = [
    {
        id: 1,
        title: 'Add income',
        description: 'Create an income manually',
        icon: 'plus',
        themeButton: 'green',
    },
    {
        id: 2,
        title: 'Add expense',
        description: 'Create an expense manually',
        icon: 'minus',
        themeButton: 'red',
    },
    {
        id: 3,
        title: 'Transfer money',
        description: 'Select the amount and make a transfer',
        icon: 'transfer',
        themeButton: 'default',
    },
];

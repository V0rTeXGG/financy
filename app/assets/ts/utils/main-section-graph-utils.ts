import type { ITransactionsItem } from '~~/repository/modules/transactions/types';

export function handleFilterTransactionsByField(transactions: ITransactionsItem[], field: keyof ITransactionsItem): (string | number | boolean)[] {
    if (!transactions.length || !field) {
        return [];
    }

    return transactions.map(transaction => transaction[field]).filter((value, index, self) => self.indexOf(value) === index);
}

export function handleGroupedTransactions(transactions: ITransactionsItem[]): number[] {
    if (!transactions.length) {
        return [];
    }

    const groupedMethods = transactions.reduce((acc, curr) => {
        if (acc[curr.method]) {
            acc[curr.method] += curr.amount;
        }
        else {
            acc[curr.method] = curr.amount;
        }
        return acc;
    }, {} as Record<string, number>);

    return Object.values(groupedMethods);
}

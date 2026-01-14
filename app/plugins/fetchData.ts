import { $fetch, type FetchOptions } from 'ofetch';
import TransactionsModule from '~~/repository/modules/transactions/transactions';
import BalanceModule from '~~/repository/modules/balance/balance';

export interface IApiInstance {
    transactions: TransactionsModule;
    balance: BalanceModule;
}

export default defineNuxtPlugin((nuxtApp) => {
    const endpoint = nuxtApp.$config.public.PROXY_URL || 'https://bf2f7ece633b7d90.mokky.dev';

    const fetchOptions: FetchOptions = {
        baseURL: endpoint,
    };

    const apiFetcher = $fetch.create(fetchOptions);

    const modules: IApiInstance = {
        transactions: new TransactionsModule(apiFetcher),
        balance: new BalanceModule(apiFetcher),
    };

    return {
        provide: {
            fetchData: modules,
        },
    };
});

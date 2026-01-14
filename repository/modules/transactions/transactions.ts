// Types
import type { ITransactionsItem } from '~~/repository/modules/transactions/types';
import HttpFactory from '../../factory';

class TransactionsModule extends HttpFactory {
    private RESOURCE = '/transactions/';

    async getTransactions() {
        const $res: ITransactionsItem[] = await this.call<ITransactionsItem[]>(this.RESOURCE);
        return $res;
    }
}

export default TransactionsModule;

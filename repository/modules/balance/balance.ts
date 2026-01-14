// Types
import HttpFactory from '../../factory';
import type { IBalanceData } from './types';

class BalanceModule extends HttpFactory {
    private RESOURCE = '/balance/';

    async getBalanceData() {
        const $res: IBalanceData[] = await this.call<IBalanceData[]>(this.RESOURCE);
        return $res;
    }
}

export default BalanceModule;

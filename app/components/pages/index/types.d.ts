import type { TThemeButton } from '~/components/ui/types';
import type { ITransactionsItem } from '~~/repository/modules/transactions/types';
import type { IBalanceData } from '~~/repository/modules/balance/types';

export interface IActionCard {
    id: number;
    title: string;
    description: string;
    icon: string;
    themeButton: TThemeButton;
}

export interface IMainSectionFinanceProps {
    transactions: ITransactionsItem[];
}

export interface IMainSectionTableProps extends IMainSectionFinanceProps {}

export interface IMainSectionGraphProps extends IMainSectionFinanceProps {}

export interface IIndexRadialGraphProps extends IMainSectionFinanceProps {}

export interface IMainSectionProps {
    balance: IBalanceData | null;
}

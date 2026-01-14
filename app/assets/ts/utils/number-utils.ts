import { FORMATTER } from '~/assets/ts/contants/number';

export function formatterNumber(num: number): string {
    if (!num && num !== 0) {
        return '';
    }

    return FORMATTER.format(num / 100);
}

export function percentAisMoreThanB(initialNum: number, currentNum: number): number {
    if (currentNum === 0) {
        return 0;
    }

    return Math.round(((initialNum - currentNum) / currentNum) * 100);
}

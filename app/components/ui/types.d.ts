export type TIconSize = 'small' | 'medium' | 'large';

export type TTarget = '_blank' | '_self' | '_top' | '_parent';

export type TThemeLink = 'gray';

export type TThemeButton = 'green' | 'red';

export interface IUIIcon {
    name: string;
    size?: TIconSize;
    isFillSource?: boolean;
}

export interface IUILink {
    target?: TTarget;
    to: string;
    theme?: TThemeLink;
    disabled?: boolean;
    active?: boolean;
}

export interface IUIButton {
    theme?: TThemeButton;
}

export interface IVSkeleton {
    width?: string;
    height?: string;
    background?: string;
    highlight?: string;
    isLoading?: boolean;
    sharp?: boolean;
    round?: boolean;
    absolute?: boolean;
    radius?: string;
}

import { IconProps } from './types'
// @ts-ignore
import tokens from '@ruids/tokens'


const getFill = ({
    appearance
}: IconProps) => {
    if (!appearance) return 'currentColor'

    return baseTheme['color'][appearance]
}

const getSize = (props: IconProps) => {
    return baseTheme['size'][props.size]
}

export const baseTheme = {
    color: {
        primary: tokens.colorPrimary,
        positive: tokens.colorPositive,
        negative: tokens.colorNegative,
        warning: tokens.colorWarning,
        white: tokens.colorNeutral0,
        black: tokens.colorNeutral900
    },
    size: {
        tiny: {
            height: '16px',
            width: '16px'
        },
        small: {
            height: '18px',
            width: '18px'
        },
        medium: {
            height: '24px',
            width: '24px'
        },
        large: {
            height: '32px',
            width: '32px'
        }
    },
}

export const getIconStyles = (props: IconProps) => ({
    ...getSize(props),
    stroke: getFill(props),
});
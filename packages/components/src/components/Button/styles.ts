// @ts-ignore
import tokens from '@ruids/tokens'
import { ButtonProps } from './types'
import { TypeAttributes } from '../@types/common'

export function applyPropertyStyle(
    property: keyof typeof baseTheme,
    {
        appearance = 'primary'
    }: { appearance?: TypeAttributes.Appearance }
) {
    const propertyStyles = baseTheme[property]
    if (!propertyStyles) {
        return 'initial'
    }
    if (!propertyStyles[appearance]) {

    }

    return propertyStyles[appearance]
}

const getBackground = (props: ButtonProps) => {
    return applyPropertyStyle('background', { appearance: props.buttonType })
}

const getBorderColor = (props: ButtonProps) => {
    return applyPropertyStyle('borderColor', { appearance: props.buttonType })
}

const getColor = (props: ButtonProps) => {
    return applyPropertyStyle('color', { appearance: props.buttonType })
}

const getSize = (props: ButtonProps) => {
    if (!props.size || props.size === 'default') {
        return {
            height: `calc(1rem * (40 / ${tokens.fontBaseDefault}))`,
            fontSize: `calc(1rem * (14 / ${tokens.fontBaseDefault}))`,
        }
    }
    if (props.size === 'large') {
        return {
            height: `calc(1rem * (48 / ${tokens.fontBaseDefault}))`,
            fontSize: '1.15rem',
            lineHeight: 1,
        }
    }
    if (props.size === 'small') {
        return {
            height: `calc(1rem * (30 / ${tokens.fontBaseDefault}))`,
            fontSize: `calc(1rem * (14 / ${tokens.fontBaseDefault}))`
        }
    }
}

const getGlow = (props: ButtonProps) => {
    return applyPropertyStyle('glow', { appearance: props.buttonType })
}

export const baseTheme = {
    background: {
        primary: tokens.colorPrimary,
        positive: tokens.colorPositive,
        negative: tokens.colorNegative,
        warning: tokens.colorWarning,
        muted: tokens.colorNeutral30,
        naked: 'transparent'
    },
    glow: {
        primary: tokens.glowPrimary,
    },
    borderColor: {
        primary: tokens.colorPrimary,
        positive: tokens.colorPositive,
        negative: tokens.colorNegative,
        warning: tokens.colorWarning,
        naked: 'transparent'
    },
    color: {
        primary: tokens.colorWhite,
        positive: tokens.colorWhite,
        negative: tokens.colorWhite,
        warning: tokens.colorNeutral900,
        muted: tokens.colorNeutral900,
        naked: tokens.colorNeutral900,
    },
}

// Base styles
const staticStyles = {
    boxSizing: 'border-box',
    alignItems: 'center',
    display: 'inline-flex',
    borderWidth: `calc(1rem * (1 / ${tokens.fontBaseDefault}))`,
    borderStyle: 'solid',
    borderColor: `${tokens.colorNeutral60}`,
    borderRadius: `calc(1rem * (3 / ${tokens.fontBaseDefault}))`,
    fontFamily: tokens.fontSans,
    overflow: 'hidden',
    backgroundSize: '100% 200%',
    verticalAlign: 'middle',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
}

export const getButtonStyles = (props: ButtonProps) => ({
    ...staticStyles,
    background: getBackground(props),
    borderColor: getBorderColor(props),
    ...getSize(props),
    opacity: props.disabled ? '0.5' : 1,
    color: getColor(props),
    position: 'relative',

    '&::-moz-focus-inner': {
        border: 0,
        margin: 0,
        padding: 0,
    },

    '&:hover': {
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        opacity: props.disabled ? '0.5' : '0.8'
    },

    '&:focus': {
        outline: 'none',
        boxShadow: getGlow(props)
    }
});

export const getLabelStyles = (props: ButtonProps) => ({
    margin: `0 calc(1rem * (4 / ${tokens.fontBaseDefault}))`,
    lineHeight: 2,
    alignSelf: 'center',
    display: 'inline-flex',
    maxWidth: '100%',
    color: 'inherit',
    fontSize: 'inherit',
    fontFamily: tokens.fontSans,
    fontWeight: tokens.fontMedium,
});
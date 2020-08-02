import { TagProps } from './types'
import { css } from '@emotion/core'
import tokens from '@ruids/tokens'

const getColors = (props: TagProps) => {
    switch (props.appearance) {
        case 'negative': {
            return {
                bgColor: tokens.colorNegative,
                textColor: tokens.colorNeutral0
            }
        }
        case 'moved': {
            return {
                bgColor: tokens.colorYellow100,
                textColor: tokens.colorNeutral500
            }
        }
        case 'success': {
            return {
                bgColor: tokens.colorPositive,
                textColor: tokens.colorNeutral0
            }
        }
        case 'inprogress': {
            return {
                bgColor: tokens.colorBlue50,
                textColor: tokens.colorBlue500
            }
        }
        default: {
            return {
                bgColor: tokens.colorNeutral40,
                textColor: tokens.colorNeutral500
            }
        }
    }
}

export const getTagStyles = (props: TagProps) => {
    const { bgColor, textColor } = getColors(props)
    return css({
        display: 'inline-block',
        padding: `${tokens.spacing1} ${tokens.spacing2}`,
        borderRadius: `calc(1rem * (3 / ${tokens.fontBaseDefault}))`,
        color: textColor,
        backgroundColor: bgColor,
        fontFamily: tokens.fontSans,
        fontSize: tokens.textXs,
        lineHeight: tokens.leadingRelaxed,
        fontWeight: props.bold ? Number(tokens.fontBold) : Number(tokens.fontNormal)
    });
};
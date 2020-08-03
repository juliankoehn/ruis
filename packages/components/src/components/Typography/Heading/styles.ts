import { css } from '@emotion/core'
import tokens from '@ruids/tokens'
import { HeadingTypes } from './types';

const getFontStyles = (element: HeadingTypes) => {
    switch (element) {
        case 'h1': {
            return {
                size: tokens.text6Xl,
                weight: tokens.fontNormal,
                leading: tokens.leadingTight
            }
        }
        case 'h2': {
            return {
                size: tokens.text5Xl,
                weight: tokens.fontNormal,
                leading: tokens.leadingTight
            }
        }
        case 'h3': {
            return {
                size: tokens.text4Xl,
                weight: tokens.fontMedium,
                leading: tokens.leadingTight
            }
        }
        case 'h4': {
            return {
                size: tokens.text3Xl,
                weight: tokens.fontSemibold,
                leading: tokens.leadingTight
            }
        }
        case 'h5': {
            return {
                size: tokens.text2Xl,
                weight: tokens.fontBold,
                leading: tokens.leadingTight
            }
        }
        case 'h6': {
            return {
                size: tokens.textXl,
                weight: tokens.fontBold,
                leading: tokens.leadingTight
            }
        }
    }
}

export const getHeadingStyles = (spacing: string, element: HeadingTypes) => {
    const fontStyle = getFontStyles(element)
    return css`
        font-family: ${tokens.fontSans};
        color: ${tokens.colorTextDark};
        margin-top: 0;
        margin-bottom: ${tokens[spacing]};
        font-weight: ${fontStyle?.weight};
        font-size: ${fontStyle?.size};
        line-height: ${fontStyle?.leading};
    `
};
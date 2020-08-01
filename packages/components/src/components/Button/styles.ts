import { css } from '@emotion/core'
// @ts-ignore
import tokens from '@ruids/tokens'

export const button = () => css`
    box-sizing: border-box;
    height: calc(1rem * (40 / ${tokens.fontBaseDefault}));
    display: inline-block;
    padding: 0;
    border: calc(1rem * (1 / ${tokens.fontBaseDefault})) solid var(--color-element-dark);
    border-radius: calc(1rem * (2 / ${tokens.fontBaseDefault}));
    font-family: ${tokens.fontSans};
    font-size: calc(1rem * (14 / ${tokens.fontBaseDefault}));
`
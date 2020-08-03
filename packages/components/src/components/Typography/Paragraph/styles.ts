import { css } from '@emotion/core'
import tokens from '@ruids/tokens'
import { ParagraphTypes } from './types';

export const getParagraphStyles = (spacing: string, element: ParagraphTypes) => {
    return css`
        display: ${element === 'p' || element === 'div' ? 'block' : undefined};
        font-family: ${tokens.fontSans};
        color: ${tokens.colorTextDark};
        margin-top: 0;
        margin-bottom: ${tokens[spacing]};
        font-weight: ${tokens.fontNormal};
        font-size: ${tokens.textSm};
        line-height: ${tokens.leadingNormal};
    `
};
import { css } from '@emotion/core'
import tokens from '@ruids/tokens';

const colorElementLight = '#e5ebed';
const colorElementLightest = '#f7f9fa'
const colorTextMid = '##536171'


export const styles = {
    Table: css`
        width: 100%;
        border: 1px solid ${colorElementLight};
    `,
    head: css`
        position: sticky;
  top: 0;
    `,
    row: css`
        &:hover {
            background-color: ${colorElementLightest};
        }
    `,
    cell: css`
        border-bottom: 1px solid ${colorElementLightest};
        color: ${colorTextMid};
        font-size: ${tokens.textSm};
        font-family: ${tokens.fontSans};
        font-weight: ${tokens.fontNormal};
        line-height: 1.5;
        padding: ${tokens.spacing3}
            ${tokens.spacing5};
        vertical-align: top;
    `
}
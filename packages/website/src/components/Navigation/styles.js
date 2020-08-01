import { css } from '@emotion/core'
import tokens from '@ruids/tokens';

const colorElementMid = '#d3dce0'
const colorTextMid = '#536171'
const colorWhite = 'rgb(255, 255, 255)'
const colorElementLight = '#e5ebed'
const colorBlueLight = 'rgb(132, 185, 245)'
const colorBlueMid = 'rgb(46, 117, 212)'
const heightOfDocSearch = 72
const heightOfHeader = 56

export const styles = {
    sidemenu: css`
        flex-basis: 380px;
        padding-top: ${tokens.spacing4};
        border-right: 1px solid ${colorElementMid};
    `,
    navList: css`
        display: flex;
        flex-direction: column;
        border-top: 1px solid ${colorElementMid};
        padding: ${tokens.spacing4} 0;
        height: calc(100vh - ${heightOfHeader + heightOfDocSearch}px);
        overflow-y: auto;
        color: ${colorTextMid};
    `,
    link: css`
        display: flex;
        justify-content: space-between;
        padding: ${tokens.spacing2} ${tokens.spacing4};
        color: ${colorTextMid};
        text-decoration: none;
        transition: background-color 0.2s ease-in-out;

        &:hover {
            background-color: ${colorElementLight};
        }
    `,
    linkActive: css`
        background-color: ${colorBlueLight};
        color: ${colorWhite};

        &:hover {
            background-color: ${colorBlueMid};
        }
    `,
    list: css`
        flex: 1 1 0;
        list-style: none;
        padding: 0;
        margin-top: 0;
    `,
    linkIcon: css`
    align-self: center;
  `,

    linkGroup: css`
    cursor: pointer;
  `,
  
    category: css`
        margin-top: ${tokens.spacing6};

        &:first-of-type {
        margin-top: 0;
        }
    `,
}

export default styles
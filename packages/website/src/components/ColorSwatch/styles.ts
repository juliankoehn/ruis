import { css } from '@emotion/core'
import tokens from '@ruids/tokens'

export const styles = {
  colorSwatch: css`
    box-sizing: border-box;
    margin: ${tokens.spacing4};
    border-radius: 6px;
    background-color: #f4f5f7;
    :after {
      content: ' ';
      display: table;
      clear: both;
    }
  `,
  header: css`
    position: relative;
    height: 0;
    padding-bottom: 50%;
    border-radius: 6px 6px 0 0;
    border: 1px solid transparent;
  `,
  body: css`
    position: relative;
    left: 50%;
    float: left;
    padding: 10px 0;
    transform: translateX(-50%);
  `,
  wrap: css`
    float: left;
    padding: 0 15px;
    min-width: 65px;
  `,
  item: css`
    padding: 15px 0;
  `,
  label: css`
    font-family: ${tokens.fontSans};
    font-size: 11px;
    color: #62748c;
    text-transform: uppercase;
    line-height: 16px;
  `,
  value: css`
    font-family: ${tokens.fontSans};
    font-size: 14px;
  `,
}

import { css } from '@emotion/core';
import tokens from '@ruids/tokens';

export const getAvatarImageStyles = () => {
  return css`
    width: ${tokens.width10};
    height: ${tokens.width10};
    line-height: ${tokens.width10};
    position: relative;

    &:before {
      content: attr(alt);
      position: absolute;
      width: 100%;
      height: inherit;
      top: 0;
      left: 0;
      background: ${tokens.colorNeutral40};
      text-align: center;
      padding: 0;
      overflow: hidden;
      white-space: nowrap;
    }
  `;
};

export const getAvatarStyles = ({
  circle,
  backgroundColor,
  color,
}: {
  circle: boolean;
  backgroundColor?: string;
  color?: string;
}) => {
  const radius = circle
    ? '50%'
    : `calc(1rem * (3 / ${tokens.fontBaseDefault}))`;

  const bgColor = backgroundColor ? backgroundColor : tokens.colorNeutral40;
  const fontColor = color ? color : tokens.colorNeutral0;

  return css`
    background-color: ${bgColor};
    color: ${fontColor};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${radius};
    overflow: hidden;
    font-family: ${tokens.fontSans};
    width: ${tokens.width10};
    height: ${tokens.width10};
    font-size: ${tokens.textLg};
  `;
};

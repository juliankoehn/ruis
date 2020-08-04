import { css } from '@emotion/core';
import tokens from '@ruids/tokens';

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

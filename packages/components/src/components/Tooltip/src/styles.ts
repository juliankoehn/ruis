import { css } from '@emotion/core';
import tokens from '@ruids/tokens';

const Tooltip = css`
  position: relative;
  background-color: ${tokens.colorNeutral800};
  color: ${tokens.colorNeutral0};
  border-radius: calc(1rem * (3 / ${tokens.fontBaseDefault}));
  font-size: ${tokens.textSm};
  line-height: ${tokens.leadingSnug};
  outline: 0;
  transition-property: transform, visibility, opacity;
`;

const Content = css`
  position: relative;
  padding: ${tokens.spacing1} ${tokens.spacing2};
  z-index: 1;
`;

export const styles = {
  Tooltip,
  Content,
};

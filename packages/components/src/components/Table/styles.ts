import tokens from '@ruids/tokens';
import { css } from '@emotion/core';

const container = css({
  display: 'inline-block',
  minWidth: '100%',
  boxShadow: tokens.shadow,
  borderRadius: `calc(1rem * (3 / ${tokens.fontBaseDefault}))`,
});

const table = css({
  minWidth: '100%',
  lineHeight: tokens.leadingNormal,
});

export const styles = {
  container,
  table,
};

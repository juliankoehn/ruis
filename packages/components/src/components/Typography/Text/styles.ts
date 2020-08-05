import { css } from '@emotion/core';
import { TypeAttributes } from '../../@types/common';
import tokens from '@ruids/tokens';

export const textSizes = {
  lg: {
    fontSize: tokens.textXl,
    fontWeight: tokens.fontNormal,
    lineHeight: tokens.leadingNormal,
    letterSpacing: tokens.trackingTighter,
    marginTop: tokens.spacing6,
  },
  md: {
    fontSize: tokens.textBase,
    fontWeight: tokens.fontNormal,
    lineHeight: tokens.leading5,
    letterSpacing: tokens.trackingTight,
    marginTop: tokens.spacing4,
  },
  sm: {
    fontSize: tokens.textSm,
    fontWeight: tokens.fontNormal,
    lineHeight: tokens.leading5,
    letterSpacing: tokens.trackingTight,
    marginTop: tokens.spacing3,
  },
  xs: {
    fontSize: tokens.textXs,
    fontWeight: tokens.fontNormal,
    lineHeight: tokens.leadingNone,
    letterSpacing: tokens.trackingNormal,
    marginTop: tokens.spacing3,
  },
};

export const getTextStyle = (
  size: TypeAttributes.Size,
  font: TypeAttributes.FontFamily,
) => {
  const fontFamily = font === 'sans' ? tokens.fontSans : tokens.fontMono;
  switch (size) {
    case 'lg': {
      return css({
        ...textSizes.lg,
        fontFamily: fontFamily,
        color: tokens.colorTextDark,
        '-webkit-font-smoothing': 'auto',
        '-moz-osx-font-smoothing': 'auto',
      });
    }
    case 'md': {
      return css({
        ...textSizes.md,
        fontFamily: fontFamily,
        color: tokens.colorTextDark,
        '-webkit-font-smoothing': 'auto',
        '-moz-osx-font-smoothing': 'auto',
      });
    }
    case 'sm': {
      return css({
        ...textSizes.sm,
        fontFamily: fontFamily,
        color: tokens.colorTextDark,
        '-webkit-font-smoothing': 'auto',
        '-moz-osx-font-smoothing': 'auto',
      });
    }
    case 'xs': {
      return css({
        ...textSizes.xs,
        fontFamily: fontFamily,
        color: tokens.colorTextDark,
        '-webkit-font-smoothing': 'auto',
        '-moz-osx-font-smoothing': 'auto',
      });
    }
  }
};

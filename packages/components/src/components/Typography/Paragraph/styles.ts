import { css } from '@emotion/core';
import tokens from '@ruids/tokens';
import { TypeAttributes } from '../../@types/common';
import { textSizes } from '../Text/styles';

export const getParagraphStyles = (
  size: TypeAttributes.Size,
  font: TypeAttributes.FontFamily,
) => {
  const fontFamily = font === 'sans' ? tokens.fontSans : tokens.fontMono;
  switch (size) {
    case 'xs': {
      return css({
        ...textSizes.xs,
        lineHeight: tokens.leading6,
        fontFamily: fontFamily,
        color: tokens.colorTextDark,
        WebkitFontSmoothing: 'auto',
        MozOsxFontSmoothing: 'auto',
        marginBottom: 0,
      });
    }
    case 'sm': {
      return css({
        ...textSizes.sm,
        lineHeight: tokens.leading6,
        fontFamily: fontFamily,
        color: tokens.colorTextDark,
        WebkitFontSmoothing: 'auto',
        MozOsxFontSmoothing: 'auto',
        marginBottom: 0,
      });
    }
    case 'md': {
      return css({
        ...textSizes.md,
        lineHeight: tokens.leading6,
        fontFamily: fontFamily,
        color: tokens.colorTextDark,
        WebkitFontSmoothing: 'auto',
        MozOsxFontSmoothing: 'auto',
        marginBottom: 0,
      });
    }
    case 'lg': {
      return css({
        ...textSizes.lg,
        lineHeight: tokens.leading6,
        fontFamily: fontFamily,
        color: tokens.colorTextDark,
        WebkitFontSmoothing: 'auto',
        MozOsxFontSmoothing: 'auto',
        marginBottom: 0,
      });
    }
  }
};

import tokens from '@ruids/tokens';
import { HeadingSize } from './types';
import { TypeAttributes } from '../../@types/common';

export const getHeadingStyles = (
  size: HeadingSize,
  fontFamily: TypeAttributes.FontFamily,
) => {
  const fontFace = fontFamily === 'sans' ? tokens.fontSans : tokens.fontMono;

  switch (size) {
    case '3xl': {
      // 900
      return {
        fontSize: tokens.text4Xl,
        fontWeight: tokens.fontMedium,
        lineHeight: tokens.leading10,
        letterSpacing: tokens.trackingNormal,
        marginTop: tokens.spacing12,
        marginBottom: 0,
        fontFamily: fontFace,
        color: tokens.colorTextDark,
      };
    }
    case '2xl': {
      // 800
      return {
        fontSize: tokens.text3Xl,
        fontWeight: tokens.fontMedium,
        lineHeight: tokens.leading8,
        letterSpacing: tokens.trackingNormal,
        marginTop: tokens.spacing10,
        marginBottom: 0,
        fontFamily: fontFace,
        color: tokens.colorTextDark,
      };
    }
    case 'xl': {
      // 700
      return {
        fontSize: tokens.text2Xl,
        fontWeight: tokens.fontMedium,
        lineHeight: tokens.leading7,
        letterSpacing: tokens.trackingTighter,
        marginTop: tokens.spacing10,
        marginBottom: 0,
        fontFamily: fontFace,
        color: tokens.colorTextDark,
      };
    }
    case 'lg': {
      // 600
      return {
        fontSize: tokens.textXl,
        fontWeight: tokens.fontMedium,
        lineHeight: tokens.leading6,
        letterSpacing: tokens.trackingTighter,
        marginTop: tokens.spacing6,
        marginBottom: 0,
        fontFamily: fontFace,
        color: tokens.colorTextDark,
      };
    }
    case 'md': {
      // 500
      return {
        fontSize: tokens.textBase,
        fontWeight: tokens.fontMedium,
        lineHeight: tokens.leading5,
        letterSpacing: tokens.trackingTight,
        marginTop: tokens.spacing6,
        marginBottom: 0,
        fontFamily: fontFace,
        color: tokens.colorTextDark,
      };
    }
    case 'sm': {
      // 400
      return {
        fontSize: tokens.textSm,
        fontWeight: tokens.fontSemibold,
        lineHeight: tokens.leading5,
        letterSpacing: tokens.trackingTight,
        marginTop: tokens.spacing4,
        marginBottom: 0,
        fontFamily: fontFace,
        color: tokens.colorTextDark,
      };
    }
    case 'xs': {
      // 200
      return {
        fontSize: tokens.textXs,
        fontWeight: tokens.fontSemibold,
        lineHeight: tokens.leading4,
        letterSpacing: tokens.trackingNormal,
        marginTop: tokens.spacing4,
        marginBottom: 0,
        fontFamily: fontFace,
        color: tokens.colorTextLight,
      };
    }
    case 'xss': {
      // 100
      return {
        fontSize: tokens.textXs,
        fontWeight: tokens.fontNormal,
        textTransform: 'uppercase',
        lineHeight: tokens.leading4,
        letterSpacing: tokens.trackingWidest,
        marginTop: tokens.spacing4,
        marginBottom: 0,
        fontFamily: fontFace,
        color: tokens.colorTextLight,
      };
    }
  }
};

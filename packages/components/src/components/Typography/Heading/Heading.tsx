import React from 'react';
import { HeadingProps } from './types';
import { TypographyContext } from '../Typography';
import { getHeadingStyles } from './styles';
import { css, SerializedStyles } from '@emotion/core';

const Heading = React.forwardRef(
  (props: HeadingProps, ref: React.Ref<HTMLHeadingElement>) => {
    const {
      is: Element = 'h2',
      css: style,
      className,
      fontFamily = 'sans',
      size = 'md',
      marginTop,
      ...rest
    } = props;

    const { marginTop: defaultMarginTop, ...headingStyle } = getHeadingStyles(
      size,
      fontFamily,
    );

    let finalMarginTop = marginTop;
    if (marginTop === 'default') {
      finalMarginTop = defaultMarginTop;
    }

    const finalStyle = css({
      fontSize: headingStyle.fontSize,
      fontWeight: headingStyle.fontWeight,
      lineHeight: headingStyle.lineHeight,
      letterSpacing: headingStyle.letterSpacing,
      marginTop: finalMarginTop || 0,
      marginBottom: 0,
      fontFamily: headingStyle.fontFamily,
      color: headingStyle.color,
      textTransform: headingStyle.textTransform ? 'uppercase' : undefined,
    });

    return (
      <Element
        ref={ref}
        css={[finalStyle, style]}
        className={className}
        {...rest}
      />
    );
  },
);

export default Heading;

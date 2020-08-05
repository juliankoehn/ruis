import React from 'react';
import { TextProps } from './types';
import { getTextStyle } from './styles';

const Text = React.forwardRef(
  (props: TextProps, ref: React.Ref<HTMLSpanElement>) => {
    const { className, css, size = 'sm', fontFamily = 'sans', ...rest } = props;

    const textStyle = getTextStyle(size, fontFamily);

    return (
      <span ref={ref} className={className} css={[textStyle, css]} {...rest} />
    );
  },
);

export default Text;

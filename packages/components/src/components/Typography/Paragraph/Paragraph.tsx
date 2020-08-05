import React from 'react';
import { TextProps } from '../Text/types';
import { getParagraphStyles } from './styles';

const Paragraph = React.forwardRef(
  (props: TextProps, ref: React.Ref<HTMLParagraphElement>) => {
    const { className, css, size = 'sm', fontFamily = 'sans', ...rest } = props;

    const textStyle = getParagraphStyles(size, fontFamily);

    return (
      <p ref={ref} className={className} css={[textStyle, css]} {...rest} />
    );
  },
);

export default Paragraph;

import { SerializedStyles } from '@emotion/core';
import { TypeAttributes } from '../../@types/common';

export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize =
  | 'xss'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl';

export type HeadingProps = {
  is?: HeadingTypes;
  testId?: string;
  css?: SerializedStyles;
  size?: HeadingSize;
  fontFamily?: TypeAttributes.FontFamily;
  className?: string;
  children?: React.ReactNode;
  marginTop?: number | string;
};

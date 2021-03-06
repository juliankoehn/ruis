import { TypeAttributes } from '../../@types/common';
import { SerializedStyles } from '@emotion/core';

export type ParagraphProps = {
  size?: TypeAttributes.Size;
  fontFamily?: TypeAttributes.FontFamily;
  css?: SerializedStyles;

  testId?: string;
  className?: string;
  children?: React.ReactNode;
};

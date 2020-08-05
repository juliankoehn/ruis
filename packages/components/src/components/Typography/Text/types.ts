import React from 'react';
import { TypeAttributes } from '../../@types/common';
import { SerializedStyles } from '@emotion/core';

export type TextProps = {
  /**
   * Size of the text style
   * Can be: xs, sm, md, lg
   */
  size?: TypeAttributes.Size;
  fontFamily?: TypeAttributes.FontFamily;
  children: React.ReactNode;
  css?: SerializedStyles;
  className?: string;
};

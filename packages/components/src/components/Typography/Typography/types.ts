import React from 'react';

export type Spacings =
  | 'spacingPx'
  | 'spacing0'
  | 'spacing1'
  | 'spacing2'
  | 'spacing3'
  | 'spacing4'
  | 'spacing5'
  | 'spacing6'
  | 'spacing8'
  | 'spacing10'
  | 'spacing12'
  | 'spacing16'
  | 'spacing20'
  | 'spacing24'
  | 'spacing32'
  | 'spacing40'
  | 'spacing48'
  | 'spacing56'
  | 'spacing64';

export type ElementConfig = {
  spacing: Spacings;
};

export interface TypographyConfiguration {
  heading: ElementConfig;
  paragraph: ElementConfig;
}

export const defaultProps = {
  testId: 'ruids-text-container',
};

export type TypographyProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
  configuration?: TypographyConfiguration;
} & typeof defaultProps;

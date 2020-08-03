import React from 'react';
import {
  TypographyProps,
  defaultProps,
  TypographyConfiguration,
} from './types';
import { css } from '@emotion/core';

const defaultConfiguration: TypographyConfiguration = {
  heading: { spacing: 'spacing2' },
  paragraph: { spacing: 'spacing2' },
};

export const TypographyContext = React.createContext<TypographyConfiguration>(
  defaultConfiguration,
);

export class Typography extends React.Component<TypographyProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      children,
      testId,
      configuration,
      ...otherProps
    } = this.props;

    const config = configuration ? configuration : defaultConfiguration;

    return (
      <TypographyContext.Provider value={config}>
        <div
          {...otherProps}
          className={className}
          data-test-id={testId}
          css={css({
            display: 'block',
          })}
        >
          {children}
        </div>
      </TypographyContext.Provider>
    );
  }
}

import React from 'react';
import { css } from '@emotion/core';

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const groupStyles = css`
  position: relative;
  display: inline-block;
  vertical-align: middle;

  > * {
    position: relative;
    float: left;
    margin-right: 0 !important;
  }
  // we have to remove radius of our children
  > *:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  ,
  > *:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  ,
  > *:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
`;

export const ButtonGroup = React.forwardRef(
  (props: ButtonGroupProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, ...rest } = props;

    return (
      <div {...rest} role="group" ref={ref} css={groupStyles}>
        {children}
      </div>
    );
  },
);

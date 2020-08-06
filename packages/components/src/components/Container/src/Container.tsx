import React from 'react';
import { css } from '@emotion/core';
import tokens from '@ruids/tokens';

const ContainerStyles = css({
  width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingLeft: tokens.spacing1,
  paddingRight: tokens.spacing1,
});

const fluidStyles = css`
  @media (min-width: ${tokens.screenSm}) {
    max-width: ${tokens.screenSm};
  }
  @media (min-width: ${tokens.screenMd}) {
    max-width: ${tokens.screenMd};
  }
  @media (min-width: ${tokens.screenLg}) {
    max-width: ${tokens.screenLg};
  }
  @media (min-width: ${tokens.screenXl}) {
    max-width: ${tokens.screenXl};
  }
`;

const Container = React.forwardRef(
  (
    props: { fluid?: boolean; children: React.ReactNode },
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const { fluid, ...rest } = props;
    const styles = [ContainerStyles];
    if (!fluid) {
      styles.push(fluidStyles);
    }
    return <div ref={ref} css={styles} {...rest} />;
  },
);

export default Container;

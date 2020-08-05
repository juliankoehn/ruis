import { css, keyframes } from '@emotion/core';

export const ANIMATION_DURATION = 240;

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOutAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const animationEasing = {
  standard: `cubic-bezier(0.4, 0.0, 0.2, 1)`,
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
  sharp: `cubic-bezier(0.4, 0.0, 0.6, 1)`,
  spring: `cubic-bezier(0.175, 0.885, 0.320, 1.175)`,
};

export const getBackdropStyles = (zIndex: number) => {
  return css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${zIndex};

    :before {
      background-color: rgba(67, 90, 111, 0.7);
      left: 0;
      top: 0;
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      content: ' ';
    }
    &[data-state='entering']::before,
    &[data-state='entered']::before {
      animation: ${fadeInAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.deceleration} both;
    }

    &[data-state='exiting']::before,
    &[data-state='exited']::before {
      animation: ${fadeOutAnimation} ${ANIMATION_DURATION}ms
        ${animationEasing.acceleration} both;
    }
  `;
};

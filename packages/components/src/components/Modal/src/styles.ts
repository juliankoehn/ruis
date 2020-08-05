import { css, keyframes } from '@emotion/core';
import tokens from '@ruids/tokens';

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
};

const ANIMATION_DURATION = 200;

const openAnimation = keyframes`
    from {
        transform: scale(0.8);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`;

const closeAnimation = keyframes`
    from {
        transform: scale(1);
        opacity: 1;
    }
    to {
        transform: scale(0.8);
        opacity: 0;
    }
`;
export const ModalBodyStyles = css`
  display: flex;
  overflow: auto;
  padding: ${tokens.spacing4};
`;

export const ModalHeaderStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border-box;
  padding: ${tokens.spacing4};
  flex-shrink: 0;
  border-bottom: 1px solid ${tokens.colorNeutral30};
`;

export const ModalFooterStyles = css`
  box-sizing: border-box;
  border-top: 1px solid ${tokens.colorNeutral30};

  &:before,
  &:after {
    display: table;
    clear: both;
    content: '';
  }
`;

export const ModalFooterInnerStyles = css`
  padding: ${tokens.spacing4};
  float: right;
  box-sizing: border-box;
`;

export const ModalRootStyles = css`
  width: 560px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${tokens.colorNeutral0};
  border-radius: calc(1rem * (3 / ${tokens.fontBaseDefault}));
  box-shadow: ${tokens.shadow2Xl};

  &[data-state='entering'],
  &[data-state='entered'] {
    animation: ${openAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.deceleration} both;
  }

  &[data-state='exiting'] {
    animation: ${closeAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.acceleration} both;
  }
`;

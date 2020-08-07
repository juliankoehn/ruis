import { css } from '@emotion/core';
import tokens from '@ruids/tokens';
import { InputProps } from './types';

type ContainerProps = {
  hovered?: boolean;
  disabled?: boolean;
  focused?: boolean;
  invalid?: boolean;
};

const input = css`
  background-color: transparent;
  border: 0px none;
  box-sizing: border-box;
  color: inherit;
  cursor: inherit;
  font-family: inherit;
  font-size: inherit;
  min-width: 0px;
  outline: currentcolor none medium;
  padding: ${tokens.spacing2} ${tokens.spacing2};
  width: 100%;
  height: ${tokens.spacing10};
  line-height: ${tokens.leadingNormal};
`;

const getContainerBackgroundColor = (props: ContainerProps) => {
  if (props.disabled) {
    if (props.focused) {
      return tokens.colorNeutral20;
    }
    if (props.hovered) {
      return tokens.colorNeutral30;
    }
    return tokens.colorNeutral20;
  }
  if (props.invalid) {
    if (props.focused) {
      return tokens.colorNeutral20;
    }
    if (props.hovered) {
      return tokens.colorNeutral30;
    }
    return tokens.colorNeutral10;
  }

  if (props.focused) {
    return tokens.colorNeutral0;
  }
  if (props.hovered) {
    return tokens.colorNeutral30;
  }
  return tokens.colorNeutral10;
};

const getContainerBorderColor = (props: ContainerProps) => {
  if (props.disabled) {
    if (props.focused) {
      return tokens.colorBlue100;
    }
    return tokens.colorNeutral40;
  }
  if (props.invalid) {
    if (props.focused) {
      return tokens.colorBlue100;
    }
    return tokens.colorRed400;
  }

  if (props.focused) {
    return tokens.colorBlue100;
  }

  return tokens.colorNeutral40;
};

const container = (props: ContainerProps) => {
  return css`
    box-sizing: border-box;
    align-items: center;
    background-color: ${getContainerBackgroundColor(props)};
    border-color: ${getContainerBorderColor(props)};
    border-radius: calc(1rem * (3 / ${tokens.fontBaseDefault}));
    border-width: 2px;
    border-style: solid;
    color: rgb(9, 30, 66);
    cursor: text;
    display: flex;
    font-size: ${tokens.textBase};
    justify-content: space-between;
    max-width: 100%;
    overflow: hidden;
    transition: background-color 0.2s ease-in-out 0s,
      border-color 0.2s ease-in-out 0s;
    overflow-wrap: break-word;
    pointer-events: auto;
    font-family: ${tokens.fontSans};
  `;
};

export const styles = {
  container,
  input,
  before: css`
    box-sizing: border-box;
    padding-left: ${tokens.spacing2};
    display: flex;
    align-items: center;
  `,
  after: css`
    box-sizing: border-box;
    padding-right: ${tokens.spacing2};
    display: flex;
    align-items: center;
  `,
};

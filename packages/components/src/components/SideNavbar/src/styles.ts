import { css } from '@emotion/core';
import tokens from '@ruids/tokens';

const container = css`
  box-sizing: border-box;
  position: fixed;
  padding: 10px;
  width: ${tokens.spacing16};
  left: 0;
  bottom: 0;
  z-index: 10;
  background-color: ${tokens.colorNeutral800};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const header = css`
  box-sizing: border-box;
  margin-top: ${tokens.spacing5};
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
  justify-content: center;
`;
const footer = css`
  box-sizing: border-box;
  margin-top: auto;
`;

const navItem = css`
  box-sizing: border-box;
  color: ${tokens.colorNeutral0};
  border: none;
  background: transparent;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;

  &:hover {
    background-color: #575757;
  }
`;

export default {
  container,
  header,
  footer,
  navItem,
};

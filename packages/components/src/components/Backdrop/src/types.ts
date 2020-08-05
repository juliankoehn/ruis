import React from 'react';
import {
  TransitionProps,
  TransitionStatus,
} from 'react-transition-group/Transition';
import { SerializedStyles } from '@emotion/core';

type ReactNodeWithProps = (props: {
  state: TransitionStatus;
  close: () => void;
}) => JSX.Element;

export type BackdropProps = {
  /**
   * Children can be a node or a function accepting `close: func`
   * and `state: ENTERING | ENTERED | EXITING | EXITED`.
   */
  children: React.ReactNode | ReactNodeWithProps;
  isShown?: boolean;
  preventBodyScrolling?: boolean;
  onBeforeClose?: () => void;
  shouldCloseOnClick?: boolean;
  shouldCloseOnEscapePress?: boolean;
  onExit?: TransitionProps['onExit'];
  onExiting?: TransitionProps['onExiting'];
  onExited?: TransitionProps['onExited'];
  onEnter?: TransitionProps['onEnter'];
  onEntering?: TransitionProps['onEntering'];
  onEntered?: TransitionProps['onEntered'];
  containerStyles?: SerializedStyles;
};

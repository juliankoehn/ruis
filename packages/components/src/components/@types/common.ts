import React from 'react';

export interface StandardProps {
  /** You can use a custom element for this component */
  componentClass?: React.ElementType | string;

  /** Additional classes */
  className?: string;

  /** Primary content */
  children?: React.ReactNode;

  /** Additional style */
  style?: React.CSSProperties;
}

export declare namespace TypeAttributes {
  type Appearance =
    | 'primary'
    | 'positive'
    | 'negative'
    | 'warning'
    | 'muted'
    | 'naked';
  type Size = 'xs' | 'sm' | 'md' | 'lg';
  type FontFamily = 'sans' | 'mono';
  type Status = 'success' | 'warning' | 'error' | 'info';
  type Color =
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'cyan'
    | 'blue'
    | 'violet';
}

export interface AnimationEventProps {
  /** Callback fired before the Modal transitions in */
  onEnter?: (node: null | Element | Text) => void;

  /** Callback fired as the Modal begins to transition in */
  onEntering?: (node: null | Element | Text) => void;

  /** Callback fired after the Modal finishes transitioning in */
  onEntered?: (node: null | Element | Text) => void;

  /** Callback fired right before the Modal transitions out */
  onExit?: (node: null | Element | Text) => void;

  /** Callback fired as the Modal begins to transition out */
  onExiting?: (node: null | Element | Text) => void;

  /** Callback fired after the Modal finishes transitioning out */
  onExited?: (node: null | Element | Text) => void;
}

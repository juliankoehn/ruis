import React, { useState, useRef, useMemo } from 'react';
import { Placement, Options } from '@popperjs/core';
import { usePopper } from 'react-popper-2';
import { Portal } from '../../Portal';

export type PopperPlacement = Placement;
export interface PopperProps {
  trigger: React.ReactElement;
  children?: React.ReactElement;
  /** Formatted like "0, 8px" — how far to offset the Popper from the Reference. Changes automatically based on the placement */
  offset?: [number | null | undefined, number | null | undefined];
  placement?: Placement;
}

export const Popper: React.FC<PopperProps> = ({
  trigger,
  children,
  placement,
  offset,
}) => {
  const [referenceElement, setReferenceElement] = useState<any>();
  const popperElement = useRef<any>();

  const options: Options = useMemo(() => {
    return {
      placement: placement ?? 'bottom',
      strategy: 'fixed',
      modifiers: [
        {
          name: 'hide',
        },
        {
          name: 'offset',
          options: {
            offset: offset,
          },
        },
        {
          name: 'preventOverflow',
          options: {
            altAxis: true,
            padding: 40,
          },
        },
      ],
    };
  }, [placement, offset]);

  const { styles, attributes } = usePopper(
    referenceElement,
    popperElement.current,
    options,
  );

  return (
    <React.Fragment>
      {/** trigger element */}
      {React.cloneElement(trigger, {
        ...trigger.props,
        ref: setReferenceElement,
      })}
      <Portal>
        {children &&
          React.cloneElement(children, {
            style: styles.popper,
            ...attributes.popper,
            ...children.props,
            ref: popperElement,
          })}
      </Portal>
    </React.Fragment>
  );
};

Popper.defaultProps = {
  placement: 'bottom',
  offset: [0, 8],
};

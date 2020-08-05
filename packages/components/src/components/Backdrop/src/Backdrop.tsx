import { Stack } from '../../Stack';
import { StackingOrder } from '../../@types';
import { Portal } from '../../Portal';
import React, { useState, useRef, useEffect } from 'react';
import { BackdropProps } from './types';
import { safeInvoke, preventBodyScroll } from '../../utils';
import { Transition } from 'react-transition-group';
import { ANIMATION_DURATION, getBackdropStyles } from './styles';
import { wrap } from 'lodash';
import { button } from '@storybook/addon-knobs';

const noop = () => {};

const Backdrop = React.memo<BackdropProps>(function Backdrop({
  children,
  preventBodyScrolling = false,
  shouldCloseOnClick = true,
  shouldCloseOnEscapePress = true,
  onBeforeClose,
  onExit = noop,
  onExiting = noop,
  onExited = noop,
  onEnter = noop,
  onEntering = noop,
  onEntered = noop,
  isShown,
  containerStyles,
  ...props
}) {
  const [
    previousActiveElement,
    setPreviousActiveElement,
  ] = useState<Element | null>(null);
  const [status, setStatus] = useState(isShown ? 'entering' : 'exited');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isShown) {
      setStatus('entering');
    }
  }, [isShown]);

  const close = () => {
    const shouldClose = safeInvoke(onBeforeClose);
    if (shouldClose !== false) {
      setStatus('exiting');
    }
  };

  const onEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && shouldCloseOnEscapePress) {
      close();
    }
  };

  useEffect(() => {
    if (status === 'entered') {
      setPreviousActiveElement(document.activeElement);
      bringFocusInsideOverlay();
    }

    if (status === 'entering') {
      document.body.addEventListener('keydown', onEsc, false);
    }

    if (status === 'exiting') {
      document.body.removeEventListener('keydown', onEsc, false);
      bringFocusBackToTarget();
    }
  }, [status]);

  const bringFocusInsideOverlay = () => {
    // Always delay focus manipulation to just before repaint to prevent scroll jumping
    return requestAnimationFrame(() => {
      // Container ref may be undefined between component mounting and Portal rendering
      // activeElement may be undefined in some rare cases in IE

      if (
        containerRef.current == null ||
        document.activeElement == null ||
        !isShown
      ) {
        return;
      }

      const isFocusOutsideModal = !containerRef.current.contains(
        document.activeElement,
      );
      if (isFocusOutsideModal) {
        // Element marked autofocus has higher priority than the other clowns
        const autofocusElement = containerRef.current.querySelector(
          '[autofocus]',
        );

        const wrapperElement = containerRef.current.querySelector('[tabindex]');
        const buttonElement = containerRef.current.querySelector('button');

        if (autofocusElement) {
          (autofocusElement as HTMLElement).focus();
        } else if (wrapperElement) {
          (wrapperElement as HTMLElement).focus();
        } else if (buttonElement) {
          (buttonElement as HTMLButtonElement).focus();
        }
      }
    });
  };

  const bringFocusBackToTarget = () => {
    return requestAnimationFrame(() => {
      if (
        previousActiveElement == null ||
        containerRef.current == null ||
        document.activeElement == null
      ) {
        return;
      }

      // Bring back focus on the target.
      const isFocusInsideModal = containerRef.current.contains(
        document.activeElement,
      );

      if (document.activeElement === document.body || isFocusInsideModal) {
        (previousActiveElement as HTMLElement).focus();
      }
    });
  };

  // ComponentWillUnmount
  useEffect(
    () => () => {
      handleBodyScroll(false);
      document.body.removeEventListener('keydown', onEsc, false);
    },
    [],
  );

  const handleBodyScroll = (preventScroll: boolean) => {
    if (preventBodyScrolling) {
      preventBodyScroll(preventScroll);
    }
  };

  const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
    handleBodyScroll(true);
    safeInvoke(onEnter, node, isAppearing);
  };

  const handleEntering = (node: HTMLElement, isAppearing: boolean) => {
    setStatus('entering');
    safeInvoke(onEntering, node, isAppearing);
  };

  const handleEntered = (node: HTMLElement, isAppearing: boolean) => {
    setStatus('entered');
    safeInvoke(onEntered, node, isAppearing);
  };

  const handleExit = (node: HTMLElement) => {
    handleBodyScroll(false);
    safeInvoke(onExit, node);
  };

  const handleExiting = (node: HTMLElement) => {
    setStatus('exiting');
    safeInvoke(onExiting, node);
  };

  const handleExited = (node: HTMLElement) => {
    setStatus('exited');
    safeInvoke(onExited, node);
  };

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target !== event.currentTarget || !shouldCloseOnClick) {
      return;
    }

    close();
  };

  if (status === 'exited') {
    return null;
  }

  return (
    <Stack value={StackingOrder.OVERLAY}>
      {(zIndex) => (
        <Portal>
          <Transition
            appear
            unmountOnExit
            timeout={ANIMATION_DURATION}
            in={isShown && status !== 'exiting'}
            onExit={handleExit}
            onExiting={handleExiting}
            onExited={handleExited}
            onEnter={handleEnter}
            onEntering={handleEntering}
            onEntered={handleEntered}
          >
            {(state) => (
              <div
                onClick={handleBackdropClick}
                ref={containerRef}
                css={[getBackdropStyles(zIndex), containerStyles]}
                data-state={state}
              >
                {typeof children === 'function'
                  ? // @ts-ignore
                    children({ state, close })
                  : children}
              </div>
            )}
          </Transition>
        </Portal>
      )}
    </Stack>
  );
});

export default Backdrop;

import { Stack } from '../../Stack';
import { StackingOrder } from '../../@types';
import { Portal } from '../../Portal';
import React, { useState, useRef, useEffect } from 'react';
import { BackdropProps } from './types';
import { safeInvoke, preventBodyScroll } from '../../utils';
import { Transition } from 'react-transition-group';
import { ANIMATION_DURATION, getBackdropStyles } from './styles';

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
  ...props
}) {
  const [
    previousActiveElement,
    setPreviousActiveElement,
  ] = useState<Element | null>(null);
  const [status, setStatus] = useState(isShown ? 'entering' : 'exited');
  const containerRef = useRef();

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

  const bringFocusInsideOverlay = () => {};
  const bringFocusBackToTarget = () => {};

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
                css={getBackdropStyles(zIndex)}
                data-state={state}
              >
                {typeof children === 'function'
                  ? // @ts-ignore
                    children({ state, close })
                  : children}
                {children}
              </div>
            )}
          </Transition>
        </Portal>
      )}
    </Stack>
  );
});

export default Backdrop;

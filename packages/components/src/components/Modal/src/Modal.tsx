import React, { Children } from 'react';
import { ModalProps } from './types';
import { Backdrop } from '../../Backdrop';
import { css } from '@emotion/core';
import {
  ModalRootStyles,
  ModalHeaderStyles,
  ModalBodyStyles,
  ModalFooterStyles,
  ModalFooterInnerStyles,
} from './styles';
import { Heading, Paragraph } from '../../Typography';
import { IconButton } from '../../IconButton';
import { Button } from '../../Button';

const closeHandler = (close: () => void) => close();

export const Modal = React.forwardRef(
  (props: ModalProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      isShown,
      shouldCloseOnOverlayClick = true,
      shouldCloseOnEscapePress = true,
      onCloseComplete,
      onOpenComplete,
      onCancel = closeHandler,
      onConfirm = closeHandler,
      preventBodyScrolling = true,
      hasClose = true,
      minHeightContent = 80,
      hasHeader = true,
      hasFooter = true,
      hasCancel = true,
      cancelLabel = 'Cancel',
      confirmLabel = 'Confirm',
      cancelButtonType = 'muted',
      confirmButtonType = 'primary',
      footer,
      header,
      title,
      children,
      testId,
    } = props;

    const renderChildren = (close: () => void) => {
      if (typeof children === 'function') {
        return children({ close });
      }

      if (typeof children === 'string') {
        return <Paragraph>{children}</Paragraph>;
      }

      return children;
    };

    const renderNode = (node: any, close: () => void) => {
      if (typeof node === 'function') {
        return node({ close });
      }
      return node;
    };

    const renderHeader = (close: () => void) => {
      if (!header && !hasHeader) {
        return undefined;
      }

      return (
        <div css={ModalHeaderStyles}>
          {header ? (
            renderNode(header, close)
          ) : (
            <>
              <Heading is="h4" size="lg">
                {title}
              </Heading>
              {hasClose && (
                <IconButton
                  buttonType="naked"
                  icon="x"
                  onClick={() => onCancel(close)}
                />
              )}
            </>
          )}
        </div>
      );
    };

    const renderFooter = (close: () => void) => {
      if (!footer && !hasFooter) {
        return undefined;
      }

      return (
        <div css={ModalFooterStyles}>
          <div css={ModalFooterInnerStyles}>
            {footer ? (
              renderNode(footer, close)
            ) : (
              <>
                {hasCancel && (
                  <Button
                    buttonType={cancelButtonType}
                    tabIndex={0}
                    onClick={() => onCancel(close)}
                  >
                    {cancelLabel}
                  </Button>
                )}
                <Button
                  tabIndex={0}
                  buttonType={confirmButtonType}
                  onClick={() => onConfirm(close)}
                >
                  {confirmLabel}
                </Button>
              </>
            )}
          </div>
        </div>
      );
    };

    return (
      <Backdrop
        isShown={isShown}
        shouldCloseOnClick={shouldCloseOnOverlayClick}
        shouldCloseOnEscapePress={shouldCloseOnEscapePress}
        onExited={onCloseComplete}
        onEntered={onOpenComplete}
        containerStyles={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
        preventBodyScrolling={preventBodyScrolling}
      >
        {({ state, close }) => (
          <div
            role="dialog"
            ref={ref}
            data-testid={testId}
            css={ModalRootStyles}
            data-state={state}
          >
            {renderHeader(close)}
            <div
              data-state={state}
              css={[
                ModalBodyStyles,
                css({
                  minHeight: minHeightContent,
                }),
              ]}
            >
              {renderChildren(close)}
            </div>

            {renderFooter(close)}
          </div>
        )}
      </Backdrop>
    );
  },
);

Modal.defaultProps = {
  testId: 'ruids-modal',
};

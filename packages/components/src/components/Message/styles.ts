import { MessageProps } from './types';
import tokens from '@ruids/tokens';
import { css, keyframes } from '@emotion/core';

const getColors = (props: MessageProps) => {
  switch (props.appearance) {
    case 'info': {
      return {
        backgroundColor: tokens.colorBlue50,
        color: tokens.colorNeutral500,
      };
    }
    case 'positive': {
      return {
        backgroundColor: tokens.colorGreen50,
        color: tokens.colorNeutral500,
      };
    }
    case 'negative': {
      return {
        backgroundColor: tokens.colorRed50,
        color: tokens.colorNeutral500,
      };
    }
    case 'warning': {
      return {
        backgroundColor: tokens.colorYellow50,
        color: tokens.colorNeutral500,
      };
    }
    default:
      throw new Error('selected Appearance does not exists');
  }
};

const container = (showIcon: boolean) =>
  css({
    boxSizing: 'border-box',
    padding: tokens.spacing5,
    paddingLeft: showIcon ? tokens.spacing12 : undefined,
  });

const title = css({
  marginTop: 0,
  marginBottom: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
  fontSize: tokens.textBase,
  fontWeight: tokens.fontMedium,
});

const closeButton = css({
  background: 'transparent',
  position: 'absolute',
  top: 0,
  right: 0,
  padding: `${tokens.spacing2} ${tokens.spacing2} 0`,
  fontSize: tokens.textSm,
  border: 'none',
  outline: 'none !important',
  cursor: 'pointer',
});

const iconWrapper = css({
  position: 'absolute',
  top: 20,
  left: 20,
  lineHeight: 1,
});

const keyframeNames = {
  messageMoveIn: keyframes`
        from {
            opacity: 0;
            transform-origin: 0 0;
            transform: scaleY(.8);
        }
        to {
            opacity: 1;
            transform-origin: 0 0;
            transform: scaleY(1);
        }
    `,
  messageMoveOut: keyframes`
        from {
            opacity: 1;
            transform-origin: 0 0;
            transform:scaleY(1);
            max-height: 150px;
        }
        to {
            opacity: 0;
            transform-origin: 0 0;
            transform:scaleY(.8);
            max-height:0;
            overflow: hidden;
        }
    `,
};

export const getMessageStyles = (
  props: MessageProps,
  display: 'show' | 'hide' | 'hiding',
  full: boolean,
) =>
  css({
    fontSize: tokens.textSm,
    lineHeight: tokens.leadingSnug,
    ...getColors(props),
    fontFamily: tokens.fontSans,
    animation:
      display === 'show'
        ? `${keyframeNames.messageMoveIn} .3s ease-in forwards`
        : display === 'hiding'
        ? `${keyframeNames.messageMoveOut} .3s ease-in forwards`
        : undefined,

    position: full ? 'fixed' : 'relative',
    top: full ? 0 : undefined,
    left: full ? 0 : undefined,
    width: full ? '100%' : undefined,
    borderRadius: full ? 0 : `calc(1rem * (3 / ${tokens.fontBaseDefault}))`,

    '+ *': {
      // if any element after, it adds spacing
      marginTop: tokens.spacing3,
    },
  });

export const styles = {
  closeButton,
  container,
  iconWrapper,
  title,
};

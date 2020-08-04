import React from 'react';
import { AvatarProps } from './types';
import { getAvatarStyles, getAvatarImageStyles } from './styles';

export const Avatar = React.forwardRef(
  (props: AvatarProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      componentClass: Component = 'div',
      size,
      className,
      children,
      src,
      srcSet,
      sizes,
      imgProps,
      circle,
      alt,
      testId = 'ruids-avatar',
      backgroundColor,
      ...rest
    } = props;

    return (
      <Component
        {...rest}
        ref={ref}
        className={className}
        css={getAvatarStyles({
          circle: !!circle,
          backgroundColor,
        })}
        data-testid={testId}
      >
        {src || srcSet ? (
          <img
            {...imgProps}
            src={src}
            sizes={sizes}
            srcSet={srcSet}
            alt={alt}
            css={getAvatarImageStyles}
          />
        ) : (
          children
        )}
      </Component>
    );
  },
);

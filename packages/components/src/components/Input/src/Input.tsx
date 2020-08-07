import React, { useState, useRef } from 'react';
import { styles } from './styles';
import { InputProps } from './types';

function useCombinedRefs<T>(...refs: any) {
  const targetRef = React.useRef<T>();

  React.useEffect(() => {
    refs.forEach(
      (ref: React.RefCallback<T> | React.MutableRefObject<T> | null) => {
        if (!ref) return null;

        if (typeof ref === 'function') {
          ref(targetRef.current as T);
        } else {
          ref.current = targetRef.current as T;
        }
      },
    );
  }, [refs]);

  return targetRef as React.RefObject<T>;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      disabled,
      readOnly,
      required,
      invalid,
      onMouseDown,
      onFocus,
      onBlur,
      elemAfterInput,
      elemBeforeInput,

      ...rest
    } = props;
    const [hovered, setHovered] = useState(false);
    const [isFocused, setFocused] = useState(false);

    const inputRef = useRef<HTMLInputElement>();
    const combinedRef = useCombinedRefs<HTMLInputElement>(ref, inputRef);

    const onMouseDownHandler = (event: React.MouseEvent<HTMLElement>) => {
      /** Running e.preventDefault() on the INPUT prevents double click behaviour */
      // Sadly we needed this cast as the target type is being correctly set
      const target: HTMLInputElement = event.target as HTMLInputElement;
      if (target.tagName !== 'INPUT') {
        event.preventDefault();
      }
      if (
        inputRef?.current &&
        !disabled &&
        document.activeElement !== inputRef.current
      ) {
        inputRef.current.focus();
      }
      if (onMouseDown) {
        onMouseDown(event);
      }
    };

    const onMouseEnter = () => {
      if (!disabled) {
        setHovered(true);
      }
    };

    const onMouseLeave = () => {
      if (!disabled) {
        setHovered(false);
      }
    };

    const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      if (onFocus) {
        onFocus(event);
      }
    };
    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      if (onBlur) {
        onBlur(event);
      }
    };

    return (
      <div
        css={styles.container({
          disabled: !!disabled,
          hovered: hovered,
          focused: isFocused,
          invalid: invalid,
        })}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDownHandler}
      >
        {elemBeforeInput && <span css={styles.before}>{elemBeforeInput}</span>}
        <input
          ref={combinedRef}
          css={styles.input}
          {...rest}
          disabled={disabled ? !!true : undefined}
          readOnly={readOnly}
          required={required}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        {elemAfterInput && <span css={styles.after}>{elemAfterInput}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';

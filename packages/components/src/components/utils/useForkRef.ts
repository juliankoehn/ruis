import { useMemo, MutableRefObject } from 'react';

export type HTMLElementOrNull = HTMLElement | null;
export type CallbackRef = (node: HTMLElement | null) => any;
export type AnyRef = CallbackRef | MutableRefObject<HTMLElementOrNull>;

function setRef(ref: AnyRef, value: HTMLElementOrNull) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

function useForkRef(refA: AnyRef, refB: AnyRef): CallbackRef | null {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return (refValue: HTMLElementOrNull) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

export { useForkRef };

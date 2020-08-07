import React from 'react';

/**
 * React hook that returns the previous value
 */
export function usePrevious<T>(value: T, initialValue: T) {
  const ref = React.useRef(initialValue);

  // Store current value in ref, only update if the value changes
  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

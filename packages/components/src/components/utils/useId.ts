import { useState } from 'react';

let count: number = 0;

/**
 * React hook that always returns an id value that is stable across re-renders
 */
export function useId(prefix: string, explicitId?: string): string {
  const [value] = useState(
    () => explicitId || [prefix, ++count].filter(Boolean).join('-'),
  );
  return value;
}

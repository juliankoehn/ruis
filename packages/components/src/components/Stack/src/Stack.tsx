import { StackingOrder } from '../../@types';
import React, { useContext } from 'react';
import StackingContext from './StackingContext';
import { StackProps } from './types';

const Stack = React.memo<StackProps>(function Stack({
  children,
  value = StackingOrder.STACKING_CONTEXT,
}) {
  const previousValue = useContext(StackingContext);
  const currentValue = Math.max(value, previousValue);
  const nextValue = currentValue + 1;

  return (
    <StackingContext.Provider value={nextValue}>
      {children(currentValue)}
    </StackingContext.Provider>
  );
});

export default Stack;

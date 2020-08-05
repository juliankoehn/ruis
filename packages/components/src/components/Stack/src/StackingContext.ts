import React from 'react';
import { StackingOrder } from '../../@types';

const StackingContext = React.createContext<number>(
  StackingOrder.STACKING_CONTEXT,
);
export default StackingContext;

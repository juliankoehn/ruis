import * as React from 'react';
import { TypeAttributes, StandardProps } from '../@types/common';

export interface TooltipProps extends StandardProps {

    /** Wheather visible */
    visible?: boolean;

    /** Primary content */
    children?: React.ReactNode;
}

declare const Tooltip: React.ComponentType<TooltipProps>;

export default Tooltip;
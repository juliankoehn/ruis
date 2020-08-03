import React from 'react'
import { TableHeadProps, defaultProps } from './types';
import { CellContext, contextOptions } from '../Cell';

export class Head extends React.PureComponent<TableHeadProps> {
    static defaultProps = defaultProps
    render() {
        const {
            className,
            testId,
            offsetTop,
            isSticky,
            children,
            ...otherProps
        } = this.props;

        return (
            <CellContext.Provider
                value={{
                    ...contextOptions.head,
                    offsetTop: offsetTop || 0 
                }}
            >
                <thead
                    className={className}
                    data-test-id={testId}
                    {...otherProps}
                >
                    {children}
                </thead>
            </CellContext.Provider>
        )
    }
}
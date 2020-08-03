import React from 'react'
import { CellProps, defaultProps } from './types';
import { CellContext } from './CellContext';
import { getCellStyles } from './styles';

export class Cell extends React.PureComponent<CellProps> {
    static defaultProps = defaultProps

    render() {
        const {
            className,
            children,
            sorting,
            align,
            testId,
            ...otherProps
        } = this.props;

        return (
            <CellContext.Consumer>
                {({ name: context, element, offsetTop }) => {
                    const Element = element as any;
                    return (
                        <Element
                            className={className}
                            style={{
                                top: offsetTop,
                            }}
                            align={align}
                            data-test-id={testId}
                            {...otherProps}
                            css={getCellStyles(context)}
                        >
                            {children}
                        </Element>
                    );
                }}
            </CellContext.Consumer>
        )
    }
}
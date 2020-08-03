import React from 'react'
import { BodyProps, defaultProps } from './types';

export class Body extends React.PureComponent<BodyProps> {
    static defaultProps = defaultProps

    render() {
        const { className, children, testId, ...otherProps } = this.props;

        return (
            <tbody data-test-id={testId} className={className} {...otherProps}>
                {children}
            </tbody>
        );
    }
}
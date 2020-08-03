import React from 'react'
import { HeadingProps, defaultProps } from './types'
import { TypographyContext } from '../Typography'
import { getHeadingStyles } from './styles'

export class Heading extends React.Component<HeadingProps> {
    static defaultProps = defaultProps
    render() {
        const {
            className,
            children,
            is,
            testId,
            ...otherProps
        } = this.props
        const Element = is
        return (
            <TypographyContext.Consumer>
                {value => (
                    <Element
                        className={className}
                        data-test-id={testId}
                        {...otherProps}
                        css={getHeadingStyles(
                            value.heading.spacing,
                            is
                        )}
                    >
                        {children}
                    </Element>
                )}
            </TypographyContext.Consumer>
        )
    }
}
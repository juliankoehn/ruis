import React from 'react'
import { ParagraphProps, defaultProps } from './types'
import { TypographyContext } from '../Typography'
import { getParagraphStyles } from './styles'

export class Paragraph extends React.Component<ParagraphProps> {
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
                        css={getParagraphStyles(value.paragraph.spacing, is)}
                    >
                        {children}
                    </Element>
                )}
            </TypographyContext.Consumer>
        )
    }
}
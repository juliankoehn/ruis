import React from 'react'
import { RowProps, defaultProps } from './types'
import { css } from '@emotion/core'
import tokens from '@ruids/tokens'

const rowStyle = css`
    background-color: ${tokens.colorNeutral0};
    &:hover {
        background-color: ${tokens.colorNeutral20};
    }
`

export class Row extends React.Component<RowProps> {
    static defaultProps = defaultProps

    render() {
        const { className, children, testId, ...otherProps } = this.props

        return (
            <tr
                className={className}
                data-test-id={testId}
                {...otherProps}
                css={rowStyle}
            >
                {children}
            </tr>
        )
    }
}
import React from 'react'
import { TypographyProps, defaultProps } from './types'
import { css } from '@emotion/core'

const defaultConfiguration: TypographyConfiguration = {
    heading: { spacing: 'spacing2' },
    paragraph: { spacing: 'spacing2' },
}

export type Spacings =
    'spacingPx'
    | 'spacing0'
    | 'spacing1'
    | 'spacing2'
    | 'spacing3'
    | 'spacing4'
    | 'spacing5'
    | 'spacing6'
    | 'spacing8'
    | 'spacing10'
    | 'spacing12'
    | 'spacing16'
    | 'spacing20'
    | 'spacing24'
    | 'spacing32'
    | 'spacing40'
    | 'spacing48'
    | 'spacing56'
    | 'spacing64'

export type ElementConfig = {
    spacing: Spacings
}

export interface TypographyConfiguration {
    heading: ElementConfig
    paragraph: ElementConfig
}

export const TypographyContext = React.createContext<TypographyConfiguration>(defaultConfiguration)

export class Typography extends React.Component<TypographyProps> {
    static defaultProps = defaultProps

    render() {
        const { className, children, testId, ...otherProps } = this.props

        return (
            <TypographyContext.Provider value={defaultConfiguration}>
                <div
                    {...otherProps}
                    className={className}
                    data-test-id={testId}
                    css={css({
                        display: 'block'
                    })}
                >
                    {children}
                </div>
            </TypographyContext.Provider>
        )
    }
}
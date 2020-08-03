import React from 'react'

export const defaultProps = {
    testId: 'ruids-text-container',
}

export type TypographyProps = {
    className?: string
    children?: React.ReactNode
    style?: React.CSSProperties
    testId?: string
} & typeof defaultProps
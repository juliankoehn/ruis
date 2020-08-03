export const defaultProps = {
    is: 'h2',
    testId: 'ruids-heading',
}

export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = {
    is: HeadingTypes
    testId?: string
    style?: React.CSSProperties
    className?: string
    children?: React.ReactNode
} & typeof defaultProps
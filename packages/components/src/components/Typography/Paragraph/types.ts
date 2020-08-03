export type ParagraphTypes = 'p' | 'span' | 'div'

export const defaultProps = {
    is: 'p',
    testId: 'ruids-paragraph',
}

export type ParagraphProps = {
    is: ParagraphTypes
    testId?: string
    style?: React.CSSProperties
    className?: string
    children?: React.ReactNode
} & typeof defaultProps
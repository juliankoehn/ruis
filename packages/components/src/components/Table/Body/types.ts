export type BodyProps = {
    className?: string
    style?: React.CSSProperties
    testId?: string
    children: React.ReactNode
} & typeof defaultProps

export const defaultProps = {
    testId: 'ruids-table-body',
}

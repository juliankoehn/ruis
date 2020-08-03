export const defaultProps = {
    testId: 'ruids-table',
}

export type TableProps = {
    testId?: string
    className?: string
    style?: React.CSSProperties
    children: React.ReactNode
} & typeof defaultProps
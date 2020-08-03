export const defaultProps = {
    testId: 'ruids-table-row',
};

export type RowProps = {
    className?: string
    style?: React.CSSProperties
    testId?: string
    children: React.ReactNode
} & typeof defaultProps
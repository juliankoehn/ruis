export type TableHeadProps = {
    isSticky?: boolean
    offsetTop?: number | string
    className?: string
    testId?: string
    style?: React.CSSProperties
    children: React.ReactNode
} & typeof defaultProps

export const defaultProps = {
    isSticky: false,
    testId: 'ruids-table-head',
};
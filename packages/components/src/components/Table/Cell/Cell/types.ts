export const sortingDirections = {
    asc: 'asc',
    desc: 'desc',
};

export type CellSorting = keyof typeof sortingDirections | boolean;

export type CellProps = {
    align?: 'center' | 'left' | 'right';
    sorting?: CellSorting;
    style?: React.CSSProperties;
    className?: string;
    testId?: string;
    children?: React.ReactNode;
} & typeof defaultProps;

export const defaultProps = {
    align: 'left',
    sorting: false as CellSorting,
    testId: 'ruids-table-cell',
};
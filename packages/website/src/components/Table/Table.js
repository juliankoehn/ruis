import React from 'react'
import { styles } from './styles'
import { TableHead } from './TableHead'
import { TableRow } from './TableRow'
import { TableCell } from './TableCell'
import { TableBody } from './TableBody'

export const Table = ({
    children
}) => {
    return (
        <table
            cellPadding="0"
            cellSpacing="0"
            css={styles.Table}
        >
            {children}
        </table>
    )
}

Table.Head = TableHead
Table.Row = TableRow
Table.Cell = TableCell
Table.Body = TableBody
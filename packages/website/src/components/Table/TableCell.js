import React from 'react'
import { styles } from './styles'

export const TableCell = ({ children }) => (
    <td css={styles.cell}>
        {children}
    </td>
)
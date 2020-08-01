import React from 'react'
import { styles } from './styles'

export const TableRow = ({ children }) => (
    <tr css={styles.row}>
        {children}
    </tr>
)
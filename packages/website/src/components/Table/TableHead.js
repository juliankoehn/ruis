import React from 'react'
import { styles } from './styles'

export const TableHead = ({ children }) => (
    <thead css={styles.head}>
        {children}
    </thead>
)
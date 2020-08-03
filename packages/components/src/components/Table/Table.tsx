import React from 'react'
import { TableProps, defaultProps } from './types'
import { StyledTable, TableContainer } from './styles'
import { Head } from './Head'
import { Cell } from './Cell'
import { Row } from './Row'
import { Body } from './Body'

export class Table extends React.PureComponent<TableProps> {
    static defaultProps = defaultProps
    static Head = Head
    static Cell = Cell
    static Row = Row
    static Body = Body

    render() {
        const {
            className, children, testId, ...otherProps 
        } = this.props


        return (
            <TableContainer>
                <StyledTable
                    className={className}
                    cellPadding="0"
                    cellSpacing="0"
                    data-test-id={testId}
                    {...otherProps}
                >
                    {children}
                </StyledTable>
            </TableContainer>
        )
    }
}
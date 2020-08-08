import React from 'react';
import { TableProps, defaultProps } from './types';
import { styles } from './styles';
import { Head } from './Head';
import { Cell } from './Cell';
import { Row } from './Row';
import { Body } from './Body';

export class Table extends React.PureComponent<TableProps> {
  static defaultProps = defaultProps;
  static Head = Head;
  static Cell = Cell;
  static Row = Row;
  static Body = Body;

  render() {
    const { className, children, testId, ...otherProps } = this.props;

    return (
      <div css={styles.container}>
        <table
          className={className}
          cellPadding="0"
          cellSpacing="0"
          data-test-id={testId}
          {...otherProps}
          css={styles.table}
        >
          {children}
        </table>
      </div>
    );
  }
}

import React from 'react';
import { ColumnHeaderCell, Column } from '@blueprintjs/table';

export default class SelectAllColumn {
  constructor(name, cellRenderer) {
    this.name = name;
    this.cellRenderer = cellRenderer;
  }

  getColumn(data) {
    const columnHeaderCellRenderer = () => (
      <ColumnHeaderCell
        name={<input type="checkbox" />}
      />
    );

    return (
      <Column
        renderCell={this.cellRenderer(this.name)}
        renderColumnHeader={columnHeaderCellRenderer}
        key={this.name}
        name={this.name}
      />
    );
  }
}

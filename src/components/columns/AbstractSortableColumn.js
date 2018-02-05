import React from 'react';
import { ColumnHeaderCell, Column } from '@blueprintjs/table';

export default class AbstractSortableColumn {
  constructor(name, propName, cellRenderer) {
    this.name = name;
    this.cellRenderer = cellRenderer;
    this.propName = propName;
  }

  getColumn(sortColumn, data, sortedIndexMap) {
    const menuRenderer = this.renderMenu && this.renderMenu.bind(this, sortColumn);
    const columnHeaderCellRenderer = () => (
      <ColumnHeaderCell
        name={this.name}
        renderMenu={menuRenderer}
        menuIconName="chevron-down"
      />
    );

    return (
      <Column
        renderCell={this.cellRenderer(this.propName)(data, sortedIndexMap)}
        renderColumnHeader={columnHeaderCellRenderer}
        key={this.propName}
        name={this.name}
      />
    );
  }
}

import React, { Component } from 'react';
import {
  Cell,
  Column,
  ColumnHeaderCell,
  Table,
  RenderMode,
  SelectionModes,
  Utils,
} from '@blueprintjs/table';

import {
  NumberSortableColumn,
  SelectAllColumn,
  TextSortableColumn,
} from './columns';

import {
  EditablePriceCell,
  ItemCell,
  QuantityAndSizingCell,
  SelectRowCell,
  StaticCell,
} from './cells';

import data from '../data.json'

const transformedData = data.map((item) => {
  item.total_price = '$0.00';
  return item;
})

class TableView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: new Set(),
      data: transformedData,
      columns: [
        new SelectAllColumn('selectAll', SelectRowCell),
        new TextSortableColumn('Item', 'name', ItemCell),
        new NumberSortableColumn('Qty & Sizing', 'quantity', QuantityAndSizingCell({ onBlur: this.onQuantityInputBlur })),
        new TextSortableColumn('Unit Price', 'unit_price', EditablePriceCell),
        new TextSortableColumn('Total Price', 'total_price', EditablePriceCell),
        new TextSortableColumn('SKU', 'sku', StaticCell),
        new TextSortableColumn('Style', 'style', StaticCell),
        new TextSortableColumn('Classification', 'classification', StaticCell),
        new TextSortableColumn('Division', 'division', StaticCell),
        new TextSortableColumn('Description', 'description', StaticCell),
      ],
      sortedIndexMap: [],
    }
  }

  renderIdCell = (rowIndex) => {
    return (<Cell>{rowIndex}</Cell>)
  }

  onQuantityInputBlur = (e, rowIndex) => {
    const newData = [...this.state.data];
    const quantity = e.target.value;
    const price = newData[rowIndex].unit_price.substring(1);

    newData[rowIndex].item_quantity = quantity;
    newData[rowIndex].total_price = `$${(quantity * price).toFixed(2)}`;

    this.setState({
      data: newData,
    });
  }

  getColumnWidths = () => {
    const columnWidths = this.state.columns.map(col => null);
    columnWidths[0] = 40;
    columnWidths[1] = 250;
    return columnWidths;
  }

  sortColumn = (name, comparator) => {
    const { data } = this.state;
    const sortedIndexMap = Utils.times(data.length, i => i);
    sortedIndexMap.sort((a, b) => {
      return comparator(data[a][name], data[b][name]);
    });

    this.setState({ sortedIndexMap });
  };

  render() {
    const columns = this.state.columns.map(col => col.getColumn(this.sortColumn, this.state.data, this.state.sortedIndexMap));

    return (
      <div className="row" style={{ position: 'absolute', height: '80%', width: '100%' }}>
        <Table
          columnWidths={this.getColumnWidths()}
          defaultRowHeight={40}
          enableFocus={true}
          fillBodyWithGhostCells={true}
          isRowResizable={false}
          numFrozenColumns={2}
          numRows={this.state.data.length}
          selectionModes={SelectionModes.NONE}
          renderMode={RenderMode.BATCH_ON_UPDATE}
        >
          {columns}
        </Table>
      </div>
    );
  }
};

export default TableView;

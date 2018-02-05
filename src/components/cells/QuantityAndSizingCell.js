import React from 'react';
import { Cell } from '../cells';

export default ({ onBlur }) => (name) => (data, sortedIndexMap) => (rowIndex) => {
  const sortedRowIndex = sortedIndexMap[rowIndex];
  if (sortedRowIndex) {
    rowIndex = sortedRowIndex;
  }

  const availableQuantity = data[rowIndex].quantity;
  const onInputBlur = (e) => {
    onBlur(e, rowIndex);
  }
  return (
    <Cell interactive={true}>
      <input style={{ width: 50 }} onBlur={onInputBlur}/>
      {availableQuantity}
    </Cell>
  )
}
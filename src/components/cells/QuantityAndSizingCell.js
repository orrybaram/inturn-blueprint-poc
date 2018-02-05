import React from 'react';
import { DefaultCell } from '../cells';

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
    <DefaultCell interactive={true}>
      <input style={{ width: 50 }} onBlur={onInputBlur}/>
      {availableQuantity}
    </DefaultCell>
  )
}
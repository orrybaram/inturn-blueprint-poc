import React from 'react';
import { DefaultCell } from '../cells';

export default (name) => (data, sortedIndexMap) => (rowIndex) => {
  const sortedRowIndex = sortedIndexMap[rowIndex];
  if (sortedRowIndex) {
    rowIndex = sortedRowIndex;
  }

  const value = data[rowIndex][name];
  return (
    <DefaultCell>{value}</DefaultCell>
  )
}
import React from 'react';
import Button from '../Button';
import DefaultCell from '../cells/DefaultCell';

export default (name) => (data, sortedIndexMap) => (rowIndex) => {
  const sortedRowIndex = sortedIndexMap[rowIndex];
  if (sortedRowIndex) {
    rowIndex = sortedRowIndex;
  }

  const value = data[rowIndex][name];

  const name = data[rowIndex].name;
  const image = data[rowIndex].image;

  return (
    <DefaultCell interactive={true}>
      <Button />
      {name}
      <img src={image} />
    </DefaultCell>
  )
}

import React from 'react';
import { css } from 'react-emotion';
import Button from '../Button';
import Cell from '../cells/Cell';

const itemNameClass = css`
  display: inline-block;
  width: 60%;
`

export default (name) => (data, sortedIndexMap) => (rowIndex) => {
  const sortedRowIndex = sortedIndexMap[rowIndex];
  if (sortedRowIndex) {
    rowIndex = sortedRowIndex;
  }

  const name = data[rowIndex].name;
  const image = data[rowIndex].image;

  return (
    <Cell interactive={true}>
      <Button />
      <span className={itemNameClass}>{name}</span>
      <img alt="" src={image} />
    </Cell>
  )
}

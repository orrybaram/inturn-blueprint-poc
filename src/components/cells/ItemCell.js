import React from 'react';
import { css } from 'react-emotion';
import Button from '../Button';
import DefaultCell from '../cells/DefaultCell';

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
    <DefaultCell interactive={true}>
      <Button />
      <span className={itemNameClass}>{name}</span>
      <img alt="" src={image} />
    </DefaultCell>
  )
}

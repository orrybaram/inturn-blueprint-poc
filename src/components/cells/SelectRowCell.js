import React from 'react';
import styled, { css } from 'react-emotion';
import { DefaultCell } from '../cells';

const RowIndex = css`
  opacity: 1;
  position: absolute;
`;

const CheckBox = css`
  opacity: 0;
  position: absolute;
`;

const Cell = styled(DefaultCell)`
  ${({isSelected}) => isSelected && css`
    span {
      opacity: 0;
    }

    input {
      opacity: 1;
    }
  `}

  &:hover {
    span {
      opacity: 0;
    }

    input {
      opacity: 1;
    }
  }
`


export default ({ onCheckboxChange }) => (name) => (selected) => (rowIndex) => {
  const isSelected = selected.has(rowIndex);

  return (
    <Cell isSelected={isSelected} interactive={true}>
      <span className={RowIndex}>{Number(rowIndex) + 1}</span>
      <input
        onChange={onCheckboxChange(rowIndex)}
        checked={isSelected}
        className={CheckBox} type="checkbox"
      />
    </Cell>
  )
}
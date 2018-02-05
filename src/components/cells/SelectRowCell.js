import React from 'react';
import { DefaultCell } from '../cells';

export default (name) => (rowIndex) => {
  return (
    <DefaultCell><input type="checkbox" /></DefaultCell>
  )
}
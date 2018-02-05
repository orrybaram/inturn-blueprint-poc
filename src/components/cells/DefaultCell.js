import React from 'react';
import styled from 'react-emotion';
import { Cell } from '@blueprintjs/table';

const CenterAlign = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default (props) => (
  <Cell {...props}>
    <CenterAlign>{props.children}</CenterAlign>
  </Cell>
);

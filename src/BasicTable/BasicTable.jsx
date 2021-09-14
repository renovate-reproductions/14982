import React from 'react';

import Table from '../table3/Table33/Table.jsx'

// TODO: add styles as props from the outside
const BasicTable = ({children}) => (

  <Table 
    border="0" 
    cellpadding="0" 
    cellspacing="0" 
    role="presentation" 
    width="100%">
    <tbody>

      {children}

    </tbody>
  </Table>

);

export default BasicTable;
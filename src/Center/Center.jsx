import React from 'react';
import Table from '../Table/Table.jsx';

const Center = ({ children, className }) => (
  <table cellSpacing="0" cellPadding="0" className={className}>
  <tr>
    <td align="center">
      {children}
    </td>
  </tr>
</table> 
);
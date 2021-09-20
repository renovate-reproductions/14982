import React from 'react';

const Table = ({
  className, children, style, width, align, id
}) => (
  <table
    align={align}
    className={className}
    border={0}
    cellPadding={0}
    cellSpacing={0}
    style={style}
    width={width}
    id={id}
  >
    {children}
  </table>
);

export default Table;


{/* <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"></table> */}
{/* <table border="0" cellpadding="0" cellspacing="0" style="cellpadding:0;cellspacing:0;color:#000000;font-family:Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;"
                                            width="100%"></table> */}
{/* <table cellpadding="0" cellspacing="0" class="show-for-large">  */}
{/* <table cellpadding="0" cellspacing="0" class="header-top-padding" style="border-radius: 8px 8px 0 0; background: #ffffff; width: 100%"> */}
                                                    
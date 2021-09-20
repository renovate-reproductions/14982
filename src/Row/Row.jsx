import React from 'react'

// TODO how to make it work for both default Table and basic table for example.
const Row = ({ children, className, reverse=false, bodyClassName }) => {

    return (
      <table
        className={className}
        dir={reverse && 'rtl'}
      >
        <tbody className={bodyClassName}>
          <tr>
            {children}
          </tr>
        </tbody>
      </table>
    )

}

export default Row

{/* 
    
 types:   table, Table, BasicTable
 <Tag
className={className}
dir={reverse && 'rtl'}
>
<tbody className={bodyClassName}>
  <tr>
    {children}
  </tr>
</tbody>
</Tag> */}
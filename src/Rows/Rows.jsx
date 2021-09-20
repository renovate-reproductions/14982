import React from 'react'

// TODO how to make it work for both default Table and basic table for example.
const Row = ({ children, className, tbody=false, reverse=false, bodyClassName }) => {
    if(tbody){
        return (
            <table
              className={className}
              dir={reverse && 'rtl'}
            >
      
              <tbody className={bodyClassName}>

                  {components.map....}
                    <tr>
                    {children}
                    </tr>
              </tbody>
            </table>
        )
    } else {
        return (
            <table
              className={className}
              dir={reverse && 'rtl'}
            >

                {components.map....}
                    <tr>
                        {children}
                    </tr>         
            </table>
        )
    }
    

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
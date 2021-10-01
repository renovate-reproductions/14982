import React from 'react'

//import Table from './Table/Table.jsx';

const Spacer = ({ height, className }) => {
  return (
    <table className={className}>
      <tbody>
        <tr>
          <td
            className="spacer"
            height={height}
          >
            &nbsp;
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Spacer

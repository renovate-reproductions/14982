import React from 'react'

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
// SECTION is a just two rows together.
import React from 'react';
import Table from '../Table/Table.jsx';
import { styles } from './styles';

const Sector = ({ children }) => (
  <Table
    className="mcnTextBlock"
    style={styles.textBlock}
  >
    <tbody className="mcnTextBlockOuter">
      <tr>
        <td valign="top" className="mcnTextBlockInner" style={styles.textBlockInner}>

          <Table
            align="left"
            style={styles.textContentContainer}
            className="mcnTextContentContainer"
          >
            <tbody>
              <tr>
                <td
                  valign="top"
                  className="mcnTextContent"
                  label="sectionPropsChildren"
                  data-testid="sectionPropsChildren"
                  style={styles.textContent}
                >
                  {children}
                </td>
              </tr>
            </tbody>
          </Table>
          
        </td>
      </tr>
    </tbody>
  </Table>
);

export default Sector;
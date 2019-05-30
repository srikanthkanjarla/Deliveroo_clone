/**
*
* LeftMenuHeader
*
*/

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

function LeftMenuHeader() {
  return (
    <div className={styles.leftMenuHeader}>
      <Link to="/" className={styles.leftMenuHeaderLink}>
        <h3 className={styles.projectName}> LMS DashBoard</h3>
      </Link>
    </div>
  );
}

export default LeftMenuHeader;

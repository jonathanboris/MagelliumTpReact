import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
    return(
      <div className={styles.Footer} data-testid="Footer">
        <span className={styles.Copyright}> Copyright</span>
      </div>
    );

}

export default Footer;

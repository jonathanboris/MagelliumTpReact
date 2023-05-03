import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
const HeaderInitialState = {};
const Header = (props) => {
  const [state, setstate] = useState(HeaderInitialState)
  useEffect(() => {
    return () => {
      
    };
  }, [state])
    return(
      <div className={styles.Header} data-testid="Header">
        <span className={styles.Span}>TP REACT</span>
      </div>
    );

}


Header.propTypes = {};

Header.defaultProps = {};

export default Header;

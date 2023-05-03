import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
const MemeFormInitialState = {};
const MemeForm = (props) => {
  const [state, setstate] = useState(MemeFormInitialState)
  useEffect(() => {
    return () => {
      
    };
  }, [state])
    return(
      <div className={styles.MemeForm} data-testid="MemeForm">
        MemeForm Component
      </div>
    );

}


MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;

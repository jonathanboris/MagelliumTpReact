import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './WfirstFlexGrow.module.css';
const WfirstFlexGrowInitialState = {};
const WfirstFlexGrow = (props) => {
  
    return(
      <div className={styles.WfirstFlexGrow} data-testid="WfirstFlexGrow">
        {props.children}
      </div>
    );

}


WfirstFlexGrow.propTypes = {
  children: PropTypes.any.isRequired
};

WfirstFlexGrow.defaultProps = {};

export default WfirstFlexGrow;

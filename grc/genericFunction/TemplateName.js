import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';
const TemplateNameInitialState = {};
const TemplateName = (props) => {
  const [state, setstate] = useState(TemplateNameInitialState)
  useEffect(() => {
    return () => {
      
    };
  }, [state])
    return(
      <div className={styles.TemplateName} data-testid="TemplateName">
        TemplateName Component
      </div>
    );

}


TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;


import React from "react";
import styles from "./Button.module.css";
import propTypes from "prop-types";

const Button = (props) => {

    console.log(props)
    return (
        
<button  style={{...props.style,backgroundColor:props.backgroundColor}} className={styles.Button} onClick={(evt)=>{
    console.log(evt) 
    props.onClick('le roi albert')}}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    onClick: propTypes.func.isRequired,
    children: propTypes.any.isRequired,
    backgroundColor: propTypes.string,
    style: propTypes.object
}

Button.defaultProps = {
    children: 'click me',
    onClick: ()=>{},
    backgroundColor: 'blue'
}

export default Button;
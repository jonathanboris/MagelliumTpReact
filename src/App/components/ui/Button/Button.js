
import React, { useState } from "react";
import styles from "./Button.module.css";
import propTypes from "prop-types";

const Button = (props) => {
    const [isClicked, setIsClicked] = useState(false)
    console.log(props)
    return (
        
<button  style={{...props.style,backgroundColor:props.backgroundColor}} className={isClicked?styles.Button+' '+styles.clicked:styles.Button} onClick={(evt)=>{
    setIsClicked(true)
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
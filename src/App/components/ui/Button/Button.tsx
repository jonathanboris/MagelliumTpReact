
import React, { useState,useEffect } from "react";
import styles from "./Button.module.css";
import propTypes from "prop-types";

export interface IPropsButton{
onClick: Function;
backgroundColor?: string|undefined;
children: string|React.ReactElement|Array<React.ReactElement|string>;
style?: {}|undefined;
}
const Button:React.FunctionComponent<IPropsButton> = (props) => {
    const [isClicked, setIsClicked] = useState(false)
    console.log(props)

    useEffect(() => {
    //   return () => {
    //     effect
    //   };
    let descripteurTimeout:any = undefined;

    if (isClicked) {
        descripteurTimeout = setTimeout(() => {
            setIsClicked(false)
        },150)
    }

    return () => {
        if(descripteurTimeout){
            clearTimeout(descripteurTimeout)
        }
    }
    }, [isClicked])

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
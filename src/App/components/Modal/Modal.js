import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cancelModal, okModal } from "../../store/modal";

const modalInitialState = {};
const Modal = (props) => {
  const [state, setstate] = useState(modalInitialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return props.show?(
    <div className={styles.Modal} data-testid="Modal">
      <div className={styles.mainContainer}>
        <div className={styles.title}>{props.title}</div>
        <hr />
        <div className={styles.content}>{props.content}</div>
        <hr/>
        <div className={styles.buttons}>
          {undefined !== props.cancelFunction &&
            typeof props.cancelFunction === "function" && (
              <button className="btn btn-warning"onClick={(evt)=>{props.cancelFunction();}}>Annul.</button>
            )}
          <button className="btn btn-primary" onClick={()=>{props.okFunction()}} >Ok</button>
        </div>
      </div>
    </div>
  ):null;
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  title:PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  okFunction: PropTypes.func.isRequired,
  cancelFunction: PropTypes.func,
};

Modal.defaultProps = {title:'Message'};

export default Modal;

export const ReduxModal = (props) => {
  const d=useDispatch();
  const modalState = useSelector((s) => s.modal);
  return <Modal {...modalState} okFunction={()=>{
    d(okModal());
  }}
  cancelFunction={undefined!==modalState.cancelFunction?()=>{
    d(cancelModal());
  }:undefined}
  ></Modal>;
};

import styles from "./Modal.module.css";
import React from "react";
import BackDrop from "./BackDrop";

function Modal(props) {
    return (
        <>
            <div className={styles.modal}>
                <span className={styles.close} onClick={()=>props.onClose()}>
                    &times;
                </span>
                <p className={styles.title}>{props.text}</p>
                {props.children}
            </div>
            <BackDrop onClick={() => props.onClose()}/>
        </>
    );
}

export default Modal;
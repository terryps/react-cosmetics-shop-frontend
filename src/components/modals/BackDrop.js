import styles from "./Modal.module.css";

function BackDrop({onClick}) {
    return <div className={styles.backdrop} onClick={onClick}/>;
}

export default BackDrop;
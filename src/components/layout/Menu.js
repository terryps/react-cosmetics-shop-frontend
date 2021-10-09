import styles from "./Menu.module.css";

function Menu({loginModalHandler, langModalHandler}) {
    return (
        <div className={styles.nav}>
            <span
                className={styles.span}
                onClick={()=>loginModalHandler()}>
                Login
            </span>
            <span
                className={styles.span}
                onClick={()=>langModalHandler()}>
                Language
            </span>
        </div>
    );
}

export default Menu;
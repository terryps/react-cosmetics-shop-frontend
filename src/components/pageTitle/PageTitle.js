import styles from "./PageTitle.module.css";

function PageTitle({title}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{title}</h1>
        </div>
    );
}

export default PageTitle;
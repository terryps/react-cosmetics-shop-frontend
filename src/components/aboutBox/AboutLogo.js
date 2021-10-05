import styles from "./AboutLogo.module.css";

function AboutLogo({title, image, text}) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.h2}>{title}</h2>
                <img className={styles.img} src={image} alt="3ce-logo" />
                <p className={styles.p}>{text}</p>
            </div>
        </div>
    );
}

export default AboutLogo;
import styles from "./AboutBox.module.css";

function AboutBox({title, image, text, reverse, bgPos}) {
    return (
        <div className={`${styles.container} ${reverse && styles.reverse}`}>
            <div className={styles.imgContainer}>
                <div className={styles.img} style={{backgroundImage: `url(${image})`, backgroundPosition: `${bgPos}`}}></div>
            </div>
            <div className={styles.description}>
                <h2 className={styles.h2}>{title}</h2>
                <p className={styles.p}>{text}</p>
            </div>
        </div>
    );
}

export default AboutBox;
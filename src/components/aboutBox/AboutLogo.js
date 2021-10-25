import styles from "./AboutBox.module.css"

function AboutLogo({title, image, text}) {
    return (
        <div className={styles.logoContainer}>
            <div className={styles.description}>
                <h2>{title}</h2>
                <img src={image} alt="3ce-logo" />
                <p>{text}</p>
            </div>
        </div>
    );
}

export default AboutLogo;
import styles from "./SnapSection.module.css";

function SnapSection(props) {
    return (
        <section className={styles.section}>
            {props.children}
        </section>
    );
}

export default SnapSection;
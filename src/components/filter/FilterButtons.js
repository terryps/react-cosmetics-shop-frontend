import styles from "./FilterButtons.module.css";

function FilterButtons({filterBtn, filter, categories}) {
    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                {
                    categories.map((cat, idx) => (
                        <li
                            className={`${styles.li} ${filterBtn===cat && styles.active}`}
                            key={idx}
                            onClick={() => filter(cat)}
                        >
                            {cat}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FilterButtons;
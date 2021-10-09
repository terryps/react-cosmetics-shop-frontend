import styles from "./FilterButtons.module.css";

function FilterButtons({filterBtn, filter, categories}) {
    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                {
                    categories.map((cat, idx) => (
                        <li
                            className={`${styles.li} ${filterBtn===cat.name && styles.active}`}
                            style={{cursor: `url(${cat.image}), auto`}}
                            key={idx}
                            onClick={() => filter(cat.name)}
                        >
                            {cat.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FilterButtons;
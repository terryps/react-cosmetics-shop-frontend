import React from 'react';
import styles from "./PostItem.module.css";

function ProductItem(props) {
    const {
        id,
        name,
        link,
        img1,
        img2,
        price,
        interest,
        handleIconClick,
    } = props;

    const heartIconUrl = interest ?
        "https://stylenanda.com/web/upload/icon_202105211442020100.png":
        "https://stylenanda.com/web/upload/icon_202105211441583000.png";

    return (
        <li key={id} className={styles.li}>
            <div className={styles.card}>
                <div className={styles.box}>
                    <a href={link}>
                        <img src={img1} alt="" />
                    </a>
                </div>
                <div className={styles.product_description}>
                    <div className={styles.icons}>
                        <img className={styles.icon} onClick={() => handleIconClick(id)} src={heartIconUrl} alt="" />
                        <img className={styles.icon} src="https://stylenanda.com/web/upload/icon_202105211441537700.png" alt="" />
                    </div>
                    <a href={link}>
                        <p>{name}</p>
                        <p>{price}</p>
                    </a>
                </div>
            </div>
        </li>
    );
}

export default React.memo(ProductItem);
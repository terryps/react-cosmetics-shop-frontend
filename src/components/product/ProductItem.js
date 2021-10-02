import React from 'react';
import styles from "./ProductItem.module.css";

function ProductItem(props) {
    const {
        id,
        name,
        category,
        link,
        img1,
        img2,
        sale,
        soldout,
        price,
        interest,
        handleIconClick,
    } = props;

    const heartIconUrl = interest ?
        "https://stylenanda.com/web/upload/icon_202105211442020100.png":
        "https://stylenanda.com/web/upload/icon_202105211441583000.png";

    return (
        <li key={id} className={styles.li}>
            <div className={styles.box}>
                <a href={link}>
                    <img src={img1} alt="" />
                </a>
            </div>
            <div className={styles.desc}>
                <div className={styles.icons}>
                    <img className={styles.icon} onClick={() => handleIconClick(id)} src={heartIconUrl} alt="" />
                    <img className={styles.icon} src="https://stylenanda.com/web/upload/icon_202105211441537700.png" alt="" />
                </div>
                <a className={styles.a} href={link}>
                    <p className={styles.p}>{name}</p>
                    <p className={styles.p}>{price}</p>
                </a>
            </div>
        </li>
    );
}

export default React.memo(ProductItem);
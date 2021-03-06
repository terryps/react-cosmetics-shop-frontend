import React from 'react';
import ProductItem from "./ProductItem";
import styles from "./PostList.module.css";

function ProductList(props) {
    return (
        <div className={styles.container}>
            <div className={`${styles.wrapper} ${styles.product_wrapper}`}>
                {props.children}

                <ul className={styles.ul}>
                    {props.currentItems.map(item => (
                        item.display &&
                        <ProductItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            link={item.link}
                            img1={item.thumb_img}
                            img2={item.thumb_over_img}
                            price={item.price}
                            interest={item.interest}
                            handleIconClick={props.handleIconClick}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default React.memo(ProductList);
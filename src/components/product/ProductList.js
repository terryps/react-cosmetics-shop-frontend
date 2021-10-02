import React from 'react';
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";

function ProductList(props) {
    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                {props.currentItems.map(item => (
                    item.display &&
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        category={item.category}
                        link={item.link}
                        img1={item.thumb_img}
                        img2={item.thumb_over_img}
                        sale={item.sale}
                        soldout={item.soldout}
                        price={item.price}
                        interest={item.interest}
                        handleIconClick={props.handleIconClick}
                    />
                ))}
            </ul>
        </div>
    );
}

export default React.memo(ProductList);
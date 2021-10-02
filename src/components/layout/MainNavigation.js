import React from 'react';
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import logo from "../../images/3ce-logo.png";

function MainNavigation() {
    return (
        <header>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="/shop" className={styles.a}>
                            Shop
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/about" className={styles.a}>
                            About
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/" className={styles.a}>
                            <img className={styles.img} src={logo} alt="3ce logo" />
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/review" className={styles.a}>
                            Review
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/video" className={styles.a}>
                            Video
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
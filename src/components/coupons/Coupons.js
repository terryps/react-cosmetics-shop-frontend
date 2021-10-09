import styles from "./Coupons.module.css";

function Coupons() {
    return (
            <ul className={styles.ul}>
                <li>
                    <a href="https://stylenanda.com/board/product/list_review_01.html?board_no=4">
                        <img src="https://stylenanda.com/design1/kr/main_bt01.jpg" />
                    </a>
                </li>
                <li>
                    <a href="https://stylenanda.com/board/free/read.html?no=1000200750&board_no=1">
                        <img src="https://stylenanda.com/design1/kr/main_bt02.jpg" />
                    </a>
                </li>
                <li>
                    <a href="https://stylenanda.com/board/product/read.html?no=1000023825&board_no=6">
                        <img src="https://stylenanda.com/design1/kr/main_bt03.jpg" />
                    </a>
                </li>
            </ul>
    );
}

export default Coupons;
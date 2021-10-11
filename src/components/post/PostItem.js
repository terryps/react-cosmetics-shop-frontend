import styles from "./PostItem.module.css";
import emptyImg from "../../images/no-photo.png";

function PostItem({link, image, title}) {

    return (
        <li className={styles.li}>
            <div className={styles.box}>
                <div className={styles.imgWrap}>
                    <a href={link}>
                        { image ?
                            <img className={styles.img} src={image} alt=""/> :
                            <img className={styles.img} src={emptyImg} alt="" />
                        }
                    </a>
                </div>
                <div className={styles.desc}>
                    <a className={styles.a} href={link}>
                        <p className={styles.p}>{title}</p>
                    </a>
                </div>
            </div>
        </li>
    );
}

export default PostItem;
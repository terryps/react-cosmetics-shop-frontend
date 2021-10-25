import styles from "./PostItem.module.css";
import emptyImg from "../../images/no-photo.png";

function PostItem({link, image, title}) {

    return (
        <li className={styles.li}>
            <div className={styles.card}>
                <div className={styles.box}>
                    <a href={link}>
                        { image ?
                            <img src={image} alt=""/> :
                            <img src={emptyImg} alt="" />
                        }
                    </a>
                </div>
                <div className={styles.description}>
                    <a href={link}>
                        <p>{title}</p>
                    </a>
                </div>
            </div>
        </li>
    );
}

export default PostItem;
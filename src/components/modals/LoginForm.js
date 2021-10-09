import React from "react";
import styles from "./Modal.module.css";

function LoginForm() {
    return (
        <form className={styles.form} action="" method="post">
            <div>
                <input className={styles.input} type="text" placeholder="ID" required/>
                <input className={styles.input} type="password" placeholder="Password" required/>
            </div>
            <div>
                <button
                    className={`${styles.btn} ${styles.primary}`}
                    onClick={(e)=>{e.preventDefault()}}
                >
                    로그인
                </button>
                <button
                    className={styles.btn}
                    onClick={(e)=>{e.preventDefault()}}
                >
                    회원가입
                </button>
                <div className={styles.block}>
                        <span>
                            <a className={styles.a} href="#">아이디 찾기</a><br/>
                            <a className={styles.a} href="#">비밀번호 찾기</a><br/>
                            <a className={styles.a} href="#">비회원 주문조회</a>
                        </span>
                </div>
            </div>

        </form>
    );
}


export default LoginForm;
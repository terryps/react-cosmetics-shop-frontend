import styles from "./Modal.module.css";
import React from "react";

const LANGUAGE_OPTIONS = [
    {val: "ko", text: "LANGUAGE : 한국어"},
    {val: "en", text: "LANGUAGE : English"},
    {val: "cn", text: "LANGUAGE : 中文"},
    {val: "jp", text: "LANGUAGE : 日本語"},
    {val: "tw", text: "LANGUAGE : 繁體中文"},
];

function LanguageForm() {
    return (
        <div className={styles.form}>
            <div>
                <p className={styles.desc} style={{fontWeight: 'Bold'}}>Worldwide Shipping</p>
                <p className={styles.desc}>Please select your preferred language</p>
            </div>
            <div className={styles.imgBlock}>
                <img src="https://stylenanda.com/design1/kr/m_kr1__.png" alt="" />
            </div>
            <div>
                <select className={styles.select}>
                    {LANGUAGE_OPTIONS.map((option, idx) => (
                            <option value={option.val}>{option.text}</option>
                    ))}
                </select>
                <button
                    className={`${styles.btn} ${styles.primary}`}
                    onClick={(e)=>{e.preventDefault()}}
                >
                    go
                </button>
            </div>

        </div>
    );
}

export default LanguageForm;
import React from 'react'
import styles from './Button.module.css'

const Button = ({btnTxt, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <span>{btnTxt}</span>
            <img className={styles.arrow} src="/images/arrow-forward.png" alt="" />
        </button>
    )
}

export default Button

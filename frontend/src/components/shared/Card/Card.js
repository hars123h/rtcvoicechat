import styles from './Card.module.css'

const Card = ({title, iconSrc, alt, children}) => {
    return (
        <div className={styles.card}>
            <div className={styles.headingWrapper}>
                <img src={iconSrc} alt={alt} />
                <h1 className={styles.heading}>{title}</h1>

            </div>
            {children}

        </div>
    )
}

export default Card

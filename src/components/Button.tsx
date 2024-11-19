import styles from './styles/button.module.css'

type ButtonProps = {
    handleClick: () => void
}

export const Button = ({ handleClick }: ButtonProps) => {

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={handleClick}>Tap me for dog photo</button>
        </div>
    )
}

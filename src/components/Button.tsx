import styles from './styles/button.module.css'

type ButtonProps = {
    handleClick: () => void
    isDisabled: boolean
    animal: "Dog" | "Cat" | "Capybara" | "Fox"
}

export const Button = ({ handleClick, isDisabled, animal }: ButtonProps) => {

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={handleClick} disabled={isDisabled}> {isDisabled ? "Loading..." : `Tap me for ${animal} photo`}</button>
        </div>
    )
}

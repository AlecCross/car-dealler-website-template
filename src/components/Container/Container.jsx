import styles from "../Container/Container.module.css"

export default function Container({ children }) {
    return (
        <div className={styles["custom-container"]}>{children}</div>
    )
}

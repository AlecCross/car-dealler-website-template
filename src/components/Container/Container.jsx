import './../../app/globals.css'
import styles from "../Container/Container.module.css"

export default function Container({ children }) {
    return (
        <div className={styles["container"]}>{children}</div>
    )
}

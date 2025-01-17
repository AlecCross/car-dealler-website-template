import Button from '@/components/Button/Button'
import styles from './Section3.module.css'

export default function Section3() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>
                        Increase your sales, expand your product range
                    </h2>
                    <Button>Buy Template</Button>
                </div>
            </div>
        </div>
    )
}

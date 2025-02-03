import Button from '@/components/Button/Button'
import styles from './Section3.module.css'

export default function Section3() {
    return (
        <section className={styles.section}>
            <div className={styles.imageWrapper}>
                <img
                    src="/images/home-page/section3/image.png"
                    alt="Cafe"
                    className={styles.image}
                />
                {/* Карточка для ПК та планшетів */}
                <div className={styles.desktopCard}>
                    <h2>Increase your sales, expand your product range</h2>
                    <Button>Buy Template</Button>
                </div>
            </div>

            {/* Карточка для мобільних (знизу) */}
            <div className={`${styles.card} ${styles.mobileCard}`}>
                <h2>Increase your sales, expand your product range</h2>
                <Button>Buy Template</Button>
            </div>
        </section>
    )
}

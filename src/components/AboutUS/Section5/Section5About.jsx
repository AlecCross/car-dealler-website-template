import Button from '@/components/Button/Button'
import styles from './Section5.module.css'

export default function Section5About() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contact</h2>
            <p className={styles.description}>Please contact Sober Experience Studio through our online contact form with any questions or collaboration inquiries.</p>
            <Button>By Template</Button>
        </div>
    )
}

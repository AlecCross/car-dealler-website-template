import Team_Card from '@/components/Team_Card/Team_Card'
import styles from './Section3About.module.css'

export default function Section3About() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Our team</h2>
            <div className={styles.team}>
                <Team_Card />
                <Team_Card />
                <Team_Card />
                <Team_Card />
            </div>
        </div>
    )
}


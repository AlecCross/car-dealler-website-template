import styles from './Section4About.module.css'

export default function Section4About() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Collaboration</h2>
            <div className={styles.content}>
                <p className={styles.description}>We believe in the power of collaboration. Our team works closely with our clients to understand their needs and goals, and we use our expertise to deliver the best possible solutions.</p>
                <div className={styles.logos}>
                    <img src={'/icons/about/logo1.svg'} alt="logo" />
                    <img src={'/icons/about/logo2.svg'} alt="logo" />
                    <img src={'/icons/about/logo2.svg'} alt="logo" />
                    <img src={'/icons/about/logo3.svg'} alt="logo" />
                    <img src={'/icons/about/logo.svg'} alt="logo" />
                </div>
            </div>
        </div>
    )
}

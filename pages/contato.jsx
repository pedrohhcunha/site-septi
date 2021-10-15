import styles from '../styles/contato.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function contato(props) {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.section}>
                CONTATO
            </section>
            <Footer />
        </main>
    )
}
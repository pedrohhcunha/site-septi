import styles from '../styles/catalago.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TrabalheConosco(props) {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.section}>
                TRABALHE CONOSCO
            </section>
            <Footer />
        </main>
    )
}
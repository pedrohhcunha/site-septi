import styles from '../styles/catalago.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function trabalheConosco(props) {
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
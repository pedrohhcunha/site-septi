import styles from '../styles/trabalheConosco.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Vaga from '../components/Vaga'

export default function TrabalheConosco(props) {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.section}>
                <h2>Trabalhe conosco</h2>
                <div className={styles.vagas}>
                    <Vaga
                        title="Head of Marketing"
                        responsabilidades="responsabilidades"
                        requisitos="requisitos"
                        oferecemos="oferecemos"
                    />
                    <Vaga
                        title="Head of Technology"
                        responsabilidades="responsabilidades"
                        requisitos="requisitos"
                        oferecemos="oferecemos"
                    />
                    <Vaga
                        title="Head of Sales"
                        responsabilidades="responsabilidades"
                        requisitos="requisitos"
                        oferecemos="oferecemos"
                    />
                    <Vaga
                        title="Head of Enterpreneur"
                        responsabilidades="responsabilidades"
                        requisitos="requisitos"
                        oferecemos="oferecemos"
                    />
                </div>
            </section>
            <Footer />
        </main>
    )
}
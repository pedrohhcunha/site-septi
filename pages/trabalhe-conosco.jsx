import styles from '../styles/trabalheConosco.module.scss'
import Header, { getStaticProps } from '../components/Header'
import Footer from '../components/Footer'
import Vaga from '../components/Vaga'
import vagas from '../data-vagas'

export default function TrabalheConosco(props) {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.section}>
                <h2>Trabalhe conosco</h2>
                <div className={styles.vagas}>
                    {vagas.map((vaga, index) => (
                        <Vaga
                            key={index}
                            title={vaga.title}
                            responsabilidades={vaga.responsabilidades}
                            requisitos={vaga.requisitos}
                            oferecemos={vaga.oferecemos}
                        />  
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    )
}
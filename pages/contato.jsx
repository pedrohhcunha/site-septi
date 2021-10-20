import styles from '../styles/contato.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contato(props) {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.section}>
                <h2>CONTATO</h2>
                <div className={styles.content}>
                    <div className={styles.contatoForm}>
                        <h3>Formulário</h3>
                    </div>
                    <div className={styles.contatoInfo}>
                        <h3>Contato</h3>
                        <span>
                        Azeplast Indústria e Comércio Ltda <br/>
                        Rua Beira Rio, 215 E, Bairro Efapi <br/>
                        Chapecó/SC. CEP: 89809-807 <br/>
                        <br/>
                        (49) 3328.6515 <br/>
                        azeplast@azeplast.com.br <br/>
                        comercial@azeplast.com.br <br/>
                        </span>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
import styles from '../styles/trabalheConosco.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Vaga from '../components/Vaga'
import vagas from '../data/data-vagas'
import { useState } from 'react'
import Head from 'next/head'
import Modal from '../components/Modal'
import FormContato from '../components/FormContato'
export default function TrabalheConosco(props) {

    const [stateModalCompra, setStateModalCompra] = useState(false);

    return (
        <main className={styles.main}>
            <Head>
                <title>Trabalhe Conosco | SEPTI Healthcare</title>
                <meta name="description" content="A septi é uma industria onde fabricamos e comercializamos EPIs, descartáveis e hospitalares, voltados para a paramentação segura em procedimentos cirúrgicos." />
            </Head>
            {/* Modal para compra */}
            <Modal
                isOpen={stateModalCompra}
                closeModal={() => setStateModalCompra(false)}
            >
                <FormContato />
            </Modal>
            <Header 
                modalCompra={() => setStateModalCompra(true)}
            />
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
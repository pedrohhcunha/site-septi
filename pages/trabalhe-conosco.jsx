//Criando página de trabalhe conosco

//Importando módulo para a estilização da página
import styles from '../styles/trabalheConosco.module.scss'

//Importando componentes necessários
import Footer from '../components/Footer'
import FormContato from '../components/FormContato'
import Head from 'next/head'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Vaga from '../components/Vaga'
import vagas from '../data/data-vagas'

//Importando Hooks necessários
import { useState } from 'react'

//Defunindo e exportando a página
export default function TrabalheConosco() {

    //Definindo estado para controlar o modal de compra
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
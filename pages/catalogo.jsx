import styles from '../styles/catalago.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import Head from 'next/head'
import Modal from '../components/Modal'
import FormContato from '../components/FormContato'

export default function Catalogo(props) {

    const [stateModalCompra, setStateModalCompra] = useState(false);
    
    return (
        <main className={styles.main}>
            <Head>
                <title>Catálogo | SEPTI Healthcare</title>
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
                CATALOGO
            </section>
            <Footer />
        </main>
    )
}
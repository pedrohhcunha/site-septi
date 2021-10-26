
//Importando módulo para realizar a estilizaçao da página
import styles from '../styles/catalago.module.scss'

//Importando componentes necessários
import Footer from '../components/Footer'
import FormContato from '../components/FormContato'
import FormCatalogo from '../components/FormCatalogo'
import Head from 'next/head'
import Header from '../components/Header'

//Importando Hooks necessários
import { useState } from 'react'

//Defindo e exportando a página
export default function Catalogo() {

    //Controlando o estado do modal de compra
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
                <h2>Catálogo</h2>
                <div className={styles.areaForm}>
                    <FormCatalogo />
                </div>
            </section>
            <Footer />
        </main>
    )
}
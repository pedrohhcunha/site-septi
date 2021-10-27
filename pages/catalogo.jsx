
//Importando módulo para realizar a estilizaçao da página
import styles from '../styles/catalago.module.scss'

//Importando componentes necessários
import Footer from '../components/Footer'
import FormContato from '../components/FormContato'
import FormCatalogo from '../components/FormCatalogo'
import Head from 'next/head'
import Header from '../components/Header'
import Modal from '../components/Modal'

//Importando Hooks necessários
import { useState, useEffect } from 'react'

//Defindo e exportando a página
export default function Catalogo() {

    //Controlando o estado do modal de compra
    const [stateModalCompra, setStateModalCompra] = useState(false);

    //Bloquendo scroll quando o modal estiver aberto
    useEffect(() => {
        if(stateModalCompra){
        document.querySelector('body').style.overflow = 'hidden'
        } else {
        document.querySelector('body').style.overflow = 'auto'
        }
    }, [stateModalCompra]);
    
    return (
        <main className={styles.main}>
            <Head>
                <title>Catálogo | SEPTI Healthcare</title>
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
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
import FormVaga from '../components/FormVaga.jsx'

//Importando Hooks necessários
import { useState, useEffect } from 'react'

//Defunindo e exportando a página
export default function TrabalheConosco() {

    //Definindo estado para controlar o modal de compra
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
        <>
            <div className={styles.areaForm}>
                <div className={styles.modalForm}>
                    <FormVaga />
                </div>
            </div>
            <main className={styles.main}>
            <Head>
                <title>Trabalhe Conosco | SEPTI Healthcare</title>
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
        </>
    )
}
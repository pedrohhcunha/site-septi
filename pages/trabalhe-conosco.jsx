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
import axios from 'axios'

//Defunindo e exportando a página
export default function TrabalheConosco() {

    //Definindo estado para controlar o modal de compra
    const [stateModalCompra, setStateModalCompra] = useState(false);

    const [stateModalVaga, setStateModalVaga] = useState(false);

    const [vagasSepti, setVagasSepti] = useState([{
        imagem_url: "",
        titulo: "",
        responsabilidades: "",
        requisitos: "",
        beneficios: ""
    }])

    //Bloquendo scroll quando o modal estiver aberto
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_INTRANET_API}/vagas_septi`).
        then(function (response) {
            setVagasSepti(response.data)
        })
        if(stateModalCompra || stateModalVaga){
            document.querySelector('body').style.overflow = 'hidden'
        } else {
            document.querySelector('body').style.overflow = 'auto'
        }
    }, [stateModalCompra, stateModalVaga]);

    return (
        <>
            <div className={`${styles.areaForm} ${stateModalVaga ? styles.active : ''}`}>
                <div className={styles.modalForm}>
                    <FormVaga closeModal={() => setStateModalVaga(false)}/>
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
                    {vagasSepti.map((vaga, index) => (
                        <Vaga
                            key={index}
                            imagem={vaga.imagem_url}
                            title={vaga.titulo}
                            responsabilidades={vaga.responsabilidades}
                            requisitos={vaga.requisitos}
                            oferecemos={vaga.beneficios}
                            openVaga={() => setStateModalVaga(true)}
                        />  
                    ))}
                </div>
            </section>
            <Footer />
        </main>
        </>
    )
}
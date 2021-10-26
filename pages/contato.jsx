//Criando a página de contato da aplicação

//Importando o módulo de estilzação
import styles from '../styles/contato.module.scss'

//Importando os componentes necessários
import Footer from '../components/Footer'
import FormContato from '../components/FormContato'
import Modal from '../components/Modal'
import Head from 'next/head'
import Header from '../components/Header'

//Importando os Hooks ncessários
import { useState, useEffect } from 'react'

//Defindo e exportando a página
export default function Contato() {

    //Estado para manipular o modal de compra
    const [stateModalCompra, setStateModalCompra] = useState(false);

    //Bloquendo scroll quando o modal estiver aberto
    useEffect(() => {
        if(stateModalCompra){
        document.querySelector('body').style.overflow = 'hidden'
        } else {
        document.querySelector('body').style.overflow = 'auto'
        }
    }, [stateModalCompra]);

    <Head>
        <title>Contato | SEPTI Healthcare</title>
        <meta name="description" content="A septi é uma industria onde fabricamos e comercializamos EPIs, descartáveis e hospitalares, voltados para a paramentação segura em procedimentos cirúrgicos." />
    </Head>

    return (
        <>
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
                <h2>CONTATO</h2>
                <div className={styles.content}>
                    <div className={styles.contatoForm}>
                        <FormContato />
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
        </>
    )
}
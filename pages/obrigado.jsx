//Criando a página de obrigado
//Página a qual a pessoa será encaminhada depois de responder um formulário

//Importando Hooks necessários
import { useEffect } from 'react'

//Importando módulo para a estilzação da página
import styles from '../styles/Obrigado.module.scss'
import Head from 'next/head'

//Definindo e exportando o componente
export default function Obrigado() {

    //Sempre que a página for carregada, espera 3 segundos e e encaminha o usuário para a página de origem do mesmo
    useEffect(() => {
        setTimeout(() => {
            window.history.back()
        }, 3000);
    }, []);
    
    return (
        <>
            <Head>
                <title>Trabalhe Conosco | SEPTI Healthcare</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.topLine}></div>
                    <h1>Obrigado!</h1>
                    <p>Agradecemos o seu interesse por nossas linhas de produtos. Recebemos sua solicitação e entraremos em contato o mais breve possível.</p>
                </div>
            </main>
        </>
    )
}
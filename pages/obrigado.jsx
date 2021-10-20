import { useEffect } from 'react'
import styles from '../styles/Obrigado.module.scss'

export default function Obrigado(props) {
    useEffect(() => {
        setTimeout(() => {
            window.history.back()
        }, 3000);
    }, []);
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <div className={styles.topLine}></div>
                <h1>Obrigado!</h1>
                <p>Agradecemos o seu interesse por nossas linhas de produtos. Recebemos sua solicitação e entraremos em contato o mais breve possível.</p>
            </div>
        </main>
    )
}
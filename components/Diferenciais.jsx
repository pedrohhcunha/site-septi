//Criando o componente de nosso diferenciais
//diferenciais: <list[object[title: <string>, description: <string>]]> | Define os diferenciais que apareceram na sessão
//hideTitle: <boolean> | Define se o titulo vai ou não aparecer no inicio da sessão

//Importando o módulo para realizar as estilizalções do componente
import styles from '../styles/Diferencias.module.scss'

import Image from 'next/image'

//Definindo e exportando o componente
export default function Diferenciais (props){
    return (
        <section className={styles.section}>
            {!props.hideTitle && 
                <h2 className="fonteBranca">Nossos diferenciais</h2>
            }
            <div className={styles.diferenciais}>
                {props.diferenciais.map((diferencial, index) => (
                    <div key={index} className={styles.diferencial}>
                        <Image src={diferencial.icon} width="80px" height="80px" objectFit="contain" />
                        <h3 className="fonteCoral">{diferencial.title}</h3>
                        <p className="fonteBranca">{diferencial.description}</p>
                        <div className={styles.separator}></div>
                    </div>  
                ))}
            </div>
        </section>
    )
}
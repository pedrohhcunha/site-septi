//Criando componente que "abre e fecha" que contém uma area com titulo e um conteudo
//title: <string> | Titulo do componente
//content: <content> | Conteúdo do componente - String que vai ser inserido a um parágrafo

//Importando o módulo para a estulização do componente
import styles from '../styles/DropDiv.module.scss'

//Importando componentes necessários
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'  

//Importando os Hooks necessários
import { useState } from 'react'

//Definindo e exportando o componente
export default function DropDiv(props) {

    //Deinindo estado que controla se o componente está aberto ou fechado
    const [stateDropDiv, setStateDropDiv] = useState(false);

    return (
        <div className={`${styles.dropDiv} ${stateDropDiv ? styles.active : ''}`} onClick={() => setStateDropDiv(!stateDropDiv)}>
            <div className={styles.title}>
                <span>{props.title}</span> 
                <FontAwesomeIcon icon={faPlusCircle} className={styles.icon}/>
            </div>
            <div className={styles.content}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
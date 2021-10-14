//Componente de modal para ser utilziado em todos os modais
//closeModal: <function> | Função responsável por fechar o modal e será atribuida ao botão de fechar
//children: <reactComponent> | Contéudo que aprecerá dentro do modal
//isOpen: <boolean> | Define o estadop atual do modal, aberto ou fechado

//Importando mósulode estilização
import styles from '../styles/Modal.module.scss'

//Importando componentes necessários
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'


//Definindo e exportando o componente
export default function Modal(props) {
    return (
        <aside className={`${styles.aside} ${props.isOpen ? styles.active : ''}`}>
            <div className={`${styles.modal}`}>
                <FontAwesomeIcon
                    icon={faMinusCircle}
                    className={styles.icon}
                    onClick={props.closeModal}    
                />
                {props.children}
            </div>
        </aside>
    )
}
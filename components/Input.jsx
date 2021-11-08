//Criando componente de input padrão para ser utilizado em formulários na aplicação
//type: <string> | Representa a tipagem do valor inserido no input
//label: <strgin> | Representa o titulo do input
//requiered: <boolean> | Afirma se o input tem seu valor necessário ou opcional
//name: <string> | Deve ser o mesmo nome que o do objeto que controla os dados do input
//changeFunction: <function> Função a ser executada quando houver qualquer mudança no valor do input

//Importando módulo de estilização do componente
import styles from '../styles/Input.module.scss'

//Definindo e exportando o componente
export default function Input(props) {
    return(
        <div className={styles.areainput}>
            <label className={styles.label} htmlFor="">{`${props.label} ${props.required ? " *" : ""}`}</label>
            <input onChange={() => props.changeFunction(event)}  className={styles.input} required={props.required} name={props.name} type={props.type} />
        </div>
    )
}
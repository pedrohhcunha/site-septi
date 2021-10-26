//Componente de textarea estilizado e preparado para ser utilzado em formulários na aplicaçãos
//label: <strgin> | Representa o titulo do textarea
//name: <string> | Deve ser o mesmo nome que o do objeto que controla os dados do textarea
//changeFunction: <function> Função a ser executada quando houver qualquer mudança no valor do textarea


//Importando módulos para a estlização do componente
import styles from '../styles/Textarea.module.scss'

//Defindo e exportando o componente
export default function Textarea(props) {
    return(
    <div className={styles.areainput}>
        <label className={styles.label} htmlFor="">{props.label}</label>
        <textarea onChange={() => props.changeFunction(event)} className={styles.textarea} name={props.name} rows="5"></textarea>
    </div>
    )
}
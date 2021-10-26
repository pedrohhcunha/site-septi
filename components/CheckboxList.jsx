//Componente de caixas de seleção para ser utilizado em formuário
//Necessita de implmentação conjunta de função par manipular as ações exercidadas nos checklists
//title: <string> | Define o titulo da lista
//items: <list<string>> | Define as opções que estaráo presentes na lista

//Importando a estilização necessário
import styles from '../styles/CheckboxList.module.scss'

//Definindo e exportando o componente
export default function CheckboxList(props) {
    return(
        <>
            <h4 styles={styles.subTitle}>{props.title}e</h4>
            <ul className={styles.ulList}>
                {props.items.map((item, index) => (
                <li
                    key={index}
                >
                    <input
                        type="checkbox"
                        onChange={() => props.changeFunction(event, index)}
                    />
                    <label
                        htmlFor=""
                    >
                    {item}
                    </label>
                </li>
                ))}
            </ul>
        </>
    )
}
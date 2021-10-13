//Criando o componente de nosso diferenciais

//Importando o módulo para realizar as estilizalções do componente
import styles from '../styles/Diferencias.module.scss'

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
                        <div className={styles.icon}></div>
                        <h3 className="fonteCoral">{diferencial.title}</h3>
                        <p className="fonteBranca">{diferencial.description}</p>
                        <div className={styles.separator}></div>
                    </div>  
                ))}
            </div>
        </section>
    )
}
//Definindo componente de faq a ser utilizados nas páginas de linhas de produto
//perguntas: <list[object[pergunta: <string>, resposta: <string>]]> | Define as perguntas e respostas a serem inseridas no faq

//Importando o módulo para a estilização do componente
import styles from '../styles/Faq.module.scss'

//Importando os componentes necessários
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Importando os hooks necessários
import { useState } from 'react';

//Definindo e exportanto o componente
export default function Faq(props) {

  //Definindo controlador para definir qualn das perguntas estará com a resposta visivél
  const [idOpen, setIdOpen] = useState(-1);
  
  //Exportando o JSX do componente
  return(
    <section className={styles.faq}>
      <h2 className="fonteAzul">Perguntas Frequentes</h2>
      {props.perguntas.map((pergunta, index) => (
        <div
          key={index}
          className={`
            ${styles.pergunta}
            ${idOpen === index ? styles.activePergunta : ''}
          `}
          onClick={() => setIdOpen(index)}
        >
          <div className={styles.headerPegunta}>
            <h4 className={styles.textoPergunta} >{pergunta.pergunta}</h4>
            <FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
          </div>
          <div className={styles.areaResposta}>
            <p className={styles.resposta}>{pergunta.resposta}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
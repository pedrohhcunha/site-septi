import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import styles from '../styles/Faq.module.scss'

export default function Faq(props) {

  const [idOpen, setIdOpen] = useState(0);
  
  return(
    <section className={styles.faq}>
      <h2 className="fonteAzul">Perguntas Frequentes</h2>
      {props.perguntas.map((pergunta, index) => (
        <div
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
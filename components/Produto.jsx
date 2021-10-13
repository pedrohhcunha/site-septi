import styles from '../styles/Produto.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import { useState } from 'react'

export default function Produto(props) {

    const [stateCarossel, setStateCarossel] = useState(0);

    return (
        <section className={`${styles.sectionProduto} ${props.alternative ? styles.alternative : ''}`}>
            <div className={styles.areaContent}>
                <h2 className="fonteAzul">{props.title}</h2>
                <p>{props.description}</p>
                <div className={styles.areaButtons}>
                    <Button
                        actionButton={() => console.log("comprou")}
                        sizeButton="medium"
                        typeButton="principal"
                        buttonHover
                    >
                        Comprar agora
                    </Button>
                    <Button
                        actionButton={() => console.log("comprou")}
                        sizeButton="medium"
                        typeButton="secundario"
                        buttonHover
                    >
                        Ficha Técnica
                    </Button>
                </div>
            </div>
            <div className={styles.areaSwipper}>
                <div className={styles.swipper}>
                    <div className={styles.itemsSwipper}>
                        {props.images.map((item, index) => (
                            <div key={index} className={styles.itemSwipper}>
                                {index}
                            </div>    
                        ))}
                    </div>
                </div>
                <div className={styles.paginationSwipper}>
                    {props.images.map((_, index) => (
                        <div className={`${styles.pageSwipper} ${index === stateCarossel ? styles.activePage : ''}`}></div>
                    ))}
                </div>
                <FontAwesomeIcon className={styles.prevSwipper} icon={faAngleLeft} />
                <FontAwesomeIcon className={styles.nextSwipper} icon={faAngleRight} />
            </div>
        </section>
    ) 
}
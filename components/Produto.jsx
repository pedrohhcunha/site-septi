//Componente de seção para ser utilizado nas páginas de produto
//alternative: <boolean> | Define a tipagem de estilização do elemento
//title: <string> | Define o titulo da seção do produto
//description: <string> | Define a descrição do produto
//images: <list[file: <url>, alt: <string>]> | Define as imagens que representaram o produto
//modalFicha: <function> | Define a função a ser executada para abrir o modal de ficha técnica
//modalCompra: <function> | Define a função a ser executada para abrir o modal de compra

//Importando módulo para a estilização do componente
import styles from '../styles/Produto.module.scss'

//Importando os componentes necessários
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import Image from 'next/image'

//Importando os hooks necessários
import { useState, useEffect } from 'react'

//Definindo e exortanto o componente
export default function Produto(props) {

    //Criando controlador do estado atual do carrosel- representa um index de props.images
    const [stateCarossel, setStateCarossel] = useState(0);

    //Definindo função para retroceder uma posição no carrossel
    const prevCarrossel = () => {
        let futureState = 0
        if(stateCarossel >= 1){
            futureState = stateCarossel - 1
        }
        setStateCarossel(futureState)
    }

    //Definindo função para avançar uma posição no carrossel
    const nextCarrosel = () => {
        let futureState = props.images.length - 1
        if(stateCarossel < props.images.length - 1){
            futureState = stateCarossel + 1
        }
        setStateCarossel(futureState)
    }

    //Voltando para a posição 0 do carrosel sempre que a página for alterada
    useEffect(() => {
        setStateCarossel(0)
    }, [location.href]);    

    //Retornando o JSX do componente
    return (
        <section className={`${styles.sectionProduto} ${props.alternative ? styles.alternative : ''}`}>
            <div className={styles.areaContent}>
                <h2 className="fonteAzul">{props.title}</h2>
                <p className="fonteAzul">{props.description}</p>
                <div className={styles.areaButtons}>
                    <Button
                        actionButton={props.modalCompra}
                        sizeButton="medium"
                        typeButton="principal"
                        buttonHover
                    >
                        Comprar agora
                    </Button>
                    <Button
                        actionButton={props.modalFicha}
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
                    <div
                        style={{transform: `translateX(-${stateCarossel * 250}px)`}}
                        className={styles.itemsSwipper}
                    >
                        {props.images.map((item, index) => (
                            <div key={index} className={styles.itemSwipper}>
                                <Image 
                                    priority
                                    src={process.env.NEXT_PUBLIC_LINK + "/images/" + item.file}
                                    alt={item.alt}
                                    layout="fill"
                                    className={styles.imageProduto}
                                />
                            </div>    
                        ))}
                    </div>
                </div>
                <div className={styles.paginationSwipper}>
                    {props.images.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setStateCarossel(index)}
                            className={`${styles.pageSwipper} ${index === stateCarossel ? styles.activePage : ''}`}>
                        </div>
                    ))}
                </div>
                <FontAwesomeIcon
                    className={styles.prevSwipper}
                    icon={faAngleLeft}
                    onClick={prevCarrossel}
                />
                <FontAwesomeIcon
                    className={styles.nextSwipper}
                    icon={faAngleRight}
                    onClick={nextCarrosel}
                />
            </div>
        </section>
    ) 
}
//Criando componente para card de saiba mais
//title: <string> | Define o titulo do card e o link da página
//image: <image> | Define a imagem de fundo do componente
//alt: <string> | Define o texto do alt da imagem
//alternative: <boolean> | Define a tipagem da estilização do componente

//Importando módulo de estilização
import styles from '../styles/CardSaibaMais.module.scss'

//Importanto componentes necessários
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

//Importando funções utils
import remove_accents from '../utils/remove_accents'

//Definindo e exportanto componente
export default function CardSaibaMais(props) {

    //Substitui todos os espações por hiféns e a tribui a varia´vel
    let linkString = ''
    for (let i = 0; i < props.title.length; i++) {
        const letter = props.title[i];
        linkString += letter !== ' ' ? letter : '-'
    }

    //Remove as marcações de bold da string
    linkString = linkString.replace('-#b', '').replace('-#b', '')

    //Remove os acentos do link
    linkString = remove_accents(linkString)

    //Adiona a barra inicial antes do link inúsculo
    linkString =  '/' + linkString.toLowerCase()

    //Separa o texto para ser colocado em negrito
    let strongWord = props.title.substring(
        props.title.indexOf("#b") + 2, 
        props.title.lastIndexOf("#b")
    );

    //Separa o exto que não deve ter negrito
    let fullTitle = props.title.replace(/#b.*/, '') + " ";
    
    //Retornando JSX do componente
    return (
        <Link href={linkString}>
            <a>
                <div className={styles.card}>
                    <h4 className={styles.title}>{fullTitle} <br /><strong>{strongWord}</strong></h4>
                    <Image
                        src={props.image}
                        className={styles.image}
                        alt={props.alt}
                        placeholder='blur'
                    />
                    <div className={`${styles.areaBtn} ${!props.alternative ? styles.alternative : ""}`}>
                        <Button
                            sizeButton="small"
                            typeButton={!props.alternative ? "principal" : "terceario"}
                            actionButton={() => console.log("Hello world")}
                        >Saiba Mais</Button>
                    </div>
                </div>
            </a>
        </Link>
    )
}
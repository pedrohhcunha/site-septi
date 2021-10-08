import styles from '../styles/CardSaibaMais.module.scss'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'
import { remove_accents } from '../utils/remove_accents'

export default function CardSaibaMais(props) {
    let linkString = ''
    for (let i = 0; i < props.title.length; i++) {
        const letter = props.title[i];
        linkString += letter !== ' ' ? letter : '-'
    }
    linkString = linkString.replace('-#b', '').replace('-#b', '')
    linkString = remove_accents(linkString)
    let link =  '/' + linkString.toLowerCase()

    let strongWord = props.title.substring(
        props.title.indexOf("#b") + 2, 
        props.title.lastIndexOf("#b")
    );

    let fullTitle = props.title.replace(/#b.*/, '') + " ";
    
    return (
        <Link href={link}>
            <a>
                <div className={styles.card}>
                    <h4 className={styles.title}>{fullTitle}<strong>{strongWord}</strong></h4>
                    <Image 
                        src={props.image}
                        className={styles.image}
                        alt={props.alt}
                    />
                    <div className={`${styles.areaBtn} ${!props.alternative ? styles.alternative : ""}`}>
                        <Button
                            sizeButton="small"
                            typeButton={!props.alternative ? "principal" : "secundario"}
                            actionButton={() => console.log("Hello world")}
                        >Saiba Mais</Button>
                    </div>
                </div>
            </a>
        </Link>
    )
}
import styles from '../styles/InicioLinhaProdutos.module.scss'
import Button from './Button'
import Image from 'next/image'

export default function InicioLinhaProdutos(props) {
    return (
        <section className={styles.section}>
            <div className={styles.contentArea}>
                <h1 className={`fonteBranca ${styles.titulo}`}>{props.title}</h1>
                <p className="fonteBranca">{props.description}</p>
                <Button
                    sizeButton="large"
                    typeButton="principal"
                    actionButton={() => console.log("Hello world")}
                >Solicitar Orçamento</Button>
            </div>
            <div className={styles.areaImage}>
                {props.image}
            </div>
        </section>
    )
}
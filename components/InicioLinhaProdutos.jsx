//Criando componente padrão de inicio para a página de linha de produtos
//title: <string> | Define o titulo da linha de produtos
//description: <string> | Define a descrição da linha de produtos
//image: <url> | Define a imagem represetativa da linha de produtos
//modalCompra: <function> | Define a função a ser executada para abrir o modal de compra

//Importando módulo para a estilização do componente
import styles from '../styles/InicioLinhaProdutos.module.scss'

//Importando componentes necessários
import Button from './Button'
import Image from 'next/image'

//Definindo e exportando o componente
export default function InicioLinhaProdutos(props) {
    return (
        <section 
        className={styles.section}>
            <div className={styles.contentArea}>
                <h1 className={`fonteBranca ${styles.titulo}`}>{props.title} <strong className="fonteCoral">Septi</strong> </h1>
                <p className={`fonteBranca ${styles.par}`}>{props.description}</p>
                <Button
                    sizeButton="large"
                    typeButton="principal"
                    actionButton={props.modalCompra}
                    buttonHover
                >Solicitar Orçamento</Button>
            </div>
            <div className={styles.areaImage}>
                <img className={styles.imagePrincipal} src={process.env.NEXT_PUBLIC_LINK + "/images/" + props.image} alt="" />
            </div>
        </section>
    )
}
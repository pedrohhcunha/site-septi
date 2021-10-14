//Criando componente padrão de inicio para a página de linha de produtos
//title: <string> | Define o titulo da linha de produtos
//description: <string> | Define a descrição da linha de produtos
//image: <url> | Define a imagem represetativa da linha de produtos

//Importando módulo para a estilização do componente
import styles from '../styles/InicioLinhaProdutos.module.scss'

//Importando componentes necessários
import Button from './Button'
import Image from 'next/image'

//Definindo e exportando o componente
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
                <Image
                    src={process.env.NEXT_PUBLIC_LINK + "/images/" + props.image}
                    layout="fill"
                    className={styles.imagePrincipal}
                />
            </div>
        </section>
    )
}
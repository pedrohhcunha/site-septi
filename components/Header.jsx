//Criando componente padrão para ser utilizado como header da aplicação
//modalCompra: <function> | Define a função a ser executada para abrir o modal de compra

//Importando modulo de estilizaçãoo
import styles from '../styles/Header.module.scss'

//Importando componentes necessários
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

//Importando imagens a serem utilizaddas
import LogoHorizontal from '../public/images/logo_horizontal.png'

//Importando icone da biblioteca FontAwesomeIcon
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//importando Hooks ncessários
import { useState } from 'react'

//Importando dados necessários
import dataLinhas from '../data-linhas'


//Definindo e exportando o componente
export default function Header (props, {linhas}){

    //Cria um hooks responsavel por armazenar o estado do componented
    const [stateMenu, setStateMenu] = useState(false);

    //Retorna o JSX do componente
    return (
        <header className={styles.header}>
            <Image className={styles.imageHeader} src={LogoHorizontal} alt="Logo Oficial SEPTI HEALTHCARE"></Image>
            <nav className={`${styles.nav} ${stateMenu === true ? styles.active : ''}`} >
                <ul className={`${styles.lista}`}>
                    <li className={styles.itemLista}>
                        <Link href="/">
                            <a className="fonteAzul">A SEPTI</a>
                        </Link>
                    </li>
                    <li className={styles.itemLista}>
                        <div href="/produtos" className={styles.liProdutos}>
                            <span>Produtos</span>
                            <div className={styles.linhas}>
                                <a className="fonteAzul">Aventais para pacientes</a>
                                <a className="fonteAzul">Aventais para isolamento</a>
                                <a className="fonteAzul">Aventais barreira</a>
                                <a className="fonteAzul">Aventais laminados</a>
                                <a className="fonteAzul">Aventais Cirúrgicos</a>
                                <a className="fonteAzul">Máscaras</a>
                                <a className="fonteAzul">Panos e wipers</a>
                                <a className="fonteAzul">Campos e invólucros</a>
                                <a className="fonteAzul">Toucas e propés</a>
                                <a className="fonteAzul">Macacões e conjuntos</a>
                                <a className="fonteAzul">Linha de pápeis</a>
                                <a className="fonteAzul">Correlatos em TNT</a>  
                            </div>
                        </div>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/catalogo">
                            <a className="fonteAzul">Catálogo</a>
                        </Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/trabalhe-conosco">
                            <a className="fonteAzul">Trabalhe Conosco</a>
                        </Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/contato">
                            <a className="fonteAzul">Contato</a>
                        </Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/blog">
                            <a className="fonteAzul">Blog</a>
                        </Link>
                    </li>
                </ul>
                <Button
                    buttonHover
                    sizeButton="small"
                    typeButton="principal"
                    actionButton={props.modalCompra ? props.modalCompra : () => console.log('')}
                >Comprar</Button>
            </nav>
            <div className={styles.backgroundHeader}></div>
            <FontAwesomeIcon onClick={() => setStateMenu(!stateMenu)} className={styles.iconMenu} icon={faBars}/>
        </header>
    )
}

export async function getStaticProps() {
    let linhas = dataLinhas.map(linha => {
        return {
            titulo: linha.title,
            link: removeSpaces(removeAccents(linha.title)).toLowerCase()
        }
    })
    
    return { 
        props: {
            linhas,
        }
    }
}
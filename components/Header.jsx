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
                        <div className={styles.liProdutos}>
                            <span>Produtos</span>
                            <div className={styles.linhas}>
                                <Link href="aventais-para-pacientes">
                                    <a className="fonteAzul">Aventais para pacientes</a>
                                </Link>
                                <Link href="aventais-para-isolamento">
                                    <a className="fonteAzul">Aventais para isolamento</a>
                                </Link>
                                <Link href="aventais-barreira">
                                    <a className="fonteAzul">Aventais barreira</a>
                                </Link>
                                <Link href="aventais-laminados">
                                    <a className="fonteAzul">Aventais laminados</a>
                                </Link>
                                <Link href="aventais-cirurgico">
                                    <a className="fonteAzul">Aventais cirúrgicos</a>
                                </Link>
                                <Link href="mascaras">
                                    <a className="fonteAzul">Máscaras</a>
                                </Link>
                                <Link href="panos-e-wipers">
                                    <a className="fonteAzul">Panos e wipers</a>
                                </Link>
                                <Link href="campos-e-involucros">
                                    <a className="fonteAzul">Campos e invólucros</a>
                                </Link>
                                <Link href="toucas-e-propes">
                                    <a className="fonteAzul">Toucas e propés</a>
                                </Link>
                                <Link href="macacoes-e-conjuntos">
                                    <a className="fonteAzul">Macacões e conjuntos</a>
                                </Link>
                                <Link href="linha-de-papeis">
                                    <a className="fonteAzul">Linha de pápeis</a>
                                </Link>
                                <Link href="correlatos-em-tnt">
                                    <a className="fonteAzul">Correlatos em TNT</a>
                                </Link>
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
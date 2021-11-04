//Criando componente padrão para ser utilizado como header da aplicação
//modalCompra: <function> | Define a função a ser executada para abrir o modal de compra

//Importando modulo de estilizaçãoo
import styles from '../styles/Header.module.scss'

//Importando componentes necessários
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

//Importando imagens a serem utilizaddas
import LogoHorizontal from '../public/images/logo_horizontal.png'

//Importando icone da biblioteca FontAwesomeIcon
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//importando Hooks ncessários
import { useState } from 'react'

//Importando dados necessários
import dataLinhas from '../data/data-linhas'


//Definindo e exportando o componente
export default function Header (props, {linhas}){

    //Cria um hooks responsavel por armazenar o estado do componented
    const [stateMenu, setStateMenu] = useState(false);

    //Retorna o JSX do componente
    return (
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <Image className={styles.imageHeader} src={LogoHorizontal} alt="Logo Oficial SEPTI HEALTHCARE"></Image>
                </a>
            </Link>
            <nav className={`${styles.nav} ${stateMenu === true ? styles.active : ''}`} >
                <ul className={`${styles.lista}`}>
                    <li className={styles.itemLista}>
                        <Link href="/">
                            <a className="fonteAzul">A Septi</a>
                        </Link>
                    </li>
                    <li className={styles.itemLista}>
                        <div className={styles.liProdutos}>
                            <Link href="/#produtos">
                                <a onClick={() => setStateMenu(!stateMenu)}>Produtos</a>
                            </Link>
                            <div className={styles.linhas}>
                                <Link href="aventais-para-pacientes">
                                    <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Aventais para pacientes</a>
                                </Link>
                                <Link href="aventais-para-isolamento">
                                    <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Aventais para isolamento</a>
                                </Link>
                                <Link href="aventais-barreira">
                                    <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Aventais barreira</a>
                                </Link>
                                <Link href="aventais-laminados">
                                    <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Aventais laminados</a>
                                </Link>
                                <Link href="aventais-cirurgicos">
                                    <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Aventais cirúrgicos</a>
                                </Link>
                                <Link href="mascaras">
                                    <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Máscaras</a>
                                </Link>
                                <Link href="panos-e-wipers">
                                    <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Panos e wipers</a>
                                </Link>
                                <Link href="campos-e-involucros">
                                    <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Campos e invólucros</a>
                                </Link>
                                <Link href="toucas-e-propes">
                                    <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Toucas e propés</a>
                                </Link>
                                <Link href="macacoes-e-conjuntos">
                                    <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Macacões e conjuntos</a>
                                </Link>
                                <Link href="linha-de-papeis">
                                    <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Linha de pápeis</a>
                                </Link>
                                <Link href="correlatos-em-tnt">
                                    <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Correlatos em TNT</a>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/catalogo">
                            <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Catálogo</a>
                        </Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/trabalhe-conosco">
                            <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Trabalhe Conosco</a>
                        </Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/contato">
                            <a onClick={() => setStateMenu(!stateMenu)} className="fonteAzul">Contato</a>
                        </Link>
                    </li>
                </ul>
                <Button
                    buttonHover
                    sizeButton="small"
                    typeButton="principal"
                    actionButton={props.modalCompra ? props.modalCompra : () => console.log('')}
                >Comprar agora</Button>
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
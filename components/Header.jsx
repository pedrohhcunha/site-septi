import styles from '../styles/Header.module.scss'
import Image from 'next/image'
import LogoHorizontal from '../public/images/logo_horizontal.png'
import Button from './Button'
import Link from 'next/link'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Header (){

    const [stateMenu, setStateMenu] = useState(false);
    console.log(stateMenu)
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
                        <Link href="/produtos">
                            <a className="fonteAzul">Produtos</a>
                        </Link>
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
                    actionButton={() => console.log("Hello world")}
                >Comprar</Button>
            </nav>
            <div className={styles.backgroundHeader}></div>
            <FontAwesomeIcon onClick={() => setStateMenu(!stateMenu)} className={styles.iconMenu} icon={faBars}/>
        </header>
    )
}
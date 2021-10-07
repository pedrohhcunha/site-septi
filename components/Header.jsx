import styles from '../styles/Header.module.scss'
import Image from 'next/image'
import LogoHorizontal from '../public/images/logo_horizontal.png'
import Button from './Button'
import Link from 'next/link'
export default function Header (){
    return (
        <header className={styles.header}>
            <Image src={LogoHorizontal}></Image>
            <nav className={styles.nav}>
                <ul className={styles.lista}>
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
                >Solicitar Orçamento</Button>
            </nav>
        </header>
    )
}
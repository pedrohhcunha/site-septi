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
                        <a className="fonteAzul" href="#">Produtos</a>
                    </li>
                    <li className={styles.itemLista}>
                        <a className="fonteAzul" href="#">Catálogo</a>
                    </li>
                    <li className={styles.itemLista}>
                        <a className="fonteAzul" href="#">Trabalhe Conosco</a>
                    </li>
                    <li className={styles.itemLista}>
                        <a className="fonteAzul" href="#">Contato</a>
                    </li>
                    <li className={styles.itemLista}>
                        <a className="fonteAzul" href="#">Blog</a>
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
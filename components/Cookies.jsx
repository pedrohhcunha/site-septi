import styles from '../styles/Cookies.module.scss'

import Button from './Button'
import LogoHorizontal from '../public/images/logo_horizontal_branca.png'
import Image from 'next/image'

export default function Cookies(props) {
    return(
        <aside className={`${styles.aside} ${props.isActive ? styles.active : ''}`}>
            <div className={styles.areaImage}>
                <Image alt="Logo Oficial da SEPTI HEALTHCARE" src={LogoHorizontal}></Image>
            </div>
            <p className={styles.par}>Para melhorar a sua expêriencia em nosso site, <strong>nós usamos cookies.</strong> Aceite-os e continue  <strong>navegando normalmente.</strong></p>
            <div className={styles.btns}>
            <Button
                sizeButton="medium"
                typeButton={"principal"}
                buttonHover
                actionButton={() => props.acceptFunction()}
            >Sim, eu aceito</Button>
            </div>
        </aside>
    )
}
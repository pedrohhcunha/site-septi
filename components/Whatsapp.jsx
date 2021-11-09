import styles from '../styles/Whatsapp.module.scss'

import Image from 'next/image'
import whatsappImage from '../public/images/whats.png'

export default function Whatsapp(props) {
    return(
        <div className={styles.areaImage}>
            <a href="https://wa.me/551123210217" target="__blank">
                <Image src={whatsappImage} alt={"Imagem do whatsapp"} layout="fill"/>
            </a>
        </div>
    )
}
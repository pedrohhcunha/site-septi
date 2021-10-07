import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import LogoHorizontal from '../public/images/logo_horizontal_branca.png'
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer (){
    return (
        <footer>
            <div className={styles.subFooter}>
                <div className={`${styles.areaImage} ${styles.areaInfo}`}>
                    <Image src={LogoHorizontal}></Image>
                </div>
                <div className={styles.areaInfo}>
                    <p className={`${styles.paragrafo} fonteBranca`}>
                        <strong>Endereço</strong> <br/>
                        Av. Ipê Amarelo 886, <br/>
                        Bairro Exoansão Urana, <br/>
                        Loteamento Mezano <br/>
                        Guatambu - SC
                    </p>
                </div>
                <div className={styles.areaInfo}>
                    <p className={`${styles.paragrafo} fonteBranca`}>
                        <strong>Contato</strong> <br/>
                        Telefone: (49) 3328-6615, <br/>
                        septi@azeplast.com.br, <br/>
                        comercial@septi.com.br
                    </p>
                </div>
                <div className={styles.areaInfo}>
                    <p><strong className="fonteBranca">Redes Sociais</strong></p>
                    <div className={styles.listaRedes}>
                        <div className={styles.itemListaRedes}>
                            <a href="">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                        <div className={styles.itemListaRedes}>
                            <a href="">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                        <div className={styles.itemListaRedes}>
                            <a href="">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                        <div className={styles.itemListaRedes}>
                            <a href="">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.superFooter}>
                Todos os direitos reservados. SEPTI 2021 | (11) 2321-0217 | comercial@septi.life
            </div>
        </footer>
    )
}
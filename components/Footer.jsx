//Criação do componente de footer que deverá ser chamado em todas as páginas da aplicação

//Importando módulo para a estiização
import styles from '../styles/Footer.module.scss'

//Importando componentes necessários
import Image from 'next/image'

//Importando imagens a serem utilizaddas
import LogoHorizontal from '../public/images/logo_horizontal_branca.png'

//Importando icones da biblioteca FontAwesomeIcon
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer (){
    return (
        <footer>
            <div className={styles.subFooter}>
                <div className={`${styles.areaImage} ${styles.areaInfo}`}>
                    <Image alt="Logo Oficial da SEPTI HEALTHCARE" src={LogoHorizontal}></Image>
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
                            <a target="__blank" href="https://www.facebook.com/septihealthcare">
                                <FontAwesomeIcon className={styles.iconListaRedes} icon={faFacebook} />
                            </a>
                        </div>
                        <div className={styles.itemListaRedes}>
                            <a target="__blank" href="https://www.instagram.com/septi_hc/">
                                <FontAwesomeIcon className={styles.iconListaRedes} icon={faInstagram} />
                            </a>
                        </div>
                        <div className={styles.itemListaRedes}>
                            <a target="__blank" href="https://www.linkedin.com/company/septiheathcare">
                                <FontAwesomeIcon className={styles.iconListaRedes} icon={faLinkedin} />
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
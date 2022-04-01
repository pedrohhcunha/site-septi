//Criação do componente de footer que deverá ser chamado em todas as páginas da aplicação

//Importando módulo para a estiização
import styles from '../styles/Footer.module.scss'

//Importando componentes necessários
import Image from 'next/image'

//Importando imagens a serem utilizaddas
import LogoHorizontal from '../public/images/logo_horizontal_branca.png'

//Importando icones da biblioteca FontAwesomeIcon
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Definindo e exportando o componente
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
                        Septi Indústria e Comércio LTDA  <br/>
                        Endereço: Avenida Ipê Amarelo, <br/>
                        886 – Guatambu – SC, CEP: 89817-000
                    </p>
                </div>
                <div className={styles.areaInfo}>
                    <p className={`${styles.paragrafo} fonteBranca`}>
                        <strong>Contato</strong> <br/>
                        Telefone: (11) 2321-0217 <br/>
                        comercial@septi.com.br
                    </p>
                </div>
                <div className={styles.areaInfo}>
                    <p><strong className="fonteBranca">Redes Sociais</strong></p>
                    <div className={styles.listaRedes}>
                        <div className={styles.itemListaRedes}>
                            <a aria-label="Linkedin SEPTI" target="__blank" href="https://www.linkedin.com/company/septiheathcare">
                                <FontAwesomeIcon className={styles.iconListaRedes} icon={faLinkedin} />
                            </a>
                        </div>
                        <div className={styles.itemListaRedes}>
                            <a aria-label="Facrbook SEPTI" target="__blank" href="https://www.facebook.com/septihealthcare">
                                <FontAwesomeIcon className={styles.iconListaRedes} icon={faFacebook} />
                            </a>
                        </div>
                        <div className={styles.itemListaRedes}>
                            <a aria-label="Instagram SEPTI" target="__blank" href="https://www.instagram.com/septi_hc/">
                                <FontAwesomeIcon className={styles.iconListaRedes} icon={faInstagram} />
                            </a>
                        </div>
                        <div className={styles.itemListaRedes}>
                            <a aria-label='Youtube SEPTI' target="__blank" href="https://www.youtube.com/channel/UCzRncq6ymlv_0kMEiZujW2w">
                                <FontAwesomeIcon className={styles.iconListaRedes} icon={faYoutube} />
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
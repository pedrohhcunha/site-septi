import styles from '../styles/Whatsapp.module.scss'

import Image from 'next/image'
import whatsappImage from '../public/images/whats.png'

export default function Whatsapp(props) {

    function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-10785925011/NcxECPyw_4MDEJPPkJco',
            'event_callback': callback
        });
        return false;
    }
    return(
        <div onClick={gtag_report_conversion} className={styles.areaImage}>
            <a id="botao" href="https://wa.me/551123210217" target="__blank">
                <Image src={whatsappImage} alt={"Imagem do whatsapp"} layout="fill"/>
            </a>
        </div>
    )
}
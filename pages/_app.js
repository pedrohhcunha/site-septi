//Definido o app -> Primeiro arquivo que será executado

//Importando o arquivo de estilização global
import '../styles/globals.scss'
import Cookies from '../components/Cookies'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Whatsapp from '../components/Whatsapp';

//Criando e exportanto o componente inicial da aplicação
export default function MyApp({ Component, pageProps }) {

  const [cookieModal, setCookieModal] = useState(false);

  useEffect(() => {
      setTimeout(() => {
        let cookie = localStorage.getItem('cookie_accept')
        if (cookie) {
          setCookieModal(false)
        } else {
          setCookieModal(true)
        }
      }, 5000);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_accept', '1')
    setCookieModal(false)
  }

  return (
    <>
      <Head>
        <meta name="description" content="A septi é uma industria onde fabricamos e comercializamos EPIs, descartáveis e hospitalares, voltados para a paramentação segura em procedimentos cirúrgicos." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10785925011"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-10785925011');
        `}}></script>
      </Head>
      <Cookies acceptFunction={acceptCookies} isActive={cookieModal} />
      <Whatsapp />
      <Component {...pageProps} />
    </>
  )
}
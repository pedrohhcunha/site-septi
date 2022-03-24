//Definido o app -> Primeiro arquivo que será executado

//Importando o arquivo de estilização global
import '../styles/globals.scss'
import Cookies from '../components/Cookies'
import { useEffect, useState } from 'react'
import Head from 'next/head'
//Criando e exportanto o componente inicial da aplicação
export default function MyApp({ Component, pageProps }) {

  const [cookieModal, setCookieModal] = useState(false);

  useEffect(() => {
    if(window.location.href.includes("septi.netlify.app")){
      window.location.href = "https://septi.life/"
    }
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
        <script dangerouslySetInnerHTML={{__html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'UA-172963821-1');
        `}}></script>
        <script dangerouslySetInnerHTML={{__html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2757247,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}}></script>
      </Head>
      <Cookies acceptFunction={acceptCookies} isActive={cookieModal} />
      <Component {...pageProps} />
    </>
  ) 
}
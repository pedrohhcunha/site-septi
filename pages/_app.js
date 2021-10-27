//Definido o app -> Primeiro arquivo que será executado

//Importando o arquivo de estilização global
import '../styles/globals.scss'
import Cookies from '../components/Cookies'
import { useEffect, useState } from 'react'

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
      <Cookies acceptFunction={acceptCookies} isActive={cookieModal} />
      <Component {...pageProps} />
    </>
  )
}
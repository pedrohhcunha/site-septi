//Definido o app -> Primeiro arquivo que será executado

//Importando o arquivo de estilização global
import '../styles/globals.scss'


//Criando e exportanto o componente inicial da aplicação
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
//Definindo componente padrão para a utilização de botões

//actionButton: <function> or <url> | Define a função a ser executada
//sizeButton: <string> -> "small" or "medium" or "large" | Define o tamanho do botão
//typeButton: <string> -> "principal" or "secundario" | Define a tipagem do botão
//buttonHover: <boolean> | Define se o botão terpa ou não animação de hover
//Children: <reactComponent> // Define o conteúdo do botão

//Importando modulo para a estilização do componente
import styles from '../styles/Button.module.scss'

//Importando componentes necessários
import Link from 'next/link'

//Criando e exportando o componente
export default function Button (props){

  //Se uma função for passada como action do botão executa o código a seguir
  if(typeof props.actionButton === "function"){

    //Retorna o JSX do botão com uma função onClick 
    return (
      <button
        onClick={props.actionButton}
        className={`
          ${styles.button}
          ${props.sizeButton === "small" ? styles.buttonSmall : props.sizeButton === "medium" ? styles.buttonMedium : styles.buttonLarge}
          ${props.typeButton === "principal" ? styles.buttonPrincipal : styles.buttonSecundario}
          ${props.buttonHover ? styles.buttonHover : ''}
        `}>
        {props.children}
      </button>
    )
  } 
  //Se uma url for passada coomo action do botão executa o código a seguir
  else if (typeof props.actionButton === "string") {

    //Retorna o JSX de um Link com o href do link passado como prop
    return (
      <Link href={props.actionButton}>
        <a
          className={`
          ${styles.button}
          ${props.sizeButton === "small" ? styles.buttonSmall : props.sizeButton === "medium" ? styles.buttonMedium : styles.buttonLarge}
          ${props.typeButton === "principal" ? styles.buttonPrincipal : styles.buttonSecundario}
          ${props.buttonHover ? styles.buttonHover : ''}
        `}>
        {props.children}
        </a>
      </Link>
    )
  }
}
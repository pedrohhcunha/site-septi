import styles from '../styles/Button.module.scss'
import Link from 'next/link'

export default function Button (props){
  if(typeof props.actionButton === "function"){
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
  } else if (typeof props.actionButton === "string") {
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
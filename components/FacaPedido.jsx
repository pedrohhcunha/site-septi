//Criação do componente da seção de Faça Seu Pedido
//modalCompra: <function> | Define a função a ser executada para abrir o modal de compra

//Importando componentes necessários
import Button from './Button'

//Importando módulo para realizar a estilização do componente
import styles from '../styles/FacaPedido.module.scss'

//Definindo e exportando o componente
export default function FacaPedido(props){
  return (
    <section className={styles.section}>
      <h2 className="fonteAzul">Faça seu pedido</h2>
      <p className={styles.paragrafo}>Seja qual for a sua necessidade, não deixe de nos consultar!<br/>Estamos aqui para encontrar a melhor solução para a sua demanda.</p>
      <Button
        buttonHover
        sizeButton="large"
        typeButton="principal"
        actionButton={props.modalCompra}
      >Solicitar Orçamento</Button>
    </section>
  )
}
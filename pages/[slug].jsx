//Criando página padrão para as linhas de produtos
//title: <string> | Define o titulo da linha de produtos
//description: <string> | Define o descrição da linha de produtos
//image: <url> | Define a imagem princiapl da linha de produtos
//produtos: <list[object[title: <string>, description: <string>, images: <list[url]>]]> | Define os dados dos produtos a serem apresentados
//diferenciais: <list[object[title: <string>, description: <string>, icon: <url>]]> / Define os dados dos diferenciais da linha de produtos
//perguntas: <list[object[pergunta: <string>, resposta: <string>]]> | Define as perguntas e respostas presentes no FAQ da linha de produtos

//Importando componentes necessários
import Clientes from '../components/Clientes'
import Diferenciais from '../components/Diferenciais'
import FacaPedido from '../components/FacaPedido'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import FormContato from '../components/FormContato'
import FormFicha from '../components/FormFicha'
import Head from 'next/head'
import Header from '../components/Header'
import InicioLinhaProdutos from '../components/InicioLinhaProdutos'
import Modal from '../components/Modal'
import Produto from '../components/Produto'
import Whatsapp from '../components/Whatsapp'

//Importando dados necessários
import dataLinhas from '../data/data-linhas'

//Importando funções necessárias
import removeAccents from '../utils/remove_accents'
import removeSpaces from '../utils/remove_spaces'

//Importando hooks necessários
import { useState, useEffect } from 'react'

import styles from '../styles/linha.module.scss'

//Definindo e exportando o componente
export default function LinhaProduto(props) {
  
  const [stateModalFicha, setStateModalFicha] = useState(false);
  const [stateModalCompra, setStateModalCompra] = useState(false);

  //Bloquendo scroll quando o modal estiver aberto
  useEffect(() => {
    if(stateModalCompra || stateModalFicha){
      document.querySelector('body').style.overflow = 'hidden'
    } else {
      document.querySelector('body').style.overflow = 'auto'
    }
  }, [stateModalCompra, stateModalFicha]);
  
  const [tagConversao, setTagConversao] = useState("");
  
  return(
    <>

    <Head>
      <title>{`${props.title} | SEPTI Healthcare`}</title>
      <meta name="description" content={props.description} />
    </Head>

      {/* Modal para ficha técnica */}
      <Modal
        isOpen={stateModalFicha}
        closeModal={() => setStateModalFicha(false)}
      >
        <FormFicha tag={tagConversao} />
      </Modal>

      {/* Modal para compra */}
      <Modal
        isOpen={stateModalCompra}
        closeModal={() => setStateModalCompra(false)}
      >
        <FormContato />
      </Modal>

      <Header 
        modalCompra={() => setStateModalCompra(true)}
      />

      <InicioLinhaProdutos 
        title={props.title}
        description={props.description}
        image={props.image}
        modalCompra={() => setStateModalCompra(true)}
      />

      {props.produtos.map((produto, index) => (
        <>
        <Produto
          key={index}
          alternative={index % 2 === 0 ? true : false}
          title={produto.title}
          datasheet={produto.datasheet}
          description={produto.description}
          images={produto.images}
          modalFicha={() => {
            setTagConversao(produto.tag)
            setStateModalFicha(true)
          }}
          modalCompra={() => setStateModalCompra(true)}
        />
        <div className={`${styles.hr} ${index === props.produtos.length - 1 ? styles.last : ''}`}></div>
        </>
      ))}
      <Diferenciais
        hideTitle
        diferenciais={props.diferenciais}
      />
      <Faq 
        perguntas={props.perguntas}
      />
      <Clientes />
      <FacaPedido
          modalCompra={() => setStateModalCompra(true)}
      />
      <Footer />
      <Whatsapp />
    </>
  )
}

export async function getStaticPaths(){

  const paths = dataLinhas.map(linha => ({
    params: { slug: removeSpaces(removeAccents(linha.title)).toLowerCase() },
  }))

  console.log("Paths->", paths)
  return {paths, fallback: false}
}

export function getStaticProps(context){
  console.log("Context->", context)
  let linhaAtual = {}
  dataLinhas.map(linha => {
    if(removeSpaces(removeAccents(linha.title)).toLowerCase()  === context.params.slug){
      linhaAtual = {
        props: linha
      }
      return 0
    }
  })
  console.log("isso vai pro props", linhaAtual)

  return linhaAtual

}
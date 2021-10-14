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
import Header from '../components/Header'
import InicioLinhaProdutos from '../components/InicioLinhaProdutos'
import Produto from '../components/Produto'
import Modal from '../components/Modal'
import Head from 'next/head'

//Importando hooks necessários
import { useState, useEffect } from 'react'

//Definindo e exportando o componente
export default function linhaProduto(props) {

  const [stateModalFicha, setStateModalFicha] = useState(false);
  const [stateModalCompra, setStateModalCompra] = useState(false);

  return(
    <>

    <Head>
      <script
        type="text/javascript"
        src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js">
      </script>
      <script
        type="text/javascript">
          new RDStationForms('formulario-de-qualificacao-septi-3bec9395835fd61e1458', 'UA-172963821-1').createForm();
      </script>
    </Head>

      {/* Modal para fichpa técnica */}
      <Modal
        isOpen={stateModalFicha}
        closeModal={() => setStateModalFicha(false)}
      >
        Modal Pedir Ficha Técnica
      </Modal>

      {/* Modal para compra */}
      <Modal
        isOpen={stateModalCompra}
        closeModal={() => setStateModalCompra(false)}
      >
        <div role="main" id="formulario-de-qualificacao-septi-3bec9395835fd61e1458"></div>
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
        <Produto
          key={index}
          alternative={index % 2 === 0 ? true : false}
          title={produto.title}
          description={produto.description}
          images={produto.images}
          modalFicha={() => setStateModalFicha(true)}
          modalCompra={() => setStateModalCompra(true)}
        />
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
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      title: "Titulo da linha",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem est cum eaque velit cumque quos eius voluptas nobis veniam culpa ullam iusto, veritatis blanditiis ea nam deserunt itaque, reiciendis a.",
      image: 'linha1.png',
      produtos: [
        {
          title: "titulo do produto",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis ex non cum, placeat delectus magni quo tempora sed et ut quidem, molestiae deleniti voluptatibus laborum laudantium cupiditate. Illo, iusto.",
          images: [
            'linha1.png',
            'linha1.png',
            'linha1.png',
          ]
        },
        {
          title: "titulo do produto",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis ex non cum, placeat delectus magni quo tempora sed et ut quidem, molestiae deleniti voluptatibus laborum laudantium cupiditate. Illo, iusto.",
          images: [
            'linha1.png',
            'linha1.png',
            'linha1.png',
          ]
        }
      ],
      diferenciais: [
        {
          title: "titulo do diferencial",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis ex non cum.",
          icon: "https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg"
        },
        {
          title: "titulo do diferencial",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis ex non cum.",
          icon: "https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg"
        },
        {
          title: "titulo do diferencial",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis ex non cum.",
          icon: "https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg"
        }
      ],
      perguntas: [
        {
          pergunta: "a pergunta?",
          resposta: "a resposta!"
        },
        {
          pergunta: "a pergunta?",
          resposta: "a resposta!"
        },
        {
          pergunta: "a pergunta?",
          resposta: "a resposta!"
        },
        {
          pergunta: "a pergunta?",
          resposta: "a resposta!"
        },
      ]
    }
  }
}
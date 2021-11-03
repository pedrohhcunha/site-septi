
//Importando o modulo para a estilização da página
import styles from '../styles/Home.module.scss'

//Importando componetentes utilizados na página
import Button from '../components/Button'
import CardSaibaMais from '../components/CardSaibaMais'
import Clientes from '../components/Clientes'
import Diferenciais from '../components/Diferenciais'
import FacaPedido from '../components/FacaPedido'
import Footer from '../components/Footer'
import FormContato from '../components/FormContato'
import Modal from '../components/Modal'
import Header from '../components/Header'
import Head from 'next/head'
import Typewriter from "typewriter-effect";

//Importando as imagens utilizadas na página
import AventalBarreira from '../public/images/linhas/AventalBarreira.png'
import AventalCirurgico from '../public/images/linhas/AventalCirurgicos.png'
import AventalIsolamento from '../public/images/linhas/AventalIsolamento.png'
import AventalLaminado from '../public/images/linhas/AventalLaminado.png'
import AventalPaciente from '../public/images/linhas/AventalPaciente.png'
import CamposInvolucros from '../public/images/linhas/CamposInvolucros.png'
import Papeis from '../public/images/linhas/Papeis.png'
import MacacaoLaminado from '../public/images/linhas/MacacaoLaminado.png'
import Mascara from '../public/images/linhas/Mascara.png'
import PanosLimpeza from '../public/images/linhas/PanosLimpeza.png'
import ToucasPropes from '../public/images/linhas/ToucasPropes.png'
import CorrelatosTNT from '../public/images/linhas/CorrelatosTNT.jpg'

//Importando hooks necessários
import { useEffect, useState, useCallback } from 'react'

//Criando o componente da página inicial
export default function Home() {

  //Controla o estado do modal de compra
  const [stateModalCompra, setStateModalCompra] = useState(false);
  const [orderAlternative, setOrderAlternative] = useState([
    false, 
    false, 
    false, 
    true, 
    true, 
    true,
    false,
    false,
    false,
    true,
    true,
    true
  ])

  //Bloquendo scroll quando o modal estiver aberto
  useEffect(() => {
    if(stateModalCompra){
      document.querySelector('body').style.overflow = 'hidden'
    } else {
      document.querySelector('body').style.overflow = 'auto'
    }
  }, [stateModalCompra]);

  useEffect(() => {
    // Define o padrão de cor dos cards abaixo //
    if(window.innerWidth < 1275){
      setOrderAlternative([
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true
      ])
    }

    if(window.innerWidth < 667){
      setOrderAlternative([
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true
      ])
    }
  }, [])

  //Define a lista com os diferenciais da SEPTI
  const diferenciais = [
    {
      title: 'Compromisso de ponta a ponta',
      description: 'Investimos na alta tecnologia, no desenvolvimento de produtos e qualidade no atendimento. Isso tudo com mais de 15 anos de experiência no segmento healthcare.',
      icon: '/images/Icones/CompromissoPontaPonta.png'
    },
    {
      title: 'Proteção com mais conforto',
      description: 'Além da segurança, é importante ter conforto. Por isso, pensamos em cada detalhe para proporcionar a melhor usabilidade com o máximo conforto e proteção.',
      icon: '/images/Icones/ProtecaoMaisConforto.png'
    },
    {
      title: 'Capacidade de inovação',
      description: 'Com amplo know-how para investir em produtos de alta qualidade, buscamos diariamente entender as necessidades dos nossos clientes e atendê-las na medida certa.',
      icon: '/images/Icones/CapacidadeInovacao.png'
    }
  ]

  //Retornando o JSX da página Inicial
  return (
    <>

      {/* Definindo as metatags da página */}
      <Head>
        <title>A SEPTI | SEPTI Healthcare</title>
      </Head>

      {/* Modal para compra */}
      <Modal
        isOpen={stateModalCompra}
        closeModal={() => setStateModalCompra(false)}
      >
        <FormContato />
      </Modal>

      {/* Instanciando o componente do Header */}
      <Header 
        modalCompra={() => setStateModalCompra(true)}
      />

      {/* Criando a seção de inicio do site */}
      <section className={styles.sectionInicio}>
        <div className={styles.contentInicio}>
          <h1 className="fonteBranca">
            Septi é <span className="fonteCoral">+</span> <br/>
            qualidade e <br/>
            segurança em <br/>
            <span className="fonteCoral">
            <Typewriter  
              options={
                {
                  loop: true
                }
              }   
              onInit={(typewriter)=> {
                
                typewriter
                .typeString("Descartáveis")
                .pauseFor(1000)
                .deleteAll()
                .typeString("EPIs")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Máscaras")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Aventais")
                .pauseFor(1000)
                .start()
              }}
            /></span>
          </h1>
          <Button
            buttonHover
            sizeButton="large"
            typeButton="principal"
            actionButton={() => setStateModalCompra(true)}
          >Conheça nossos produtos </Button>
        </div>
      </section>
    
      {/* Criando a seção do video */}
      <section className={styles.sectionVideo}>
        <img src="/images/Video.jpg" className={styles.iframe} />
        <div className={styles.contentVideo}>
          <h2 className="fonteAzul">Alto padrão que <br/> a saúde merece</h2>
          <p className={`fonteAzul ${styles.paragrafoVideo}`}>Desenvolvemos e comercializamos produtos descartáveis       voltados para a paramentação segura em procedimentos cirúrgicos, ambulatoriais, assistenciais e de diagnósticos. Nossas soluções seguem rigorosamente a legislação vigente – ABNT e ANVISA.</p>
          
          <Button
            buttonHover
            sizeButton="large"
            typeButton="principal"
            actionButton={() => setStateModalCompra(true)}
          >Conheça nossas soluções</Button>
        </div>
      </section>

      {/* Instanciando o componente de Diferenciais */}
      <Diferenciais diferenciais={diferenciais}/>

      {/* Criando a seção de produtos */}
      <section id="produtos" className={styles.sectionProdutos}>
        <h2 className="fonteAzul">Nossas soluções</h2>
        <div className={styles.produtos}>
          <CardSaibaMais
            alternative={orderAlternative[0]}
            alt="Aventais para pacientes SEPTI SEPTI HEALTHCARE"
            title="Aventais para #b pacientes #b"
            image={AventalPaciente}
          />

          <CardSaibaMais
            alternative={orderAlternative[1]}
            alt="Aventais para isolamento SEPTI HEALTHCARE"
            title="Aventais para #b isolamento #b"
            image={AventalIsolamento}
          />

          <CardSaibaMais
            alternative={orderAlternative[2]}
            alt="Aventais de barreira SEPTI HEALTHCARE"
            title="Aventais #b barreira #b"
            image={AventalBarreira}
          />
          <CardSaibaMais
            alternative={orderAlternative[3]}
            alt="Aventais laminados SEPTI HEALTHCARE"
            title="Aventais #b laminados #b"
            image={AventalLaminado}
          />
          <CardSaibaMais
            alternative={orderAlternative[4]}
            alt="Aventais cirúrgicos SEPTI HEALTHCARE"
            title="Aventais #b cirúrgicos #b"
            image={AventalCirurgico}
          />
          <CardSaibaMais
            alternative={orderAlternative[5]}
            alt="Linha de máscaras SEPTI HEALTHCARE"
            title=" #bMáscaras #b"
            image={Mascara}
          />
          <CardSaibaMais
            alternative={orderAlternative[6]}
            alt="Panos e Wipers SEPTI HEALTHCARE"
            title="Panos e #b Wipers #b"
            image={PanosLimpeza}
          />
          <CardSaibaMais
            alternative={orderAlternative[7]}
            alt="Campos e invólucros SEPTI HEALTHCARE"
            title="Campos e #b invólucros #b"
            image={CamposInvolucros}
          />
          <CardSaibaMais
            alternative={orderAlternative[8]}
            alt="Toucas e propés SEPTI HEALTHCARE" 
            title="Toucas e #b propés #b"
            image={ToucasPropes}
          />
          <CardSaibaMais 
          alternative={orderAlternative[9]}
            alt="Macacões e conjuntos SEPTI HEALTHCARE"
            title="Macacões e #b conjuntos #b"
            image={MacacaoLaminado}
          />
          <CardSaibaMais
            alternative={orderAlternative[10]}
            alt="Linha de papéis SEPTI HEALTHCARE"
            title="#b Papéis #b"
            image={Papeis}
          />
          <CardSaibaMais
            alternative={orderAlternative[11]}
            alt="Correlatos em TNT SEPTI HEALTHCARE" 
            title="Correlatos em #b TNT #b"
            image={CorrelatosTNT}
          />
        </div>
      </section>

      {/* Instanciando o componente de Clientes */}
      <Clientes />

      {/* Instanciando o componente de Faça Seu Pedido */}
      <FacaPedido
        modalCompra={() => setStateModalCompra(true)}
      />

      {/* Instanciando o componente de Rodapé */}
      <Footer />
    </>
  )
}

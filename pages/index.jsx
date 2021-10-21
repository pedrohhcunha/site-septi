
//Importando o modulo para a estilização da página
import styles from '../styles/Home.module.scss'

//IMportando componetentes utilizados na página
import Header from '../components/Header'
import Footer from '../components/Footer'
import FacaPedido from '../components/FacaPedido'
import Clientes from '../components/Clientes'
import CardSaibaMais from '../components/CardSaibaMais'
import Diferenciais from '../components/Diferenciais'
import Button from '../components/Button'
import Head from 'next/head'
import Modal from '../components/Modal'
import FormContato from '../components/FormContato'

//Importando as imagens utilizadas na página
import placeholder from '../public/images/profile.png'
import AventalBarreira from '../public/images/linhas/AventalBarreira.png'
import AventalCirurgico from '../public/images/linhas/AventalCirurgicos.png'
import AventalIsolamento from '../public/images/linhas/AventalIsolamento.png'
import AventalLaminado from '../public/images/linhas/AventalLaminado.png'
import AventalPaciente from '../public/images/linhas/AventalPaciente.png'
import CamposInvolucros from '../public/images/linhas/CamposInvolucros.jpg'
import CorrelatosTNT from '../public/images/linhas/CorrelatosTNT.jpg'
import Papeis from '../public/images/linhas/Papeis.png'
import MacacaoLaminado from '../public/images/linhas/MacacaoLaminado.png'
import Mascara from '../public/images/linhas/Mascara.png'
import PanosLimpeza from '../public/images/linhas/PanosLimpeza.png'
import ToucasPropes from '../public/images/linhas/ToucasPropes.png'

//Importando hooks necessários
import { useState } from 'react'

//Criando o componente da página inicial
export default function Home() {

  const [stateModalCompra, setStateModalCompra] = useState(false);

  const diferenciais = [
    {
      title: 'Compromisso de ponta a ponta',
      description: 'Investimos no desenvolvimento de produtos de alta tecnologia e possuímos estrutura própria de logística e atendimento, com mais de 15 anos de experiência no segmento healthcare.',
      icon: '/images/Icones/CompromissoPontaPonta.png'
    },
    {
      title: 'Proteção com mais conforto',
      description: 'Quem conhece as rotinas de médicos, enfermeiros, demais profissionais da saúde e pacientes, entende que, além da segurança, é importante ter conforto. Por isso, pensamos nos detalhes para proporcionar o máximo conforto e proteção com a melhor usabilidade.',
      icon: '/images/Icones/ProtecaoMaisConforto.png'
    },
    {
      title: 'Capacidade de inovação',
      description: 'Desenvolvemos soluções muito mais seguras e confortáveis.Temos uma equipe de distribuição que entende as necessidades dos clientes. E amplo know-how para traduzir essa informação em produtos de alta qualidade.',
      icon: '/images/Icones/CapacidadeInovacao.png'
    }
  ]

  //Retornando o JSX da página Inicial
  return (
    <>

      {/* Definindo as metatags da página */}
      <Head>
        <title>A SEPTI | SEPTI Healthcare</title>
        <meta name="description" content="A septi é uma industria onde fabricamos e comercializamos EPIs, descartáveis e hospitalares, voltados para a paramentação segura em procedimentos cirúrgicos." />
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
            <span className="fonteCoral">Descartáveis</span>
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
        <iframe title="Video instucional da SEPTI" className={styles.iframe} src="https://www.youtube.com/embed/_ryi9ibyG18" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
      <section className={styles.sectionProdutos}>
        <h2 className="fonteAzul">Nossas soluções</h2>
        <div className={styles.produtos}>
          <CardSaibaMais
            alt="Aventais para pacientes SEPTI SEPTI HEALTHCARE"
            title="Aventais para #b pacientes #b"
            image={AventalPaciente}
          />
          <CardSaibaMais
            alt="Aventais para isolamento SEPTI HEALTHCARE"
            title="Aventais para #b isolamento #b"
            image={AventalIsolamento}
          />
          <CardSaibaMais
            alt="Aventais de barreira SEPTI HEALTHCARE"
            title="Aventais #b barreira #b"
            image={AventalBarreira}
          />
          <CardSaibaMais
            alternative
            alt="Aventais laminados SEPTI HEALTHCARE"
            title="Aventais #b laminados #b"
            image={AventalLaminado}
          />
          <CardSaibaMais
            alternative alt="Aventais cirúrgicos SEPTI HEALTHCARE"
            title="Aventais #b cirúrgicos #b"
            image={AventalCirurgico}
          />
          <CardSaibaMais
            alternative alt="Linha de máscaras SEPTI HEALTHCARE"
            title=" #bMáscaras #b"
            image={Mascara}
          />
          <CardSaibaMais
            alt="Panos e Wipers SEPTI HEALTHCARE"
            title="Panos e #b Wipers #b"
            image={PanosLimpeza}
          />
          <CardSaibaMais
            alt="Campos e invólucros SEPTI HEALTHCARE"
            title="Campos e #b invólucros #b"
            image={CamposInvolucros}
          />
          <CardSaibaMais
            alt="Toucas e propés SEPTI HEALTHCARE" 
            title="Toucas e #b propés #b"
            image={ToucasPropes}
          />
          <CardSaibaMais
            alternative alt="Macacões e conjuntos SEPTI HEALTHCARE"
            title="Macacões e #b conjuntos #b"
            image={MacacaoLaminado}
          />
          <CardSaibaMais
            alternative alt="Linha de papéis SEPTI HEALTHCARE"
            title="#b Papéis #b"
            image={Papeis}
          />
          <CardSaibaMais
            alternative alt="Correlatos em TNT SEPTI HEALTHCARE" 
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

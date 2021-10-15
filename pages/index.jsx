
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

//Importando as imagens utilizadas na página
import placeholder from '../public/images/profile.png'

//Criando o componente da página inicial
export default function Home() {

  const abrirFormulário = (idForm) => {
    console.log("Abrindo form:", idForm)
  }

  const diferenciais = [
    {
      title: 'titulo do diferencial',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis ex non cum.',
      icon: 'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg'
    },
    {
      title: 'titulo do diferencial',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis ex non cum.',
      icon: 'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg'
    },
    {
      title: 'titulo do diferencial',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis ex non cum.',
      icon: 'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg'
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

      {/* Instanciando o componente do Header */}
      <Header 
        modalCompra={() => console.log('')}
      />

      {/* Criando a seção inicial do site */}
      <section className={styles.sectionInicio}>
        <div className={styles.contentInicio}>
          <h1 className="fonteBranca">
            Septi é <span className="fonteCoral">+</span> <br/>
            qualidade <br/>
            <span className="fonteCoral"> segurança</span>
          </h1>
          <Button
            buttonHover
            sizeButton="large"
            typeButton="principal"
            actionButton={() => abrirFormulário(1)}
          >Conheça nossos produtos </Button>
        </div>
      </section>
    
      {/* Criando a seção do video */}
      <section className={styles.sectionVideo}>
        <iframe className={styles.iframe} src="https://www.youtube.com/embed/_ryi9ibyG18" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <div className={styles.contentVideo}>
          <h2 className="fonteAzul">Alto padrão que <br/> a saúde merece</h2>
          <p className={`fonteAzul ${styles.paragrafoVideo}`}>Desenvolvemos e comercializamos produtos descartáveis voltados para a paramentação segura em procedimentos cirúrgicos, ambulatoriais, assistenciais e de diagnósticos. Nossas soluções seguem rigorosamente alegislação vigente – ABNT e ANVISA.</p>
          
          <Button
            buttonHover
            sizeButton="large"
            typeButton="principal"
            actionButton={() => abrirFormulário(1)}
          >Conheça nossos produtos </Button>
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
            image={placeholder}
          />
          <CardSaibaMais
            alt="Aventais para isolamento SEPTI HEALTHCARE"
            title="Aventais para #b isolamento #b"
            image={placeholder}
          />
          <CardSaibaMais
            alt="Aventais de barreira SEPTI HEALTHCARE"
            title="Aveitais #b barreira #b"
            image={placeholder}
          />
          <CardSaibaMais
            alternative
            alt="Aventais laminados SEPTI HEALTHCARE"
            title="Aventais #b laminados #b"
            image={placeholder}
          />
          <CardSaibaMais
            alternative alt="Aventais cirúrgicos SEPTI HEALTHCARE"
            title="Aventais de #b cirúrgicos #b"
            image={placeholder}
          />
          <CardSaibaMais
            alternative alt="Linha de máscaras SEPTI HEALTHCARE"
            title="#b Máscaras #b"
            image={placeholder}
          />
          <CardSaibaMais
            alt="Panos e Wipers SEPTI HEALTHCARE"
            title="Panos e #b Wipers #b"
            image={placeholder}
          />
          <CardSaibaMais
            alt="Campos e invólucros SEPTI HEALTHCARE"
            title="Campos e #b invólucros #b"
            image={placeholder}
          />
          <CardSaibaMais
            alt="Toucas e propés SEPTI HEALTHCARE" 
            title="Toucas e #b propés #b"
            image={placeholder}
          />
          <CardSaibaMais
            alternative alt="Macacões e conjuntos SEPTI HEALTHCARE"
            title="Macacões e #b conjuntos #b"
            image={placeholder}
          />
          <CardSaibaMais
            alternative alt="Linha de papéis SEPTI HEALTHCARE"
            title="#b Papéis #b"
            image={placeholder}
          />
          <CardSaibaMais
            alternative alt="Correlatos em TNT SEPTI HEALTHCARE" 
            title="Correlatos em #b TNT #b"
            image={placeholder}
          />
        </div>
      </section>

      {/* Instanciando o componente de Clientes */}
      <Clientes />

      {/* Instanciando o componente de Faça Seu Pedido */}
      <FacaPedido
        modalCompra={() => console.log('')}
      />

      {/* Instanciando o componente de Rodapé */}
      <Footer />
    </>
  )
}

import Header from '../components/Header'
import Footer from '../components/Footer'
import FacaPedido from '../components/FacaPedido'
import Clientes from '../components/Clientes'
import CardSaibaMais from '../components/CardSaibaMais'
import styles from '../styles/Home.module.scss'
import Diferenciais from '../components/Diferenciais'
import Button from '../components/Button'
import placeholder from '../public/images/profile.png'

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.sectionInicio}>
        <div className={styles.contentInicio}>
          <h1 className="fonteBranca">
            Septi é <span className="fonteCoral">+ </span> <br/>
            qualidade <br/>
            <span className="fonteCoral"> segurança</span>
          </h1>
          <Button
            buttonHover
            sizeButton="large"
            typeButton="principal"
            actionButton={() => console.log("Hello world")}
          >Conheça nossos produtos </Button>
        </div>
      </section>
      <section className={styles.sectionVideo}>
        <div className={styles.areaVideo}>
          <iframe width="604" height="340" src="https://www.youtube.com/embed/_ryi9ibyG18" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div className={styles.content}>
          <h2 className="fonteAzul">Alto padrão<br/> que a saúde merece</h2>
          <p className={`fonteAzul ${styles.paragrafoVideo}`}>Desenvolvemos e comercializamos produtos descartáveis voltados para a paramentação segura em procedimentos cirúrgicos, ambulatoriais, assistenciais e de diagnósticos. Nossas soluções seguem rigorosamente alegislação vigente – ABNT e ANVISA.</p>
          <Button
            buttonHover
            sizeButton="large"
            typeButton="principal"
            actionButton={() => console.log("Hello world")}
          >Conheça nossos produtos </Button>
        </div>
      </section>
      <Diferenciais />
      <section className={styles.sectionProdutos}>
        <h2 className="fonteAzul">Nossas soluções</h2>
        <div className={styles.produtos}>
          <CardSaibaMais title="Aventais para #b pacientes #b" image={placeholder} />
          <CardSaibaMais title="Aventais para #b isolamento #b" image={placeholder} />
          <CardSaibaMais title="Aveitais #b barreira #b" image={placeholder} />

          <CardSaibaMais alternative title="Aventais #b laminados #b" image={placeholder} />
          <CardSaibaMais alternative title="Aventais de #b cirúrgicos #b" image={placeholder} />
          <CardSaibaMais alternative title="#b Máscaras #b" image={placeholder} />
          
          <CardSaibaMais title="Panos e #b Wipers #b" image={placeholder} />
          <CardSaibaMais title="Campos e #b invólucros #b" image={placeholder} />
          <CardSaibaMais title="Toucas e #b propés #b" image={placeholder} />

          <CardSaibaMais alternative title="Macacões e #b conjuntos #b" image={placeholder} />
          <CardSaibaMais alternative title="#b Papéis #b" image={placeholder} />
          <CardSaibaMais alternative title="Correlatos em #b TNT #b" image={placeholder} />
        </div>
      </section>
      <Clientes />
      <FacaPedido />
      <Footer />
    </>
  )
}

//Importando componentes necessários
import Clientes from '../components/Clientes'
import Diferenciais from '../components/Diferenciais'
import FacaPedido from '../components/FacaPedido'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InicioLinhaProdutos from '../components/InicioLinhaProdutos'
import Produto from '../components/Produto'

//Definindo e exportando o componente
export default function linhaProduto(props) {
  return(
    <>
      <Header />
      <InicioLinhaProdutos 
        title={props.title}
        description={props.description}
        image={props.image}
      />
      {props.produtos.map((produto, index) => (
        <Produto
          key={index}
          alternative={index % 2 === 0 ? true : false}
          title={produto.title}
          description={produto.description}
          images={produto.images}
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
      <FacaPedido />
      <Footer />
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      title: "Titulo da linha",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem est cum eaque velit cumque quos eius voluptas nobis veniam culpa ullam iusto, veritatis blanditiis ea nam deserunt itaque, reiciendis a.",
      image: 'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg',
      produtos: [
        {
          title: "titulo do produto",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis ex non cum, placeat delectus magni quo tempora sed et ut quidem, molestiae deleniti voluptatibus laborum laudantium cupiditate. Illo, iusto.",
          images: [
            'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg',
            'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg',
            'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg'
          ]
        },
        {
          title: "titulo do produto",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis ex non cum, placeat delectus magni quo tempora sed et ut quidem, molestiae deleniti voluptatibus laborum laudantium cupiditate. Illo, iusto.",
          images: [
            'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg',
            'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg',
            'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg'
          ]
        },
        {
          title: "titulo do produto",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis ex non cum, placeat delectus magni quo tempora sed et ut quidem, molestiae deleniti voluptatibus laborum laudantium cupiditate. Illo, iusto.",
          images: [
            'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg',
            'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg',
            'https://i1.rgstatic.net/ii/profile.image/760992594132998-1558446181216_Q512/Sidimar-Sagaz.jpg'
          ]
        },
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
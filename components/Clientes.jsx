//Criando o componente para a seção de clientes

//Importando modulo para estilização
import styles from '../styles/Clientes.module.scss'

//Importando imagens necessárias
import Image from 'next/image'
import Cliente1 from '../public/images/cliente1.png'
import Cliente2 from '../public/images/cliente2.png'
import Cliente3 from '../public/images/cliente3.png'
import Cliente4 from '../public/images/cliente4.png'
import Cliente5 from '../public/images/cliente5.png'

//Importando os componentes para a criação do slide
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

//Importando a estilização do slider
import "swiper/css";
import "swiper/css/pagination"

//Instalando os modulos do swipper na aplicação
SwiperCore.use([Autoplay]);

//Definindo e exportando o componente
export default function Clientes(){
  return (
    <section className={styles.section}>
      <h2 className="fonteBranca">Quem confia na gente</h2>
      <h3 className={styles.subTitulo}>Mais de 4.000 empresa já confiam na gente.</h3>

      {/* Instanciando o slider de clientes */}
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          500: {
            slidesPerView: 5,
            slidesPerGroup: 5
          },
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          "delay": 2000,
          "disableOnInteraction": false
        }}
        speed={2000}
        className={`${styles.empresas} mySwiper`}
      >
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente5} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente5} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Cliente5} />
        </SwiperSlide>
      </Swiper>

      {/* Estruturando componentes para fazer fade in e fade out no slide */}
      <div className={styles.leftBlur}></div>
      <div className={styles.rightBlur}></div>
    </section>
  )
}
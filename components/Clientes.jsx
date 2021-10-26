//Criando o componente para a seção de clientes

//Importando modulo para estilização
import styles from '../styles/Clientes.module.scss'

//Importando imagens necessárias
import Image from 'next/image'
import Atacadao from '../public/images/clientes/Atacadao.png'
import Aurora from '../public/images/clientes/Aurora.png'
import DivinaProvidencia from '../public/images/clientes/DivinaProvidencia.png'
import Fleury from '../public/images/clientes/Fleury.png'
import LigaAlvaro from '../public/images/clientes/LigaAlvaro.png'
import Marfrig from '../public/images/clientes/Marfrig.png'
import Minerva from '../public/images/clientes/Minerva.png'
import SantaCatarina from '../public/images/clientes/SantaCatarina.png'
import SOS from '../public/images/clientes/SOSCardio.png'
import Unimed from '../public/images/clientes/Unimed.png'

//Importando os componentes para a criação do slide
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

//Importando a estilização do slider
import "swiper/css";
import "swiper/css/pagination"

let aux = [0, 0, 0, 0, 0]

//Instalando os modulos do swipper na aplicação
SwiperCore.use([Autoplay]);

//Definindo e exportando o componente
export default function Clientes(){
  return (
    <section className={styles.section}>
      <h2 className="fonteBranca">Quem confia na gente</h2>
      <h3 className={styles.subTitulo}>Mais de 500 empresas já confiam na Septi.</h3>

      {/* Instanciando o slider de clientes */}
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 3,
            slidesPerGroup: 15
          },
          500: {
            slidesPerView: 5,
            slidesPerGroup: 15
          },
        }}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          "delay": 0,
          "stopOnLastSlide": false,
          "disableOnInteraction": false
        }}
        speed={60000}
        className={`${styles.empresas} mySwiper`}
      >
        {aux.map((aux, index) => (
        <>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={SantaCatarina} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Fleury} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={DivinaProvidencia} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={LigaAlvaro} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Unimed} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={SOS} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Aurora} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Marfrig} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Minerva} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Atacadao} />
          </SwiperSlide>
        </>
        ))}
      </Swiper>

      {/* Estruturando componentes para fazer fade in e fade out no slide */}
      <div className={styles.leftBlur}></div>
      <div className={styles.rightBlur}></div>
    </section>
  )
}
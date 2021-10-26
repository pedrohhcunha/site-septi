//Criando o componente para a seção de clientes

//Importando modulo para estilização
import styles from '../styles/Clientes.module.scss'

//Importando imagens necessárias
import Albert from '../public/images/clientes/Albert.png'
import Atacadao from '../public/images/clientes/Atacadao.png'
import Aurora from '../public/images/clientes/Aurora.png'
import Beneficiencia from '../public/images/clientes/Beneficiencia.png'
import Dasa from '../public/images/clientes/Dasa.png'
import DivinaProvidencia from '../public/images/clientes/DivinaProvidencia.png'
import Fleury from '../public/images/clientes/Fleury.png'
import LigaAlvaro from '../public/images/clientes/LigaAlvaro.png'
import Marfrig from '../public/images/clientes/Marfrig.png'
import Minerva from '../public/images/clientes/Minerva.png'
import PreventSenior from '../public/images/clientes/PreventSenior.png'
import SantaCatarina from '../public/images/clientes/SantaCatarina.png'
import SaoCamilo from '../public/images/clientes/SaoCamilo.png'
import SOS from '../public/images/clientes/SOSCardio.png'
import Unimed from '../public/images/clientes/Unimed.png'

//Importando os componentes para a criação do slide
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

//Importando a estilização do slider
import "swiper/css";
import "swiper/css/pagination"

//Definindo a variávrl axuiliar para gerak scroll infinito 
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
            <Image priority className={styles.image} alt="Logo do Hospital Israelita Albert Einstein" src={Albert} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo da Beneficência Portuguesa de Porto Alegre" src={Beneficiencia} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo da Dasa" src={Dasa} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo da Prevent Senior" src={PreventSenior} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo do Hospital São Camilo" src={SaoCamilo} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo do Hospital Santa Catarina de Blumenau" src={SantaCatarina} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo da Fleury Medicina e saúde" src={Fleury} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo do Hospital Divina Providência" src={DivinaProvidencia} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Hospital da Liga Álvaro Bahia Contra a Mortalidade Infantil" src={LigaAlvaro} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo da Confederação Nacional das Cooperativas Médicas UNIMED" src={Unimed} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo do Hospital SOS Cárdio" src={SOS} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo da Aurora" src={Aurora} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo da Marfrig Global Foods" src={Marfrig} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo da Minerva Foods" src={Minerva} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Logo do atacado-varejista Atacadão" src={Atacadao} />
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
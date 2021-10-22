//Criando o componente para a seção de clientes

//Importando modulo para estilização
import styles from '../styles/Clientes.module.scss'

//Importando imagens necessárias
import Image from 'next/image'
import Marfrig from '../public/images/Marfrig-01.png'
import SaoCamilo from '../public/images/SaoCamilo.png'
import Atacadao from '../public/images/Atacadao-01.png'
import Minerva from '../public/images/Minerva-01.png'
import SOS from '../public/images/SOS-Cardio-01.png'
import Aurora from '../public/images/Aurora-01.png'
import BP from '../public/images/bp.png'
import Dasa from '../public/images/Dasa.png'
import DivinaProvidencia from '../public/images/Divina-Providencia-01.png'
import Fleury from '../public/images/Fleury-01.png'
import LigaAlvaro from '../public/images/Liga-alvaro-01.png'
import PreventSenior from '../public/images/Prevent-senior.png'
import Unimed from '../public/images/Unimed-01.png'
import Albert from '../public/images/Albert.png'
import SantaCatarina from '../public/images/Santa-Catarina-01.png'

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
      <h3 className={styles.subTitulo}>Mais de 4.000 empresa já confiam na gente.</h3>

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
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Dasa} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={BP} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={PreventSenior} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={Albert} />
          </SwiperSlide>
          <SwiperSlide key={Math.random()}>
            <Image priority className={styles.image} alt="Imagem de parceiro chave" src={SaoCamilo} />
          </SwiperSlide>
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
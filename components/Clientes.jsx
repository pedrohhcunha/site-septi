import styles from '../styles/Clientes.module.scss'
import Image from 'next/image'
import Cliente1 from '../public/images/cliente1.png'
import Cliente2 from '../public/images/cliente2.png'
import Cliente3 from '../public/images/cliente3.png'
import Cliente4 from '../public/images/cliente4.png'
import Cliente5 from '../public/images/cliente5.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay]);

export default function Clientes(){
  return (
    <section className={styles.section}>
      <h2 className="fonteBranca">Quem confia na gente</h2>
      <h3 className={styles.subTitulo}>Mais de 4.000 empresa já confiam na gente.</h3>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        autoplay={{
          "delay": 2000,
          "disableOnInteraction": false
        }}
        speed={2000}
        className={`${styles.empresas} mySwiper`}
      >
        <SwiperSlide>
          <Image className={styles.image} src={Cliente1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente5} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente5} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Cliente5} />
        </SwiperSlide>
      </Swiper>
      <div className={styles.leftBlur}></div>
      <div className={styles.rightBlur}></div>
    </section>
  )
}
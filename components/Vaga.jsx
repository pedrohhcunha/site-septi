import styles from '../styles/Vaga.module.scss'
import placeholder from '../public/images/profile.png'
import Image from 'next/image'
import DropDiv from './DropDIv'
import Button from './Button'

export default function Vaga(props) {

    return (
        <div className={styles.vaga}>
            <div className={styles.areaImage}>
                <Image src={placeholder} />
            </div>
            <h3>{props.title}</h3>
            <DropDiv
                title="Responsabilidades / Atividades"
                content={props.responsabilidades}
            />
            <DropDiv
                title="Qualificações / Requisitos"
                content={props.requisitos}
            />
            <DropDiv
                title="Oferecemos"
                content={props.oferecemos}
            />
            <Button
                sizeButton="small"
                typeButton="principal"
                actionButton={() => console.log("Hello world")}
            >Enviar Currículo</Button>
        </div>
    )
}
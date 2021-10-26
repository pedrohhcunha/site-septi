//Componente card de vaga a ser utilizado na tela de trablahe conosco
//title: <string> | Define o titulo da vaga
//responsabilidades: <string>   / Define as responsabilidade do possivel empregado
//requisitos: <string>   / Define os requisitos do possivel empregado
//oferecemos: <string>   / Explana os beneficios do possivel functionário

//Importando módulo para a estilização do componente
import styles from '../styles/Vaga.module.scss'

//Importando componentes necessários
import Button from './Button'
import DropDiv from './DropDIv'
import Image from 'next/image'
import placeholder from '../public/images/profile.png'

//Criando e exportando o componente
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
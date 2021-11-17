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

//Criando e exportando o componente
export default function Vaga(props) {

    return (
        <div className={styles.vaga}>
            <div onClick={props.openVaga} className={styles.areaImage}>
                <Image 
                    src={(process.env.NEXT_PUBLIC_IMG_VAGAS + props.imagem)} 
                    height={600}
                    width={600}
                    alt={"Imagem da vaga"}
                />
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
                actionButton={props.openVaga}
            >Enviar Currículo</Button>
        </div>
    )
}
import styles from '../styles/Input.module.scss'
import ReactInputMask from 'react-input-mask'

export default function Input(props) {
    if(props.type !== "phone" && props.type !== "cpf/cnpj"){
        return(
            <div className={styles.areainput}>
                <label className={styles.label} htmlFor="">{props.label}</label>
                <input onChange={() => props.changeFunction(event)}  className={styles.input} required={props.required} name={props.name} type={props.type} />
            </div>
        )
    } else {
        return(
            <div className={styles.areainput}>
                <label
                    className={styles.label}
                    htmlFor="">{props.label}
                </label>
                <ReactInputMask
                    mask={props.type === "phone" ? "+99 (99) 9 9999-9999" : "999.999.999-99"}
                    onChange={() => props.changeFunction(event)}
                    className={styles.input}
                    required={props.required}
                    name={props.name}
                    type="text"
                />
            </div>
        )
    }
}
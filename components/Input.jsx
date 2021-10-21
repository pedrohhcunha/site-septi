import styles from '../styles/Input.module.scss'

export default function Input(props) {
    return(
    <div className={styles.areainput}>
        <label className={styles.label} htmlFor="">{props.label}</label>
        <input className={styles.input} required={props.required} name={props.name} type={props.type} />
    </div>
    )
}
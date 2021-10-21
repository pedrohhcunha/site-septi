import styles from '../styles/Input.module.scss'

export default function Input(props) {
    return(
    <div className={styles.areainput}>
        <label className={styles.label} htmlFor="">{props.label}</label>
        <input className={styles.input} name={props.name} type={props.type} />
    </div>
    )
}
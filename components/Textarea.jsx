import styles from '../styles/Textarea.module.scss'

export default function Textarea(props) {
    return(
    <div className={styles.areainput}>
        <label className={styles.label} htmlFor="">{props.label}</label>
        <textarea className={styles.textarea} name={props.name} rows="5"></textarea>
    </div>
    )
}
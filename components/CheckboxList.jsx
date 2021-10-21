import styles from '../styles/CheckboxList.module.scss'

export default function CheckboxList(props) {
    return(
        <>
            <h4 styles={styles.subTitle}>{props.title}e</h4>
            <ul className={styles.ulList}>
                {props.items.map((item, index) => (
                <li
                    key={index}
                >
                    <input
                        type="checkbox"
                    />
                    <label
                        htmlFor=""
                    >
                    {item}
                    </label>
                </li>
                ))}
            </ul>
        </>
    )
}
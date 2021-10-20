import styles from '../styles/DropDiv.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'  
import { useState } from 'react'


export default function DropDiv(props) {

    const [stateDropDiv, setStateDropDiv] = useState(false);

    return (
        <div className={`${styles.dropDiv} ${stateDropDiv ? styles.active : ''}`} onClick={() => setStateDropDiv(!stateDropDiv)}>
            <div className={styles.title}>
                <span>{props.title}</span> 
                <FontAwesomeIcon icon={faPlusCircle} className={styles.icon}/>
            </div>
            <div className={styles.content}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
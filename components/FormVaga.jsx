import styles from '../styles/Form.module.scss'
import { useState } from 'react';
import Input from '../components/Input'
import Textarea from './Textarea';

export default function FormVaga(props) {

    const [isSending, setIsSending] = useState(false);
    return(
    <form id="FormVaga" onSubmit={() => console.log("mandou")} action="" method="POST" className={`${styles.form} ${isSending ? styles.sending : ''}`}>
        <h3>Candidate-se para a vaga de</h3>
        <Input
            changeFunction={() => console.log("handler")}
            required
            name="nome"
            label="Nome"
            type="text"
        />
        <Input
            changeFunction={() => console.log("handler")}
            required
            name="email"
            label="Email"
            type="email"
        />
        <Textarea
            changeFunction={() => console.log("handler")}
            name="mensagem"
            label="Sua mensagem"
        />
        <Input
            changeFunction={() => console.log("handler")}
            required
            name="file"
            label="Seu curriculo"
            type="file"
            accept="image/png, image/jpeg, .pdf"
        />
        <button type="submit" className={styles.button}>Receber Agora</button>
        <span>A septi é contra qualquer tipo de span, desta forma não usaremos suas informações de contato para isso.</span>
    </form>
    )
}
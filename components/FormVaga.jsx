import styles from '../styles/Form.module.scss'
import { useState } from 'react';
import Input from '../components/Input'
import Textarea from './Textarea';
import axios from 'axios';

export default function FormVaga(props) {

    const [isSending, setIsSending] = useState(false);

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: "",
        file: ""
    });

    const handleInput = event => {
        let auxData = {...formData}
        auxData[event.target.name] = event.target.value
        setFormData(auxData)
    }

    const sendForm = event => {
        event.preventDefault()
        console.log("Enviando dados...", formData)
        axios.post(`${process.env.NEXT_PUBLIC_LINK}/api/forms/vaga`,
        formData
        ).then(response => {
            console.log(response.data)
        })
    }

    return(
    <form id="FormVaga" onSubmit={() => sendForm(event)} method="POST" className={`${styles.form} ${isSending ? styles.sending : ''}`}>
        <h3>Candidate-se para a vaga</h3>
        <Input
            changeFunction={handleInput}
            required
            name="nome"
            label="Nome"
            type="text"
        />
        <Input
            changeFunction={handleInput}
            required
            name="email"
            label="Email"
            type="email"
        />
        <Textarea
            changeFunction={handleInput}
            name="mensagem"
            label="Sua mensagem"
        />
        <Input
            changeFunction={handleInput}
            required
            name="file"
            label="Seu curriculo"
            type="file"
            accept="image/png, image/jpeg, .pdf"
        />
        <button type="submit" className={styles.button}>Receber Agora</button>
        <span>Sua canditadura será enviada diretamente para o nosso setor de recrutamento e seleção.</span>
    </form>
    )
}
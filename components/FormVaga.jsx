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
        file: {},
        vaga: "BANCO DE TALENTOS"
    });

    const handleInput = event => {
        let auxData = {...formData}
        auxData[event.target.name] = event.target.files ? event.target.files[0] : event.target.value
        setFormData(auxData)
    }

    const sendForm = event => {
        event.preventDefault()

        console.log("Enviando dados...", formData)
        axios.post(`${process.env.NEXT_PUBLIC_LINK}/api/forms/vaga`,
        formData
        ).then(response => {
            document.querySelector('#FormVaga').reset()
            setFormData({
                nome: "",
                email: "",
                mensagem: "",
                file: {},
                vaga: "BANCO DE TALENTOS"
            })
            if(response.data.success){
                props.closeModal()
            }
        })
    }

    return(
    <form id="FormVaga" onSubmit={() => sendForm(event)} method="POST" className={`${styles.form} ${isSending ? styles.sending : ''}`}>
        <div className={styles.areaTitle}>
            <h3>Candidate-se para a vaga</h3>
            <h3 className={styles.icon} onClick={props.closeModal}>x</h3>
        </div>
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
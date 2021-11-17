import styles from '../styles/Form.module.scss'
import { useState } from 'react';
import Input from '../components/Input'
import Textarea from './Textarea';
import axios from 'axios';


export default function FormVaga(props) {

    const [isSending, setIsSending] = useState(false);
    const [errorReq, setErrorReq] = useState("")
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
        
        var finalData = new FormData();
        var imagefile = document.querySelector('#FormVaga > div:nth-child(5) > label > input');
        finalData.append("image", imagefile.files[0]);
        finalData.append("nome", formData.nome)
        finalData.append("email", formData.email)
        finalData.append("mensagem", formData.mensagem)
        finalData.append("vaga", formData.vaga)
        console.log("->", finalData)

        axios({
            method: 'post',
            url: `http://192.168.30.71:3000/api/forms/vaga`,
            data: finalData
        },{headers: { 'Content-Type': 'multipart/form-data' }}).then(response => {
            document.querySelector('#FormVaga').reset()
            
            setFormData({
                nome: "",
                email: "",
                mensagem: "",
                file: {},
                vaga: "BANCO DE TALENTOS"
            })

            if(response.data.success){
                setErrorReq("")
                props.closeModal()
            } else {
                setErrorReq(response.data.mensage)
            }
        })
    }

    return(
    <form id="FormVaga" encType="multipart/form-data" onSubmit={() => sendForm(event)} method="POST" className={`${styles.form} ${isSending ? styles.sending : ''}`}>
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
        <button onClick={() => sendForm(event) } className={styles.button}>Receber Agora</button>
        {errorReq != "" ?
            <div className={styles.errorDiv}><span>{errorReq}</span></div>
        : ""}
        <span>Sua canditadura será enviada diretamente para o nosso setor de recrutamento e seleção.</span>
    </form>
    )
}
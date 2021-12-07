import styles from '../styles/Form.module.scss'
import { useEffect, useState } from 'react';
import Input from '../components/Input'
import Textarea from './Textarea';
import axios from 'axios';

export default function FormVaga(props) {

    const [isSending, setIsSending] = useState(false);
    const [errorReq, setErrorReq] = useState("")
    const [successReq, setSuccessReq] = useState("")
    const [loadingForm, setLoadingForm] = useState(false);
    const [formData, setFormData] = useState({
        id: props.vagaId,
        nome: "",
        email: "",
        mensagem: "",
        file: {},
        vaga: 0
    });

    useEffect(() => {
        setFormData({
            ...formData,
            "vaga": props.vagaId
        })
    }, [props.vagaId])

    const handleInput = event => {
        let auxData = {...formData}
        auxData[event.target.name] = event.target.files ? event.target.files[0] : event.target.value
        setFormData(auxData)
    }

    const sendForm = event => {
        event.preventDefault()
        
        var finalData = new FormData();
        var imagefile = document.querySelector('#FormVaga > div:nth-child(5) > label > input');
        
        finalData.append("image", imagefile.files[0]);
        finalData.append("nome", formData.nome)
        finalData.append("email", formData.email)
        finalData.append("mensagem", formData.mensagem)
        finalData.append("vaga", formData.vaga)

        setLoadingForm(true)
        axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_INTRANET_API}/receive_curriculo`,
            data: finalData
        },{headers: { 'Content-Type': 'multipart/form-data' }}).then(response => {
            document.querySelector('#FormVaga').reset()
            
            setFormData({
                nome: "",
                email: "",
                mensagem: "",
                file: {},
                vaga: props.vagaId
            })
            setLoadingForm(false)
            if(response.data.success){
                setErrorReq("")
                setSuccessReq("Sua candidatura foi realizada com sucesso!")
            } else {
                setSuccessReq("")
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
            value={formData.nome}
        />
        <Input
            changeFunction={handleInput}
            required
            name="email"
            label="Email"
            type="email"
            value={formData.email}
        />
        <Textarea
            changeFunction={handleInput}
            name="mensagem"
            label="Sua mensagem"
            value={formData.mensagem}
        />
        <Input
            changeFunction={handleInput}
            required
            name="file"
            label="Seu curriculo"
            type="file"
            accept="image/png, image/jpeg, .pdf"
            value={formData.file}
        />
        <button onClick={() => sendForm(event) } className={`${styles.button} ${loadingForm ? styles.loading : false}`}>
            <span>Receber Agora</span>
            <div className={styles.loading}><div className={styles.square}></div></div>
        </button>
        {errorReq != "" ?
            <div className={styles.errorDiv}><span>{errorReq}</span></div>
        : ""}
        {successReq != "" ?
            <div className={styles.successDiv}><span>{successReq}</span></div>
        : ""}
        <span>Sua canditadura será enviada diretamente para o nosso setor de recrutamento e seleção.</span>
    </form>
    )
}
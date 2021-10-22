import styles from '../styles/Form.module.scss'
import Input from './Input';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function FormFicha(props) {

  const [isSending, setIsSending] = useState(false);

  const [fichaData, setFichaData] = useState({
    "nome": "",
    "email": "",
    "cpf_cnpj": "",
    "empresa": "",
    "tag_conversao": props.tag,
  });

  useEffect(() => {
    setFichaData({
      ...fichaData,
      ["tag_conversao"]: props.tag
    })
  }, [props.tag]);

  const handlerInputs = (event) => {
      setFichaData({
          ...fichaData,
          ["" + event.target.name]: event.target.value
      })
  }

  const submitForm = (event) => {
    event.preventDefault()
    setIsSending(true)
    document.querySelector('#FormFicha').reset()

    fichaData.cpf_cnpj = fichaData.cpf_cnpj.replace('/[^0-9]/', '')

    axios.post(
        `${process.env.NEXT_PUBLIC_LINK}/api/forms/ficha`,
        fichaData
    ).then(response => {
        setIsSending(false)
        if(response.data.msg === "success"){
            window.location.href = `${process.env.NEXT_PUBLIC_LINK}/obrigado`
        } else {
            console.log('erro')
        }
    })

  }

  return (
    <form id="FormFicha" onSubmit={() => submitForm(event)} action="" method="POST" className={`${styles.form} ${isSending ? styles.sending : ''}`}>
      <h3>Receba a ficha técnica - {props.tag}</h3>
      <Input
        changeFunction={handlerInputs}
        required name="nome"
        label="Nome"
        type="text"
      />
      <Input
        changeFunction={handlerInputs}
        required
        name="email"
        label="Email"
        type="email"
      />
      <Input
        changeFunction={handlerInputs}
        required
        name="cpf_cnpj"
        label="CNPJ"
        type="cpf/cnpj"
      />
      <Input
        changeFunction={handlerInputs}
        required
        name="empresa"
        label="Razão social"
        type="text"
      />
      <button type="submit" className={styles.button}>Receber Agora</button>
      <span>A septi é contra qualquer tipo de span, desta forma não usaremos suas informações de contato para isso.</span>
      <div className={styles.sendDiv}></div>
    </form>
  )
} 
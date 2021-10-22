import styles from '../styles/Form.module.scss'
import Input from './Input';
import { useState } from 'react';
import axios from 'axios'

export default function FormCatalogo(props) {

  const [isSending, setIsSending] = useState(false);

  const [catalogoData, setCatalogoData] = useState({
    "nome": "",
    "email": "",
    "whatsapp": "",
    "cpf_cnpj": "",
    "empresa": "",
    "cargo": ""
  });

  const handlerInputs = (event) => {
      setCatalogoData({
          ...catalogoData,
          ["" + event.target.name]: event.target.value
      })
  }

  const submitForm = (event) => {
    event.preventDefault()
    setIsSending(true)
    document.querySelector('#FormCatalogo').reset()

    catalogoData.cpf_cnpj = catalogoData.cpf_cnpj.replace('/[^0-9]/', '')

    axios.post(
        `${process.env.NEXT_PUBLIC_LINK}/api/forms/catalogo`,
        catalogoData
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
    <form id="FormCatalogo" onSubmit={() => submitForm(event)} action="" method="POST" className={`${styles.form} ${isSending ? styles.sending : ''}`}>
      <h3>Receba o catálogo</h3>
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
        name="whatsapp"
        label="Whatsapp"
        type="phone"
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
      <Input
        changeFunction={handlerInputs}
        required
        name="cargo"
        label="Cargo"
        type="text"
      />
      <button type="submit" className={styles.button}>Receber Agora</button>
      <span>A septi é contra qualquer tipo de span, desta forma não usaremos suas informações de contato para isso.</span>
      <div className={styles.sendDiv}></div>
    </form>
  )
} 
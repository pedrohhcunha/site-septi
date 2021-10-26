//Criando componente de formulário para comunicação com o backend

//Importando módulo para estilização do formulário
import styles from '../styles/Form.module.scss'

//Importando componente necessários
import axios from 'axios'
import Input from './Input';

//Importando os Hooks necessários
import { useState } from 'react';

//Definindo e exportando o componente
export default function FormCatalogo() {

  //Estado que controla se o envio dos dados está sendo feito para a API
  const [isSending, setIsSending] = useState(false);

  //Estado que armazena os dados coletados a serem enviados via API
  const [catalogoData, setCatalogoData] = useState({
    "nome": "",
    "email": "",
    "whatsapp": "",
    "cpf_cnpj": "",
    "empresa": "",
    "cargo": ""
  });

  //Função que atualiza o valor de catalagoData sempre que houver mudanças em algum input
  const handlerInputs = (event) => {
      setCatalogoData({
          ...catalogoData,
          ["" + event.target.name]: event.target.value
      })
  }

  //Função responsável por validar e enviar os dados para a API
  const submitForm = (event) => {
    event.preventDefault()
    setIsSending(true)

    //Reseta os campos do formulário
    document.querySelector('#FormCatalogo').reset()

    //Retira os caracteres do cnpj
    catalogoData.cpf_cnpj = catalogoData.cpf_cnpj.replace('/[^0-9]/', '')

    //Envia os dados para a API
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
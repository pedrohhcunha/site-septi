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

  const [errorReq, setErrorReq] = useState("")

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
    if(event.target.name === "cpf_cnpj"){
      setCatalogoData({
        ...catalogoData,
        ["" + event.target.name]: mask(event.target.value)
      })
    } 
    
    else if(event.target.name === "whatsapp"){
      setCatalogoData({
        ...catalogoData,
        ["" + event.target.name]: maskTelefone(event.target.value)
      })
    }

    else {
      setCatalogoData({
        ...catalogoData,
        ["" + event.target.name]: event.target.value
      })
    }  
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
          setErrorReq("")
          window.location.href = `${process.env.NEXT_PUBLIC_LINK}/obrigado`
        } else {
          setErrorReq(response.data.msg)
        }
    })
  }

  const mask = v => {
    v = v.replace(/\D/g, "")
    v = v.replace(/^(\d{2})(\d)/, "$1.$2")
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")
    v = v.replace(/(\d{4})(\d)/, "$1-$2")
    return v
  }

  const maskTelefone = v => {
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
  }

  return (
    <form id="FormCatalogo" onSubmit={(event) => submitForm(event)} method="POST" className={`${styles.form} ${isSending ? styles.sending : ''}`}>
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
        maxLength="15"
        value={catalogoData.whatsapp}
        name="whatsapp"
        label="Whatsapp"
        type="phone"
      />
      <Input
        changeFunction={handlerInputs}
        required
        maxLength="18"
        value={catalogoData.cpf_cnpj}
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
      {errorReq != "" ?
        <div className={styles.errorDiv}><span>{errorReq}</span></div>
      : ""}
      <span>A septi é contra qualquer tipo de spam, desta forma não usaremos suas informações de contato para isso.</span>
      <div className={styles.sendDiv}></div>
    </form>
  )
} 
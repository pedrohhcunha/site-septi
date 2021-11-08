//Criando componente para formulário de ficha técnica
//tag: <string> -> Deve ser equivalente a uma TAG de CONVERSÂO no RDSTATINO MARKETING
//Importando módulo para a estlização do componente
import styles from '../styles/Form.module.scss'

//Importando componentes necessários
import Input from './Input';
import axios from 'axios'

//Impotandno Hooks necessáirios
import { useState, useEffect } from 'react';

//Definido e exportando o componente
export default function FormFicha(props) {


  //Manipula se os dados estão ou não sendo enviados
  const [isSending, setIsSending] = useState(false);

  //Controla os dados a serem mandados para a API
  const [fichaData, setFichaData] = useState({
    "nome": "",
    "email": "",
    "cpf_cnpj": "",
    "empresa": "",
    "tag_conversao": props.tag,
  });

  //Sempre que a propriedade tag ser atualizada, atualiza o valor de tag_conversão
  useEffect(() => {
    setFichaData({
      ...fichaData,
      ["tag_conversao"]: props.tag
    })
  }, [props.tag]);

  //Função para atualizar os dados a serem enviados via API
  const handlerInputs = (event) => {
      setFichaData({
          ...fichaData,
          ["" + event.target.name]: event.target.value
      })
  }

  //Função responsável por validar e enviar os dados via API
  const submitForm = (event) => {
    event.preventDefault()
    setIsSending(true)

    //Limpa os campos do formulário
    document.querySelector('#FormFicha').reset()

    //Retira os numeros de campos não numéricos
    fichaData.cpf_cnpj = fichaData.cpf_cnpj.replace('/[^0-9]/', '')


    //Envia os dados via APi
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
        required
        name="nome"
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
import styles from '../styles/FormContato.module.scss'
import Input from './Input'
import Textarea from './Textarea'
import CheckboxList from './CheckboxList'
import { useState } from 'react'
import axios from 'axios'

export default function FormContato(props){

    const [isSending, setIsSending] = useState(false);
    
    const itensCheckboxList = [
        "Aventais para procedimentos",
        "Aventais cirúrgicos",
        "Aventais para pacientes",
        "Campo cirúrgico",
        "Invólucro para esterilização",
        "Panos e Wipers",
        "Máscara cirúrgica",
        "Macacão descartável",
        "Lençol e fronhas",
        "Toucas e propés",
        "Correlatos em TNT",
        "Outros"
    ]

    const [contatoData, setContatoData] = useState({
        "nome": "",
        "email": "",
        "empresa": "",
        "endereco": "",
        "telefone": "",
        "produto_interesse": [],
        "quantidade_desejada": "",
        "cpf_cnpj": "",
        "observacoes": ""
    });

    const handlerInputs = (event) => {
        setContatoData({
            ...contatoData,
            ["" + event.target.name]: event.target.value
        })
    }

    const handlerCheckboxs = (event, idItem) => {
        let idProdutosInteresse = contatoData["produto_interesse"]
        if(idProdutosInteresse.includes(idItem)){
            idProdutosInteresse = idProdutosInteresse.filter(idProduto => idItem !== idProduto)
        } else {
            idProdutosInteresse = [...idProdutosInteresse, idItem]
        }
        setContatoData({
            ...contatoData,
            ["produto_interesse"]: idProdutosInteresse
        })
    }

    const submitForm = (event) => {
        setIsSending(true)
        document.querySelector('#FormContato').reset()
        let produto_interesse = []
        contatoData.produto_interesse.map(id => {
            produto_interesse.push(itensCheckboxList[id])
        })
        contatoData.produto_interesse = produto_interesse
        contatoData.telefone = contatoData.telefone.replace('/[^0-9]/', '')
        contatoData.cpf_cnpj = contatoData.cpf_cnpj.replace('/[^0-9]/', '')

        axios.post(
            process.env.NEXT_PUBLIC_LINK + '/api/forms/contato',
            contatoData
        ).then(response => {
            setIsSending(false)
            if(response.data.msg === "success"){
                window.location.href = `${process.env.NEXT_PUBLIC_LINK}/obrigado`
            } else {
                console.log('erro')
            }
        })

        event.preventDefault()
    }

    return(
        <form id="FormContato" onSubmit={() => submitForm(event)} action="" method="POST" className={`${styles.form} ${isSending ? styles.sending : ''}`}>
            <h3>Entre em contato</h3>
            <Input changeFunction={handlerInputs} required name="nome" label="Nome" type="text" />
            <Input changeFunction={handlerInputs} required name="email" label="Email" type="email" />
            <Input changeFunction={handlerInputs} required name="empresa" label="Empresa" type="text" />
            <Input changeFunction={handlerInputs} required name="cargoContato" label="Cargo" type="text" />
            <Input changeFunction={handlerInputs} required name="endereco" label="Endereço" type="text" />
            <Input changeFunction={handlerInputs} required name="telefone" label="Telefone" type="phone" />
            <Input changeFunction={handlerInputs} required name="cpf_cnpj" label="CNPJ /CPF" type="cpf/cnpj" />
            <CheckboxList changeFunction={handlerCheckboxs} title="Produtos de interesse" items={itensCheckboxList} />
            <Textarea changeFunction={handlerInputs} required name="observacoes" label="Observações" />
            <button type="submit" className={styles.button}>Enviar Agora</button>
            <span>A septi é contra qualquer tipo de span, desta forma não usaremos suas informações de contato para isso.</span>
            <div className={styles.sendDiv}></div>
        </form>
    )
}
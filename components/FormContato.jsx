import styles from '../styles/FormContato.module.scss'
import Input from './Input'
import Textarea from './Textarea'
import CheckboxList from './CheckboxList'
import { useState } from 'react'

export default function FormContato(props){
    
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
        event.preventDefault()
        let produto_interesse = []
        contatoData.produto_interesse.map(id => {
            produto_interesse.push(itensCheckboxList[id])
        })
        contatoData.produto_interesse = produto_interesse

        console.log(contatoData)
    }

    return(
        <form onSubmit={() => submitForm(event)} className={styles.form}>
            <h3>Entre em contato</h3>
            <Input changeFunction={handlerInputs} required name="nome" label="Nome" type="text" />
            <Input changeFunction={handlerInputs} required name="email" label="Email" type="email" />
            <Input changeFunction={handlerInputs} required name="empresa" label="Empresa" type="text" />
            <Input changeFunction={handlerInputs} required name="cargoContato" label="Cargo" type="text" />
            <Input changeFunction={handlerInputs} required name="endereco" label="Endereço" type="text" />
            <Input changeFunction={handlerInputs} required name="telefone" label="Telefone" type="text" />
            <Input changeFunction={handlerInputs} required name="cpf_cnpj" label="CNPJ /CPF" type="text" />
            <CheckboxList changeFunction={handlerCheckboxs} title="Produtos de interesse" items={itensCheckboxList} />
            <Textarea changeFunction={handlerInputs} required name="observacoes" label="Observações" />
            <button type="submit" className={styles.button}>Enviar Agora</button>
            <span>A septi é contra qualquer tipo de span, desta forma não usaremos suas informações de contato para isso.</span>
        </form>
    )
}
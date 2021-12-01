//Criando componente de formulário de contato para ser usado na aplicação

//Importando módulo de estilização
import styles from '../styles/Form.module.scss'

//Importando componentes necessários
import axios from 'axios'
import CheckboxList from './CheckboxList'
import Input from './Input'
import Textarea from './Textarea'

//Importando Hooks necessários
import { useState } from 'react'


//Definindo e exportando o componente
export default function FormContato(props){

    //Estado para controlar se o formulário está sendo enviado
    const [isSending, setIsSending] = useState(false);

    const [errorReq, setErrorReq] = useState("")

    //Deifinindo os items da lista de checkboxs
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

    //Definindo os dados e a tipagem a ser envida via API
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

    const mask = v => {
        v = v.replace(/\D/g, "")
      
        v = v.replace(/^(\d{2})(\d)/, "$1.$2")
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")
        v = v.replace(/(\d{4})(\d)/, "$1-$2")
      
        return v
    }

    //Função para atualizar contatoData sempre que houver mudanças no valor dos inputs
    const handlerInputs = (event) => {
        if(event.target.name === "cpf_cnpj"){
            setContatoData({
                ...contatoData,
                ["" + event.target.name]: mask(event.target.value)
            })
        } else {
            setContatoData({
                ...contatoData,
                ["" + event.target.name]: event.target.value
            })
        }
    }

    //Função para manipular quais checbox estam ativos
    const handlerCheckboxs = (event, idItem) => {
        let idProdutosInteresse = contatoData["produto_interesse"]

        //Se o checbox já está ativo -> desativa | Senão -> Ativa
        if(idProdutosInteresse.includes(idItem)){
            idProdutosInteresse = idProdutosInteresse.filter(idProduto => idItem !== idProduto)
        } else {
            idProdutosInteresse = [...idProdutosInteresse, idItem]
        }

        //Salva os checkboxs ativos em contatoData
        setContatoData({
            ...contatoData,
            ["produto_interesse"]: idProdutosInteresse
        })
    }

    function idCheboxToNameCheckbox() {
        let produto_interesse = []
        contatoData.produto_interesse.map(id => {
            produto_interesse.push(itensCheckboxList[id])
        })
        contatoData.produto_interesse = produto_interesse
    }

    //Função para validar e enviar os dados para API
    const submitForm = (event) => {
        event.preventDefault()
        setIsSending(true)

        //Reseta os inputs do formulário
        document.querySelector('#FormContato').reset()

        //Transforma os IDs de checkbox em textos
        idCheboxToNameCheckbox()
        
        //Retirando caracteres não numéricos de strings numéricas
        contatoData.telefone = contatoData.telefone.replace('/[^0-9]/', '')
        contatoData.cpf_cnpj = contatoData.cpf_cnpj.replace('/[^0-9]/', '')

        //Enviando dados para a API
        axios.post(
            process.env.NEXT_PUBLIC_LINK + '/api/forms/contato',
            contatoData
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

    return(
        <form id="FormContato" onSubmit={() => submitForm(event)} action="" method="POST" className={`${styles.form} ${isSending ? styles.sending : ''}`}>
            <h3>Entre em contato</h3>
            <Input changeFunction={handlerInputs} required name="nome" label="Nome" type="text" />
            <Input changeFunction={handlerInputs} required name="email" label="Email" type="email" />
            <Input changeFunction={handlerInputs} required name="empresa" label="Empresa" type="text" />
            <Input changeFunction={handlerInputs} required name="cargoContato" label="Cargo" type="text" />
            <Input changeFunction={handlerInputs} required name="endereco" label="Endereço" type="text" />
            <Input changeFunction={handlerInputs} required name="telefone" label="Telefone" type="phone" />
            <Input changeFunction={handlerInputs} value={contatoData.cpf_cnpj} required name="cpf_cnpj" label="CNPJ" type="cpf/cnpj" />
            <CheckboxList changeFunction={handlerCheckboxs} title="Produtos de interesse" items={itensCheckboxList} />
            <Textarea changeFunction={handlerInputs} required name="observacoes" label="Observações" />
            <button type="submit" className={styles.button}>Enviar Agora</button>
            {errorReq != "" ?
            <div className={styles.errorDiv}><span>{errorReq}</span></div>
            : ""}
            <span>A septi é contra qualquer tipo de span, desta forma não usaremos suas informações de contato para isso.</span>
            <div className={styles.sendDiv}></div>
        </form>
    )
}
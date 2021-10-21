import styles from '../styles/FormContato.module.scss'
import Input from './Input'
import Textarea from './Textarea'
import CheckboxList from './CheckboxList'

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
    return(
        <form action="" className={styles.form}>
            <h3>Entre em contato</h3>
            <Input name="nomeContato" label="Nome" type="text" />
            <Input name="emailContato" label="Email" type="email" />
            <Input name="empresaContato" label="Empresa" type="text" />
            <Input name="cargoContato" label="Cargo" type="text" />
            <Input name="enderecoContato" label="Endereço" type="text" />
            <Input name="telefoneContato" label="Telefone" type="text" />
            <Input name="cnpjContato" label="CNPJ /CPF" type="text" />
            <CheckboxList title="Produtos de interesse" items={itensCheckboxList}/>
            <Textarea name="observacoesContato" label="Observações" />
            <span>A septi é contra qualquer tipo de span, desta forma não usaremos suas informações de contato para isso.</span>
        </form>
    )
}
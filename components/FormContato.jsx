import styles from '../styles/FormContato.module.scss'

export default function (){
    return(
        <form action="" className={styles.form}>
            <h3>Entre em contato</h3>
            <div className={styles.areainput}>
                <label className={styles.label} htmlFor="">Nome</label>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.areainput}>
                <label className={styles.label} htmlFor="">Email</label>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.areainput}>
                <label className={styles.label} htmlFor="">Empresa</label>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.areainput}>
                <label className={styles.label} htmlFor="">Cargo</label>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.areainput}>
                <label className={styles.label} htmlFor="">Endereço</label>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.areainput}>
                <label className={styles.label} htmlFor="">Telefone</label>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.areainput}>
                <label className={styles.label} htmlFor="">CNPJ/CPF</label>
                <input className={styles.input} type="text" />
            </div>
            <h4>Produtos de interesse</h4>
            <ul className={styles.ulList}>
                <li><input type="checkbox" /><label htmlFor="">Aventais para procedimentos</label></li>
                <li><input type="checkbox" /><label htmlFor="">Aventais cirúrgicos</label></li>
                <li><input type="checkbox" /><label htmlFor="">Aventais para pacientes</label></li>
                <li><input type="checkbox" /><label htmlFor="">Campo cirúrgico</label></li>
                <li><input type="checkbox" /><label htmlFor="">Invólucro para esterilização</label></li>
                <li><input type="checkbox" /><label htmlFor="">Panos e Wipers</label></li>
                <li><input type="checkbox" /><label htmlFor="">Máscara cirúrgica</label></li>
                <li><input type="checkbox" /><label htmlFor="">Macacão descartável</label></li>
                <li><input type="checkbox" /><label htmlFor="">Lençol e fronhas</label></li>
                <li><input type="checkbox" /><label htmlFor="">Toucas e propés</label></li>
                <li><input type="checkbox" /><label htmlFor="">Correlatos em TNT</label></li>
                <li><input type="checkbox" /><label htmlFor="">Outros</label></li>
            </ul>
            <div className={styles.areainput}>
                <label className={styles.label} htmlFor="">Observações: </label>
                <textarea name="" rows="5" className={styles.textarea}></textarea>
            </div>
            <span>A septi é contra qualquer tipo de span, desta forma não usaremos suas informações de contato para isso.</span>
        </form>
    )
}
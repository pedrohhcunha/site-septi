import styles from '../styles/Diferencias.module.scss'

export default function Diferenciais (){
    return (
        <section className={styles.section}>
            <h2 className="fonteBranca">Nossos diferenciais</h2>
            <div className={styles.diferenciais}>
                <div className={styles.diferencial}>
                    <div className={styles.icon}></div>
                    <h3 className="fonteCoral">Compromisso de ponta a ponta</h3>
                    <p className="fonteBranca">Dominar todos os elos da cadeia é a nossa forma de garantir qualidade com custos competitivos.</p>
                    <div className={styles.separator}></div>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.icon}></div>
                    <h3 className="fonteCoral">Proteção com<br/> mais conforto</h3>
                    <p className="fonteBranca">Quem conhece as rotinas de médicos, enfermeiros, demais profissionais da saúde e pacientes.</p>
                    <div className={styles.separator}></div>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.icon}></div>
                    <h3 className="fonteCoral">Capacidade de inovação</h3>
                    <p className="fonteBranca">Pensamos em todos os detalhes para proporcionar a máxima proteção com a melhor usabilidade às pessoas.</p>
                    <div className={styles.separator}></div>
                </div>
            </div>
        </section>
    )
}
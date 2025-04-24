import styles from './styles.module.scss';
export default function Cipher() {
    return (
        <div className={styles.container}>
        

            <div className={styles.content}>
                <div className="wrap_pre cifra-mono cifra_cnt js-cifra_content">
                    <div className="cifra_config js-cifra_config">
                        <span id="cifra_tom">Tom: <a className="js-modal-trigger" href="#" title="alterar o tom">G</a> </span>
                        <span id="cifra_afi">
                            Afinação:
                            <a title="alterar a afinação" className="on js-modal-trigger">E A D G B E</a>
                        </span>
                       
                    </div>
                    <pre className={styles.pre}>[Intro] <b>G</b>  <b>C</b>

                        [Primeira parte]

                        <b>G</b>
                        Tudo está preparado aqui
                        <b>C</b>
                        A casa e o meu coração também
                        <b>G</b>
                        Tu és o único motivo
                        <b>C</b>
                        Que me fez chegar
                        <b>G</b>
                        Os filhos já estão chegando aqui
                        <b>C</b>
                        Agora, somos dois ou três ou mais
                        <b>G</b>
                        Encontre meu coração
                        <b>C</b>
                        Disposto a queimar por ti

                        [Pré-Refrão]

                        <b>G</b>
                        Todos os versos e canções
                        <b>C</b>
                        Que eu conseguir cantar
                        <b>G</b>
                        Todas as vezes quebrantado
                        <b>C</b>
                        Só quero te falar

                        <b>Em</b>         <b>D</b>         <b>C</b>
                        Teu é o reino e a glória pra sempre!
                        <b>Em</b>        <b>D</b>
                        Teu é o domínio e o poder
                    </pre>
                </div>
            </div>
        </div>
    );
}

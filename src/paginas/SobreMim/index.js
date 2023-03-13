import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/capa.png';
import fotoSobreMim from 'assets/sobre.png';

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
        >
            <h3 className={styles.subtitulo}>
                E aí, bão?
            </h3>

            <img
                src={fotoSobreMim}
                alt="My profile"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                        Meu nome é Nikole, tenho 22 anos e sou Analista de Suporte N2 III na Poli.
            </p>
            <p className={styles.paragrafo}>
                        A Poli é uma plataforma de atendimento Omnichannel, parceira oficial do Meta, e oferece aos seus clientes uma solução para unificação dos canais de atendimento, com diversas ferramentas para otimizar a experiência dos clientes, facilitando a comunicação e venda.
            </p>
            <p className={styles.paragrafo}>
                        Atualmente estou cursando Análise e Desenvolvimento de Sistemas. Me interessei por esse curso pouco tempo após me tornar parte da equipe de suporte da Poli, e tenho aprendido muito com minha equipe! Através do Alura, tenho desenvolvido minhas habilidades para que eu possa me tornar também uma desenvolvedora - em breve. 
            </p>
        </PostModelo>
    )
}
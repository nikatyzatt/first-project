import styles from './NaoEncontrada.module.css';
import error404 from 'assets/error.png';
import BotaoPrincipal from 'componentes/BotaoPrincipal';
import { useNavigate } from 'react-router-dom';


export default function NaoEncontrada() {

    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>Not Found</span>

                <h1 className={styles.titulo}>
                    Hummm... O que você tá procurando, hein?!
                </h1>

                <p className={styles.paragrafo}>
                    Não tem nada pra ver aqui, se retire!!!
                </p>

                <div 
                
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                    >
                    <BotaoPrincipal tamanho='lg'>Ok, saindo..</BotaoPrincipal>
                </div>

                <img
                    className={styles.notfound}
                    src={error404}
                    alt='Technical difficulties'
                />

            </div>

        </>

    )
}
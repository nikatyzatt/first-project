import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import perfilPrincipal from 'assets/perfil.jpg';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Oi, galero!
                </h1>
                <p className={styles.paragrafo}>
                    Bem vindos ao meu primeiro projetinho (Uhuuuuul)! 
                    Aqui tem alguns posts sobre mim e meus hobbies. Fique à vontade =) 
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
                />

                <img
                   className={styles.perfilPrincipal}
                   src={perfilPrincipal}
                   alt="Foto da Nik sorrindo bem naturalzinha" 
                />
            </div>
        </div>
    )

}
import styles from './BannerHobbies.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import perfilPrincipal from 'assets/perfil.jpg';

export default function BannerHobbies() {
    return (
        <div className={styles.bannerHobbies}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Hobbies da Nik:
                    conheça mais sobre mim, e minha personalidade =)
                </h1>
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
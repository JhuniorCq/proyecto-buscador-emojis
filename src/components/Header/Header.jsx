import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.backgroundBlur}>
        <h1 className={styles.titulo}>
          BUSCADOR DE EMOJIS <span className={styles.emoji}>🤑</span>
        </h1>
        <p className={styles.parrafo}>Busca y copia tu emoji favorito !</p>
      </div>
    </header>
  );
};

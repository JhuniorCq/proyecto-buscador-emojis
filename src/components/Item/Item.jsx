import styles from "./Item.module.css";

export const Item = ({ name, emoji }) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(emoji);
    };

    return (
        <li className={styles.boxItem}>
            <p className={styles.emoji} onClick={handleCopy}>{emoji}</p>
            <p className={styles.nameEmoji}>{name}</p>
        </li>
    );
};
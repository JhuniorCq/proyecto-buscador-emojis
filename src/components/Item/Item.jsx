import { useState } from "react";
import styles from "./Item.module.css";

export const Item = ({ name, emoji }) => {

    const [emojiCopied, setEmojiCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(emoji);
            setEmojiCopied(true)
            setTimeout(() => {
                setEmojiCopied(false)
            }, 2500);
        } catch(error) {
            console.error("Error al copiar el texto", error.message)
        }
    };

    return (
        <li className={styles.boxItem}>
            <p className={styles.emoji} onClick={handleCopy}>{emoji}</p>
            <p className={styles.nameEmoji}>{name}</p>
            {
                emojiCopied && <p className={styles.messageCopy}>Emoji copiado</p>
            }
        </li>
    );
};
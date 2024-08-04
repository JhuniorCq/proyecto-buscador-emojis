import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import styles from "./Form.module.css";

export const Form = ({ setEmojiValue }) => {

    const [emojiInput, setEmojiInput] = useState("");
    const [emojiError, setEmojiError] = useState(false);

    const handleSearch = (event) => {
        event.preventDefault();

        if(!emojiInput) {
            setEmojiError(true)
            setTimeout(() => {
                setEmojiError(false)
            }, 2000);
            return;
        }

        setEmojiValue(emojiInput);
    }

    const handleInput = ({ target }) => {
        const { value } = target;
        setEmojiInput(value.toLowerCase());
    };

    const showAllEmojis = () => {
        setEmojiValue("");
    };

    return (
        <form onSubmit={handleSearch} className={styles.form} >
            <input className={styles.input} onChange={handleInput} type="text" placeholder="Ingrese un emoji" />
            <button className={styles.buttonSearch}><IoSearch className={styles.iconSearch} /></button>
            <button type="button" className={styles.buttonAll} onClick={showAllEmojis}>Todos los emojis</button>
            {
                emojiError && <p className={styles.messageAlert}>Ingrese un emoji</p>
            }
        </form>
    );
};
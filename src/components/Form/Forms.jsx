import { useState } from "react";
import styles from "./Form.module.css";

export const Form = ({ setEmojiValue }) => {

    const [emojiInput, setEmojiInput] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(emojiInput)
        setEmojiValue(emojiInput);
    }

    const handleInput = ({ target }) => {
        const { value } = target;
        setEmojiInput(value);
    };

    return (
        <form onSubmit={handleSearch} className={styles.boxForm} >
            <input onChange={handleInput} type="text" placeholder="Ingrese un emoji" />
            <button>Buscar</button>
        </form>
    );
};
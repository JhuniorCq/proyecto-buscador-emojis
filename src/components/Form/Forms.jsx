import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import styles from "./Form.module.css";
import { NUMBER_EMOJIS_SECTION } from "../../constants";

export const Form = ({ setEmojiValue, setMinIndex, setMaxIndex }) => {
  const [emojiInput, setEmojiInput] = useState("");
  const [emojiAlert, setEmojiAlert] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();

    if (!emojiInput) {
      setEmojiAlert(true);
      setTimeout(() => {
        setEmojiAlert(false);
      }, 2000);
      return;
    }

    setEmojiValue(emojiInput);
    setMinIndex(0);
    setMaxIndex(NUMBER_EMOJIS_SECTION);
  };

  const handleInput = ({ target }) => {
    const { value } = target;
    setEmojiInput(value.toLowerCase());
  };

  const showAllEmojis = () => {
    setEmojiValue("");
    setMinIndex(0);
    setMaxIndex(NUMBER_EMOJIS_SECTION);
  };

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <input
        className={styles.input}
        onChange={handleInput}
        type="text"
        placeholder="Ingrese un emoji"
      />
      <button className={styles.buttonSearch}>
        <IoSearch className={styles.iconSearch} />
      </button>
      <button
        type="button"
        className={styles.buttonAll}
        onClick={showAllEmojis}
      >
        Todos los emojis
      </button>
      {emojiAlert && <p className={styles.messageAlert}>Ingrese un emoji</p>}
    </form>
  );
};

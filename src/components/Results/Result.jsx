import styles from "./Results.module.css";
import emojiList from "../../emojiList.json"
import { Item } from "../Item/Item";

export const Results = ({ emojiValue }) => {

    const emojiResults = emojiList.filter(emoji => emoji.keywords.includes(emojiValue))

    return (
        <ul className={styles.boxEmojiList}>
            {
                emojiResults.map((emoji, index) => <Item key={index} name={emoji.title} emoji={emoji.symbol} />)
            }
        </ul>
    );
};
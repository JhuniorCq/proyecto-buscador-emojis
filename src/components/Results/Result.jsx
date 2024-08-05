import styles from "./Results.module.css";
import emojiList from "../../emojiList.json";
import { Item } from "../Item/Item";
import { NUMBER_EMOJIS_SECTION } from "../../constants";
import { useEffect, useRef } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";


export const Results = ({ emojiValue, minIndex, setMinIndex, maxIndex, setMaxIndex }) => {
  const emojiResults = emojiList.filter((emoji) =>
    emoji.keywords.includes(emojiValue)
  );

  const sliceResults = emojiResults.slice(minIndex, maxIndex);

  const numberEmojisMissing = useRef();

  const handleNextSeccion = () => {
    if(numberEmojisMissing.current <= 0) return;
    setMinIndex(maxIndex);
    setMaxIndex((currentMax) => currentMax + NUMBER_EMOJIS_SECTION);
    numberEmojisMissing.current -= NUMBER_EMOJIS_SECTION;
  };

  const handleBackSeccion = () => {
    if (minIndex === 0) return;
    setMinIndex((currentMin) => currentMin - NUMBER_EMOJIS_SECTION);
    setMaxIndex((currentMax) => currentMax - NUMBER_EMOJIS_SECTION);
    console.log(`Operación para retroceder: ${numberEmojisMissing.current} + ${NUMBER_EMOJIS_SECTION}`);
    numberEmojisMissing.current += NUMBER_EMOJIS_SECTION;
  };

  useEffect(() => {
    numberEmojisMissing.current = emojiResults.length - NUMBER_EMOJIS_SECTION
  }, [emojiValue]);

  return (
    <div className={styles.boxResults}>
      <div className={styles.boxControlButtons}>
        <IoIosArrowDropleftCircle onClick={handleBackSeccion} className={styles.controlButton} />
        <IoIosArrowDroprightCircle onClick={handleNextSeccion} className={styles.controlButton} />
      </div>
      <ul className={styles.boxEmojiList}>
        {emojiResults.length === 0 ? (
          <div className={styles.messageNotFound}>
            No se encontraron resultados con su búsqueda.
          </div>
        ) : (
          sliceResults.map((emoji, index) => (
            <Item key={index} name={emoji.title} emoji={emoji.symbol} />
          ))
        )}
      </ul>
    </div>
  );
};

import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Forms";
import { Header } from "./components/Header/Header";
import { Results } from "./components/Results/Result";
import { NUMBER_EMOJIS_SECTION } from "./constants";

function App() {
  const [emojiValue, setEmojiValue] = useState("");

  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(NUMBER_EMOJIS_SECTION);

  return (
    <>
      <Header />
      <Form
        setEmojiValue={setEmojiValue}
        setMinIndex={setMinIndex}
        setMaxIndex={setMaxIndex}
      />
      <Results
        emojiValue={emojiValue}
        minIndex={minIndex}
        setMinIndex={setMinIndex}
        maxIndex={maxIndex}
        setMaxIndex={setMaxIndex}
      />
    </>
  );
}

export default App;

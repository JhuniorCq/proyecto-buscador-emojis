
import { useState } from 'react'
import './App.css'
import { Form } from './components/Form/Forms'
import { Header } from './components/Header/Header'
import { Results } from './components/Results/Result';

function App() {

  const [emojiValue, setEmojiValue] = useState("");
  

  return (
    <>
      <Header />
      <Form setEmojiValue={setEmojiValue} />
      <Results emojiValue={emojiValue} />
    </>
  )
}

export default App

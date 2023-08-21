import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [words, setWords] = useState(0);
  const [letters, setLetters] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraph, setParagraph] = useState(0);
  const [spaces, setSpaces] = useState(0);

  useEffect(() => {
    setLetters(input.replaceAll(" ", "").length);
    setWords(input === "" ? 0 : input.split(" ").length);
    setSpaces(input === "" ? 0 : words - 1);
    setSentences(input === "" ? 0 : input.split(".").length);
    setParagraph(
      input === "" ? 0 : input.replace(/\n$/gm, "").split(/\n/).length
    );
  }, [input, words]);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <textarea
        type="text"
        onChange={inputChangeHandler}
        value={input}
        rows={5}
      ></textarea>
      <p>letters: {letters}</p>
      <p>words: {words}</p>
      <p>sentences: {sentences}</p>
      <p>spaces: {spaces}</p>
      <p>paragarph: {paragraph}</p>
    </div>
  );
}

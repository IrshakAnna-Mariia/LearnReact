import { useState } from "react";

function App() {
  const [texts, setTexts] = useState([]);
  const [text, setText] = useState('');

  const handleClickAddText = () => {
    setTexts(prevTexts => [...prevTexts, text]);
    setText('')
  };

  const handleChangeInputText = ({target: {value}}) => setText(value);

  return (
    <div >
      <textarea value={text} onChange={handleChangeInputText}></textarea>
      <button onClick={handleClickAddText} >Добавить</button>
      {texts.map(item => <p key={item} >{item}</p>)}
    </div>
  );
}

export default App;

import { useState } from 'react';

function App() {
  const [texts] = useState(['Первый параграф', 'Второй параграф', 'Третий параграф']);
  const [currentText, setCurrentText] = useState(texts[0]);

  const handleChangeText = ({target: {value}}) => setCurrentText(value);

  return (
    <div >
      <select onChange={handleChangeText} >
        {texts.map(item => <option key={item} >{item}</option>)}
      </select>
      <p>{currentText}</p>
    </div>
  );
}

export default App;

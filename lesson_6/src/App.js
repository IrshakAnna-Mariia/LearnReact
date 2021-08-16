import {useState} from 'react'

function App() {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  return (
    <div >
      <p>Текст: {text}</p>
      <textarea onChange={handleChange} ></textarea>
    </div>
  );
}

export default App;

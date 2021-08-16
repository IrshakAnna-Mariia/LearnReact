import {useState} from 'react'

function App() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase())
  }

  return (
    <div>
      <p>{text}</p>
      <input type='text' defaultValue={''} onChange={handleChange}/>
    </div>
  );
}

export default App;

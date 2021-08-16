import {useState} from 'react'

function App() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(() => e.target.value)
  }

  return (
    <div>
      <input type='text' defaultValue={''} onChange={handleChange}/>
      <p>{text}</p>
    </div>
  );
}

export default App;

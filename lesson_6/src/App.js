import {useState} from 'react'

function App() {
  const [isCheck, setIsCheck] = useState(true);

  const handleChange = () => setIsCheck(prevCheck => !prevCheck);

  return (
    <div >
      {isCheck && <p>Абзац с каким-то текстом</p>}
      <input type='checkbox' onChange={handleChange} checked={isCheck} />
    </div>
  );
}

export default App;

import {useState, useRef} from 'react'
import { format } from 'date-fns'

function App() {
  const [text, setText] = useState('');
  const [year, setYear] = useState()
  const inputEL = useRef();

  const handleChange = (e) => {
    const enteredText = e.target.value;
    const reg = /^[0-9]{0,3}$/
    if (reg.test(enteredText)) {
      setText(enteredText);
      enteredText ? setYear(format(new Date(), 'yyyy') - enteredText) : setYear()
    }
  }

  return (
    <div>
      <p>{year}</p>
      <input ref={inputEL} type='text' value={text} onChange={handleChange}/>
    </div>
  );
}

export default App;

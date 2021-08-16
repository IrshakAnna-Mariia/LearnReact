import {useState, useRef} from 'react'
import { format } from 'date-fns'

function App() {
  const [text, setText] = useState()

  const inputEL = useRef();

  const handleClick = () => {
    setText(inputEL.current.value);
    inputEL.current.value = '';
  };

  return (
    <div>
      <input ref={inputEL} type='text'/>
      <button onClick={handleClick}>Submit</button>
      <p>{text}</p>
    </div>
  );
}

export default App;

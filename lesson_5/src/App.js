import {useState, useRef} from 'react'
import { format } from 'date-fns'

function App() {
  const [summ, setSumm] = useState()

  const inputEL1 = useRef();
  const inputEL2 = useRef();

  const handleClick = () => {
    setSumm(Number(inputEL1.current.value) + Number(inputEL2.current.value));
    inputEL1.current.value = '';
    inputEL2.current.value = '';
  };

  return (
    <div>
      <input ref={inputEL1} type='number'/>
      <input ref={inputEL2} type='number'/>
      <button onClick={handleClick}>Submit</button>
      <p>{summ}</p>
    </div>
  );
}

export default App;

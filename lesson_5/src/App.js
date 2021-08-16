import {useState, useRef} from 'react'
import { format } from 'date-fns'

function App() {
  const [text, setText] = useState()

  const inputEL1 = useRef();
  const inputEL2 = useRef();
  const inputEL3 = useRef();

  const handleClick = () => {
    setText([inputEL1.current.value, inputEL2.current.value, inputEL3.current.value].join(' '));
    inputEL1.current.value = '';
    inputEL2.current.value = '';
    inputEL3.current.value = '';
  };

  return (
    <div>
      <input ref={inputEL2} type='text' placeholder='Имя' />
      <input ref={inputEL1} type='text' placeholder='Фамилия' />
      <input ref={inputEL3} type='text' placeholder='Отчество' />
      <button onClick={handleClick}>Нажми на меня</button>
      <p>{text}</p>
    </div>
  );
}

export default App;

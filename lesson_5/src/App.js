import {useState, useRef} from 'react'
import { format } from 'date-fns'

function App() {
  const [firesName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [patronymic, setPatronymic] = useState()

  const inputEL = useRef();

  const handleChange = (e) => {
    const enteredText = e.target.value.split(' ');
    setLastName(enteredText[0]);
    enteredText.length >= 2 && setFirstName(enteredText[1]);
    enteredText.length >= 3 && setPatronymic(enteredText[2]);
  }

  return (
    <div>
      <input ref={inputEL} type='text' onChange={handleChange}/>
      <p>{lastName}</p>
      <p>{firesName}</p>
      <p>{patronymic}</p>
    </div>
  );
}

export default App;

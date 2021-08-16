import {useState, useRef} from 'react'

function App() {
  const [array, setArray] = useState(['React', 'CSS', 'JavaScript']);

  const numberInput = useRef();

  const handleClickRemove = () => setArray(prevArray => [...prevArray.filter((item, index) => index !== Number(numberInput.current.value))]);

  return (
    <div>
      <ul>
        {array.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
      <input ref={numberInput} type='number' />
      <button onClick={handleClickRemove}>Удалить</button>
    </div>
  );
}

export default App;

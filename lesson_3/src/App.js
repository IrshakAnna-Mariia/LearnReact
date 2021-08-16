import {useState} from 'react';

function App() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('Иван');
  const [age, setAge] = useState(25);

  const handleClick = () => setShow(true);

  return (
    <div>
      {show && <p>имя: {name}, возраст: {age}</p>}
      <button onClick={handleClick}>Нажми на меня</button>
    </div>
  );
}

export default App;

import {useState} from 'react';

function App() {
  const [names, setNames] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима'])

  const handleClick = () => setNames((prevNames) => [...prevNames, 'пункт'])

  return (
    <div>
      <ul>
        {names.map((item) => <li>{item}</li>)}
        <button onClick={handleClick}>Добавить</button>
      </ul>
    </div>
  );
}

export default App;

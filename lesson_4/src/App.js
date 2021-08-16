import {useState} from 'react';

function App() {
  const [names, setNames] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима'])

  const handleClickAdd = () => setNames((prevNames) => [...prevNames, 'пункт'])
  const handleClickDelete = () => setNames((prevNames) => [...prevNames.slice(0, prevNames.length - 1)])

  return (
    <div>
      <ul>
        {names.map((item) => <li key={item}>{item}</li>)}
        <button onClick={handleClickAdd}>Добавить</button>
        <button onClick={handleClickDelete}>Удалить</button>
      </ul>
    </div>
  );
}

export default App;

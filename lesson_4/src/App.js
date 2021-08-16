import {useState} from 'react';

function App() {
  const [names, setNames] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима'])

  const handleClickAdd = () => setNames((prevNames) => [...prevNames, 'пункт'])
  const handleClickDelete = (e) => {
    setNames((prevNames) => [...prevNames.filter((item, index) => item + index !== e.target.value)])
  }

  return (
    <div>
      <ul>
        {names.map((item, index) => (
          <div key={item + index}>
            <li>
              {item}
              <button onClick={handleClickDelete} value={item + index}>Удалить</button>
            </li>
          </div>
        ))}
        <button onClick={handleClickAdd}>Добавить</button>
      </ul>
    </div>
  );
}

export default App;

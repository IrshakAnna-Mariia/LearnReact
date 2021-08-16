import {useState} from 'react';

function App() {
  const [names, setNames] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима'])

  return (
    <div>
      <ul>
        {names.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;

import {useState} from 'react';

function App() {
  const [names, setNames] = useState(['Коля', 'Вася', 'Петя']);

  return (
    <div>
      <ul>
        {names.map((item, index) => <li key={item}>{item} - {index + 1}</li>)}
      </ul>
    </div>
  );
}

export default App;

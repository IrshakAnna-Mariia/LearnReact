import {useState} from 'react';

function App() {
  const [names, setNames] = useState(['Коля', 'Вася', 'Петя']);

  return (
    <div>
      <ul>
        {names.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;

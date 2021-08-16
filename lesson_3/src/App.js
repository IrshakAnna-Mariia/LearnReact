import {useState} from 'react';

function App() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState('Иван');

  return (
    <div>
      {show ? <p>Привет, {name}!</p> : <p>Пока, {name}!</p>}
    </div>
  );
}

export default App;

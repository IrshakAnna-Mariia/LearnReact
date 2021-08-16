import {useState} from 'react'

function App() {
  const [name, setName] = useState('Иван')
  const [age, setAge] = useState(25)

  return (
    <div>
      имя: {name}, возраст: {age}
    </div>
  );
}

export default App;

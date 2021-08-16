import {useState, useRef} from 'react'

function App() {
  const [users, setUsers] = useState(['Александр', 'Давид', 'Максим']);

  const newUserInput = useRef();

  const handleClick = () => {
    const newUser = newUserInput.current.value;
    setUsers((prevUsers) => [...prevUsers, newUser]);
    newUserInput.current.value = '';
  };

  return (
    <div>
      <ul>
        {users.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <input ref={newUserInput}  type='text' />
      <button onClick={handleClick}>Нажми на меня</button>
    </div>
  );
}

export default App;

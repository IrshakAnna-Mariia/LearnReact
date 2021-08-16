import {useState, useRef} from 'react'

function App() {
  const [users, setUsers] = useState(['Александр', 'Давид', 'Максим']);

  const newUserInput = useRef();

  const handleClickAdd = () => {
    const newUser = newUserInput.current.value;
    setUsers((prevUsers) => [...prevUsers, newUser]);
    newUserInput.current.value = '';
  };

  const handleClickDelete = (e) => setUsers((prevUsers) => prevUsers.filter((item, index) => item + index !== e.target.value))

  return (
    <div>
      <ul>
        {users.map((item, index) => (
        <div key={item + index}>
          <li>
            {item}
            <button value={item + index} onClick={handleClickDelete} >Удалить</button>
          </li>
          </div>))}
      </ul>
      <input ref={newUserInput}  type='text' />
      <button onClick={handleClickAdd}>Нажми на меня</button>
    </div>
  );
}

export default App;

import {useState, useRef} from 'react';
import useStyles from './styles'

function App() {
  const [items, setItems] = useState({
    users: [
      { name: 'Коля', age: '30' },
      { name: 'Вася', age: '40' },
      { name: 'Петя', age: '50' },
    ],
    newUser: { name: '', age: '' },
  });

  const classes = useStyles();

  const handleChangeName = (e) => {
    setItems(prevItems => ({
      users: [...prevItems.users],
      newUser: {name: e.target.value, age: prevItems.newUser.age}
    }))
  };
  const handleChageAge = (e) => {
    setItems(prevItems => ({
      users: [...prevItems.users],
      newUser: { name: prevItems.newUser.name, age: e.target.value }
    }))
  };

  const handleClickAdd = () => {
    items.newUser.name && items.newUser.age && setItems(prevItems => ({
      users: [...prevItems.users, {name: prevItems.newUser.name, age: prevItems.newUser.age}],
      newUser: { name: '', age: '' }
    }))
  };

  return (
    <div>
      <table>
        <tbody>
        {items.users.map((item) => (
          <tr key={item.name}>
            <td className={classes.td}>{item.name}</td>
            <td className={classes.td}>{item.age}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <input type='text' value={items.newUser.name} onChange={handleChangeName} placeholder='Имя' />
      <input type='number' value={items.newUser.age} onChange={handleChageAge} placeholder='Возраст' />
      <button onClick={handleClickAdd}>Добавить</button>
    </div>
  );
}

export default App;

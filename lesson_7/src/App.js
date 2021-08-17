import {useState} from 'react';

function App() {
  const [users, setUsers] = useState([
    {name: 'Коля', surname: 'Иванов', age: 30, visible: true},
    {name: 'Вася', surname: 'Петров', age: 40, visible: true},
    {name: 'Петя', surname: 'Сидоров', age: 50, visible: true},
  ])

  const handleChangeVisible = ({target: {name}}) => {
    setUsers(prevUsers => prevUsers.map(item => item.surname !== name ? item : 
      { name: item.name, surname: item.surname, age: item.surname, visible: !item.visible}))
  }

  return (
    <div>
      {users.map(item => <div key={item.surname}>
          <input type='checkbox' name={item.surname} checked={item.visible} onChange={handleChangeVisible}/>
          {item.name} {item.visible && [item.surname, (item.age)].join(' ')}
        </div>
      )}
    </div>
  );
}

export default App;

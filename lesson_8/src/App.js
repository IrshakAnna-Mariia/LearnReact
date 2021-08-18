import {useState} from 'react';
import TableTr from './components/TableTr';

function App() {
  const [users, setUsers] = useState([
    { name: 'David', surname: 'Dubliakov', age: 18 },
    { name: 'Alex', surname: 'Kostenko', age: 22 },
    { name: 'Bodya', surname: 'Zavgorodskiy', age: 22 },
  ])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Surname </th>
            <th> Age </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <TableTr name={user.name} surname={user.surname} age={user.age}/>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;

import {useState} from 'react';
import UserInfoTableRow from './components/UserInfoTableRow';

import usersList from './constants/usersList';

function App() {
  const [users] = useState(usersList);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th> id </th>
            <th> firstName </th>
            <th> lastName </th>
            <th> age </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <UserInfoTableRow
                key={user.firstName} 
                id={index + 1} 
                firstName={user.firstName} 
                lastName={user.lastName}
                age={user.age}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;

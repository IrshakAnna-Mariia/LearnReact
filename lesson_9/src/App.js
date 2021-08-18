import {useState} from 'react';
import UserInfoTableRow from './components/UserInfoTableRow';

import usersList from './constants/usersList';

function App() {
  const [users] = useState(usersList);

  const showMessage = () => alert('!');

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
                link={user.link}
                onClickLink={showMessage}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;

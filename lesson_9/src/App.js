import {useState} from 'react';
import UserInfoTableRow from './components/UserInfoTableRow';

import usersList from './constants/usersList';
import useStyle from './styles';

function App() {
  const [users, setUsers] = useState(usersList);

  const classes = useStyle();

  const deleteUser = (userId) => {
    setUsers(prevUsers=> prevUsers.filter(user => user.id !== userId));
  };

  return (
    <div className="App">
      <table className={classes.table}>
        <thead>
          <tr>
            {Object.keys(users[0]).map(key => (
              <th className={classes.tableCell} key={key}> {key} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <UserInfoTableRow
                key={user.firstName} 
                id={user.id} 
                firstName={user.firstName} 
                lastName={user.lastName}
                age={user.age}
                link={user.link}
                onClickLink={deleteUser}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;

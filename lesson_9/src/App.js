import {useState} from 'react';
import UserInfoTableRow from './components/UserInfoTableRow';

import usersList from './constants/usersList';
import useStyle from './styles';

function App() {
  const [users] = useState(usersList);

  const classes = useStyle();

  const showMessage = (userId) => alert(userId);

  return (
    <div className="App">
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.tableCell}> id </th>
            <th className={classes.tableCell}> firstName </th>
            <th className={classes.tableCell}> lastName </th>
            <th className={classes.tableCell}> age </th>
            <th className={classes.tableCell}> link </th>
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

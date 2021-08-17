import {useState} from 'react';
import useStyles from './styles';

function App() {
  const [users, setUsers] = useState([
    { name: 'Коля', age: 30 },
    { name: 'Вася', age: 40 },
    { name: 'Петя', age: 50 },
  ]);
  const [visibleInputs, setVisibleInputs] = useState([]);
  const [inputText, setInputText] = useState({name: '', value: ''})

  const classes = useStyles();

  const handleClickEdit = ({target: {name}}) => {
    if (visibleInputs.find(el => el === name)) {
      console.log(inputText.name, name)
      if (inputText.name === name){
        setUsers(prevUsers => prevUsers.map(item => item.name !== name ? item : { name, age: inputText.value }))
        setVisibleInputs(prevList => prevList.filter(item => item !== name))
      }
    } else setVisibleInputs(prevList => [...prevList, name]);
  }

  const handleChangeInputText = ({target: {name, value}}) => setInputText({name, value})

  return (
    <div>
      <table>
        <tbody>
          {users.map(item => (
            <tr key={item.name} >
              <td className={classes.td}>{item.name}</td>
              <td className={classes.td}>
                {item.age}
                <button name={item.name} onClick={handleClickEdit}>Редактировать</button>
                {visibleInputs.find(el => el === item.name) 
                && <input type='number' name={item.name} onChange={handleChangeInputText}/>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

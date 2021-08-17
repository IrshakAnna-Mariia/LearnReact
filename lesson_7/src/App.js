import {useState} from 'react';
import InputText from './InputText';

function App() {
  const [workers, setWorkers] = useState([
    { name: 'John', surname: 'Robertson', salary: 100, gender: 'Male' },
    { name: 'David', surname: 'Dubliakow', salary: 200, gender: 'Male' },
    { name: 'Ben', surname: 'Smith', salary: 300, gender: 'Male' },
  ]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [salary, setSalary] = useState('');
  const [gender, setGender] = useState('Male');

  const onChangeText = (name, value) => {
    switch (name) {
      case 'Name':
        setName(value);
        break;
      case 'Second name':
        setSurname(value);
        break;
      case 'Salary':
        setSalary(value);
        break;
    
      default:
        break;
    }
  }

  const handleChangeGender = ({target: {value}}) => setGender(value);

  const handleAdd = () => setWorkers(prevWorkers => prevWorkers.concat({ name, surname, salary, gender}))

  return (
    <div>
      <table>
        <tbody>
          {workers.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.salary}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br/>

      <InputText name='Name' onChange={onChangeText}/>
      <InputText name='Second name' onChange={onChangeText}/>
      <InputText name='Salary' onChange={onChangeText}/>
      <div>
        Gender:
        <select onChange={handleChangeGender}>
          <option>Male</option>
          <option>Female</option>
        </select>
        </div>
      <button onClick={handleAdd}>Add emplayee</button>
    </div>
  );
}

export default App;

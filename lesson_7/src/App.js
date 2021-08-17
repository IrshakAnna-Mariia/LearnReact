import {useState} from 'react';

function App() {
  const [workers, setWorkers] = useState([
    { name: 'Roberto', surname: 'Carlos', salary: 1000 },
    { name: 'Dan', surname: 'Williams', salary: 2000 },
    { name: 'Anna', surname: 'Gomes', salary: 4000 }
  ])

  const handleSortForName = () => setWorkers(prevWorekers => [...prevWorekers.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })]);

  const handleSortForSurname = () => setWorkers(prevWorekers => [...prevWorekers.sort((a, b) => {
    const surnameA = a.surname.toUpperCase();
    const surnameB = b.surname.toUpperCase();
    if (surnameA < surnameB) {
      return -1;
    }
    if (surnameA > surnameB) {
      return 1;
    }
    return 0;
  })]);

  const handleSortForSalary = () => setWorkers(prevWorekers => [...prevWorekers.sort((a, b) => a.salary - b.salary)]);


  return (
    <div>
      <table>
        <tbody>
          {workers.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.salary}</td>
            </tr>
          ))}
          <tr>
            <td><button onClick={handleSortForName}>Sort</button></td>
            <td><button onClick={handleSortForSurname}>Sort</button></td>
            <td><button onClick={handleSortForSalary}>Sort</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

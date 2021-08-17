import {useState} from 'react';

function App() {
  const [workers, setWorkers] = useState([
    { name: 'John', lastName: 'Robertson', salary: 100, checked: true },
    { name: 'David', lastName: 'Dubliakov', salary: 200, checked: true },
    { name: 'Ben', lastName: 'Smith', salary: 300, checked: true },
  ]);
  const sum = workers.map(item => item.checked && item.salary).reduce((prev, curr) => prev + curr, 0);

  const handleChangeChecked = ({ target: { name } }) => {
    setWorkers(prevWorkers => prevWorkers.map(item => 
      item.name !== name ? item : { name, lastName: item.lastName, salary: item.salary, checked: !item.checked }));
  }

  return (
    <div>
      <table>
        <thead>
          {workers.map(item => (
            <tr key={item.lastName}>
              <td>
                <input 
                  type='checkbox' 
                  checked={item.checked} 
                  name={item.name}
                  onChange={handleChangeChecked}
                />
              </td>
              <td>{item.mane}</td>
              <td>{item.lastName}</td>
              <td>{item.salary}</td>
            </tr>
          ))}
        </thead>
      </table>
      <p>{sum}</p>
    </div>
  );
}

export default App;

import {useState} from 'react';

function App() {
  const [names, setNames] = useState([
    {name: 'David', checked: false}, 
    {name: 'Alex', checked: false},
    {name: 'Bodya', checked: false}
  ]);

  const handleChengeDecoration = ({target: {name}}) => setNames(prevNames => {
    return prevNames.map(item => name !== item.name ? item : {name, checked: !item.checked})
  })

  return (
    <div>
      <ul>
        {names.map(item => (
          <li 
            key={item.name}
            style={{textDecoration: item.checked ? 'line-through': 'none'}} 
          >
            <input name={item.name} onChange={handleChengeDecoration} type='checkbox'/>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

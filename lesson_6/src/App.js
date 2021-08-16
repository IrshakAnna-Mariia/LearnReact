import {useState} from 'react'

function App() {
  const [isCheck, setIsCheck] = useState('false');

  const handleChange = (e) => setIsCheck(e.target.checked.toString());

  return (
    <div >
      <p>{isCheck}</p>
      <input type='checkbox' onChange={handleChange} />
    </div>
  );
}

export default App;

import { useState } from 'react';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeChecked = () => setIsChecked(prevCheck => !prevCheck);

  return (
    <div>
      <input type='checkbox' value={isChecked} onChange={handleChangeChecked} />
      <input type='text' disabled={!isChecked} />
    </div>
  );
}

export default App;

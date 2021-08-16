import { useState } from "react";

function App() {
  const [number, setNumber] = useState(1);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <p>{number}</p>
      <input
        type="radio"
        value="1"
        name="test"
        defaultChecked={number}
        onChange={handleChange}
      />
      <input
        type="radio"
        value="2"
        name="test"
        onChange={handleChange}
      />
      <input
        type="radio"
        value="3"
        name="test"
        onChange={handleChange}
      />
    </div>
  );
}

export default App;

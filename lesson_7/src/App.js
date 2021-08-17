import {useState} from 'react';

function App() {
  const [texts, setTexts] = useState([
    {text: 'Paragraf 1', visible: true},
    {text: 'Paragraf 2', visible: true},
    {text: 'Paragraf 3', visible: true},
  ])

  const handleChangeVisible = ({target: {name}}) => setTexts(prevTexts => 
    prevTexts.map(item => item.text !== name ? item : { text: name, visible: !item.visible}
  ))

  return (
    <div>
      {texts.map(item => <div key={item.text}>
          <input type='checkbox' name={item.text} checked={item.visible} onChange={handleChangeVisible}/>
          {item.visible && <p>{item.text}</p>}
        </div>
      )}
    </div>
  );
}

export default App;

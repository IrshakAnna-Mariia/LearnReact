import {useState} from 'react';

function App() {
  const [items, setItems] = useState(['David', 'Boghdan', 'Alex']);
  const [currentText, setCurrentText] = useState({value: '', name: ''})
  const [visibleList, setVisibleList] = useState([]);

  const handleClickAppearInput = ({ target }) => {
    const name = target.getAttribute('name');
    visibleList.find(el => el === name) 
    ? setVisibleList(prevList => prevList.filter(item => item !== name)) 
    : setVisibleList(prevList => [...prevList, name]);
  }

  const handleChangeText = ({target: {name, value}}) => setCurrentText({name, value});

  const handleBlurInput = () => {
    visibleList.find(el => el === currentText.name)
      ? setVisibleList(prevList => prevList.filter(item => item !== currentText.name))
      : setVisibleList(prevList => [...prevList, currentText.name]);
    setItems(prevItems => prevItems.map(item => item !== currentText.name ? item : currentText.value));
  }

  return (
    <div>
      <ul>
        {items.map(item => (
        <li key={item} >
            <p 
              name={item} 
              onClick={handleClickAppearInput}
              style={{display: 'inline'}}
            >{item}</p>
          <input 
            type='text' 
            name={item}
            onChange={handleChangeText}
            onBlur={handleBlurInput}
            style={{ display: visibleList.find(el => el === item) ? 'inline' : 'none' }}
          />
        </li>))}
      </ul>
    </div>
  );
}

export default App;

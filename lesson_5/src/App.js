import {useState, useRef} from 'react'

function App() {
  const [hrefs, setHrefs] = useState([
    { href: '1.html', text: 'ссылка 1' },
    { href: '2.html', text: 'ссылка 2' },
    { href: '3.html', text: 'ссылка 3' },
    ]);

  const hrefInput = useRef();
  const textInput = useRef();

  const handleClickAdd = () => {
    setHrefs(prevHrefs => [...prevHrefs, {
      href: hrefInput.current.value, 
      text: textInput.current.value
    }])
  };

  return (
    <div>
      <ul>
        {hrefs.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
      <input ref={hrefInput} type='text' placeholder='Ссылка' />
      <input ref={textInput} type='text' placeholder='Текст' />
      <button onClick={handleClickAdd}>Добавить</button>
    </div>
  );
}

export default App;

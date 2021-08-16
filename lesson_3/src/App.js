import {useState} from 'react';

function App() {
  const [hrefs, setHrefs] = useState([
    { href: '1.html', text: 'ссылка 1' },
    { href: '2.html', text: 'ссылка 2' },
    { href: '3.html', text: 'ссылка 3' },
  ]);

  return (
    <div>
      <ul>
        {hrefs.map((item) => <li key={item}><a href={item.href}>{item.text}</a></li>)}
      </ul>
    </div>
  );
}

export default App;

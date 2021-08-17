import {useState} from 'react';
import {format} from 'date-fns'

function App() {
  const [notes, setNotes] = useState([
    { text: 'First note', time: format(new Date(), "dd/MM/yyyy, HH:mm:ss") },
    { text: 'Second note', time: format(new Date(), "dd/MM/yyyy, HH:mm:ss") }
  ])
  const [textAdd, setTextAdd] = useState('');
  const [input, setInput] = useState({name: '', value: '', visible: false})

  const handleSetText = ({target: {value}}) => setTextAdd(value);

  const handleAddNote = () => {
    setNotes(prevNotes => prevNotes.concat({ text: textAdd, time: format(new Date(), "dd/MM/yyyy, HH:mm:ss")}));
    setTextAdd('')
  };

  const handleDelete = ({target: {value}}) => setNotes(prevNotes => prevNotes.filter(({text}) => text !== value ));

  const handleEdit = ({target: {name}}) => {
    name !== input.name && setInput({ name, value: '', visible: true })
    if (input.value) {
      setNotes(prevNotes => prevNotes.map((item) => item.text !== input.name ? item : {text: input.value, time: item.time}));
    }
  };

  const handleEditText = ({ target: { value, name } }) => setInput({ name, value, visible: true })

  return (
    <div>
      {notes.map((item, index) => (
        <div key={item.text}>
          <h1>Note {index + 1}</h1>
          <p>{item.text}</p>
          <p>Create time: {item.time}</p>
          <button name={item.text} onClick={handleEdit} >Edit</button>
          {item.text === input.name && input.visible 
            && <input name={item.text} onChange={handleEditText}/>
          }
          <button value={item.text} onClick={handleDelete}>Delete</button>
        </div>
      ))}

      <textarea value={textAdd} onChange={handleSetText}/>
      <button onClick={handleAddNote}>Add</button>
    </div>
  );
}

export default App;

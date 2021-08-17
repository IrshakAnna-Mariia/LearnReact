import {useState} from 'react';
import { format, eachDayOfInterval} from 'date-fns';
import {uk} from 'date-fns/locale';

function App() {
  const [daysOfWeek] = useState(eachDayOfInterval({
    start: new Date(2021, 7, 16),
    end: new Date(2021, 7, 22)
  }));
  const [formatedDays, setFormatedDays] = useState(daysOfWeek.map(item => format(item, 'EEEE')));

  const handleChangeLanguage = ({target: {value}}) => {
    switch (value) {
      case 'English':
        setFormatedDays(daysOfWeek.map(item => format(item, 'EEEE')));
        break;
      case 'Ukrainian':
        setFormatedDays(daysOfWeek.map(item => format(item, 'EEEE', {locale: uk})));
        break;
    
      default:
        break;
    }
  }

  return (
    <div>
      <select onChange={handleChangeLanguage}>
        <option>English</option>
        <option>Ukrainian</option>
      </select>
        
      <select>
        {formatedDays.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default App;

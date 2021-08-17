import { useState } from 'react';
import {format, getDaysInMonth} from 'date-fns';
import {uk} from 'date-fns/locale';

function App() {
  const [data, setData] = useState(format(new Date(), 'EEEE', {locale: uk}));

  const [currentDay, setCurrenDay] = useState(format(new Date(), 'd'))
  const [currentMonth, setCurrenMonth] = useState(format(new Date(), 'M'))
  const [currentYear, setCurrenYear] = useState(format(new Date(), 'yyyy'))

  const [days, setDays] = useState(setDaysInMonth(currentYear, currentMonth));
  const [months] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [years] = useState([
    format(new Date(+format(new Date(), 'yyyy') - 2, 1, 1), 'yyyy'),
    format(new Date(+format(new Date(), 'yyyy') - 1, 1, 1), 'yyyy'),
    format(new Date(), 'yyyy'),
    format(new Date(+format(new Date(), 'yyyy') + 1, 1, 1), 'yyyy')
  ]);

  const handleChangeData = ({target: {value, name}}) => {
    switch (name) {
      case 'day':
        setCurrenDay(value);
        setData(format(new Date(currentYear, +currentMonth - 1, value), 'EEEE', { locale: uk }));
        break;

      case 'month':
        setCurrenMonth(value);
        setData(format(new Date(currentYear, +value - 1, currentDay), 'EEEE', { locale: uk }));
        setDays(setDaysInMonth(currentYear, value));
        break;

      case 'year':
        setCurrenYear(value);
        setData(format(new Date(value, +currentMonth - 1, currentDay), 'EEEE', { locale: uk }));
        setDays(setDaysInMonth(value, currentMonth));
        break;
    
      default:
        break;
    }
  }

  return (
    <div>
      <select name='day' value={currentDay} onChange={handleChangeData} >
        {days.map(item => <option key={item}>{item}</option>)}
      </select>

      <select name='month' value={currentMonth} onChange={handleChangeData} >
        {months.map(item => <option key={item}>{item}</option>)}
      </select>

      <select name='year' value={currentYear} onChange={handleChangeData} >
        {years.map(item => <option key={item}>{item}</option>)}
      </select>

      <p>{data}</p>
    </div>
  );
}

function setDaysInMonth(currentYear, currentMonth){
  const arr = [];
  const dayInMonth = getDaysInMonth(new Date(currentYear, currentMonth - 1));
  for (let i = 0; i < dayInMonth; i++) arr.push(i + 1);
  return arr;
}

export default App;

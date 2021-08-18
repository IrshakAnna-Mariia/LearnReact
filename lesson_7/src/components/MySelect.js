import {useState} from 'react';

const MySelect = ({onChange}) => {
  const [options] = useState([10, 15, 20]);

  const handleChangeOption = ({target: {value}}) => onChange(value);

  return (
    <select onChange={handleChangeOption}>
      {options.map(item => <option key={item}>{item}</option>)}
    </select>
  )
}
export default MySelect;

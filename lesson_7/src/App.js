import {useState} from 'react';

function App() {
  const [currencies] = useState([
    {name: 'Euro', exchangeRate: 1},
    {name: 'Dolar', exchangeRate: 1.17},
    {name: 'Hryvnia', exchangeRate: 31.25}
  ]);
  const [convertData, setConvertData] = useState({
    from: 'Dolar',
    to: 'Hryvnia',
    convertNumber: 0,
    result: ''
  })

  const handleChangeConvertNumber = ({target: {value}}) => {
    setConvertData(({ from, to, result }) => ({ from, to, convertNumber: value, result}))
  }
  console.log(convertData.result)

  const handleCovertData = () => {
    setConvertData(({ from, to, convertNumber }) => ({ from, to, convertNumber, result: getConvertCurrencies(currencies, convertData).toFixed(2)}));
  }

  const handleConverFrom = ({target: {value}}) => {
    setConvertData(({ to, convertNumber, result }) => ({ from: value, to, convertNumber, result }));
  }

  const handleConverTo = ({ target: { value } }) => {
    setConvertData(({ from, convertNumber, result }) => ({ from, to: value, convertNumber, result }));
  }

  return (
    <div>
      <input onChange={handleChangeConvertNumber}/>

      From: 
      <select value={convertData.from} onChange={handleConverFrom}>
        {currencies.map(({name}) => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>

      To: 
      <select value={convertData.to} onChange={handleConverTo}>
        {currencies.map(({ name }) => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>

      <button onClick={handleCovertData}> Convert </button>

      <p>{convertData.result}</p>
    </div>
  );
}

function getConvertCurrencies(exchangeRateList, convertData) {
  switch (convertData.from) {
    case 'Euro':
      const exchangeRate = exchangeRateList.find(currencies => currencies.name === convertData.to).exchangeRate;
      return +convertData.convertNumber * exchangeRate;
  
    default:
      const exchangeRateToEuro = exchangeRateList.find(currencies => currencies.name === convertData.from).exchangeRate;
      const exchangeRateToSearch = exchangeRateList.find(currencies => currencies.name === convertData.to).exchangeRate;
      return +convertData.convertNumber / exchangeRateToEuro * exchangeRateToSearch;
  }
}

export default App;

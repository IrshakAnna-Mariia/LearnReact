import {useState} from 'react';
import ListItem from './components/LiItem';

function App() {
  const [dataList, setDataList] = useState(['HTML5', 'CSS3', 'JavaScript', 'React']);

  const editData = (name, newValue) => {
    setDataList(prevData => prevData.map(item => item !== name ? item : newValue));
  };

  return (
    <div>
      <ul>
        {dataList.map(dataItem => (
          <ListItem name={dataItem} onEdit={editData} key={dataItem}/>
        ))}
      </ul>
    </div>
  );
}

export default App;

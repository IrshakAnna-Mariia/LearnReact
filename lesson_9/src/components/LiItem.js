import {useState} from 'react';

const ListItem = ({name, onEdit}) => {
  const [isEditRun, setEditRun] = useState(false);

  const handleClickEditButton = () => setEditRun(true);

  const handleBlurEdit = ({target: {value}}) => {
    onEdit(name, value);
    setEditRun(false);
  };

  return (
    <li>
      {name}
      {
      isEditRun 
          ? <textarea onBlur={handleBlurEdit}/>
        : <button onClick={handleClickEditButton}>Edit</button>
      }
    </li>
  )
}

export default ListItem;

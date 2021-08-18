import React from 'react';

const MyButton = ({name, onClick, className}) => {
  const handleClickButton = () => onClick(name);

  return (
    <button className={className} onClick={handleClickButton}>
      {name}
    </button>
  )
}

export default MyButton;

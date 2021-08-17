import { useState } from 'react';

const InputText = ({name, onChange}) => {
  const handleChange = ({target: {value}}) => onChange(name, value);

  return (
    <div>
      {name}:
      <input onChange={handleChange} />
    </div>
  )
}

export default InputText

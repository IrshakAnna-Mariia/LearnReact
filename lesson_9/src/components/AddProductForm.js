import { useState } from 'react';

const AddProductForm = ({onAdd}) => {
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
    number: ''
  })

  const handleChangeName = ({target: { value }}) => {
    setNewProduct(({ price, number }) => ({ id: value, name: value, price, number }))
  };

  const handleChangePrice = ({ target: { value } }) => {
    setNewProduct(({ id, name, number }) => ({ id, name, price: value, number }))
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNewProduct(({ id, name, price }) => ({ id, name, price, number: value }))
  };

  const handleAdd = () => {
    onAdd(newProduct);
    setNewProduct({id: '', name: '', price: '', number: ''});
  };

  return (
    <div>
      <p>Name</p>
      <input onChange={handleChangeName} type='text'/>

      <p>Price</p>
      <input onChange={handleChangePrice} type='number'/>

      <p>Quantity</p>
      <input onChange={handleChangeNumber} type='number'/>

      <br/>
      <button onClick={handleAdd}>Add product</button>
    </div>
  )
}

export default AddProductForm;

import { useState } from 'react';

const AddProductForm = ({onAdd}) => {
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
    number: ''
  })

  const handleChangeName = ({target: { value }}) => {
    setNewProduct(({ price, number }) => ({ id: value, name: value, price, number, checked: true }))
  };

  const handleChangePrice = ({ target: { value } }) => {
    setNewProduct(({ id, name, number }) => ({ id, name, price: value, number, checked: true }))
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNewProduct(({ id, name, price }) => ({ id, name, price, number: value, checked: true }))
  };

  const handleAdd = () => {
    onAdd(newProduct);
    setNewProduct({id: '', name: '', price: '', number: ''});
  };

  return (
    <div>
      <p>Name</p>
      <input value={newProduct.name} onChange={handleChangeName} type='text'/>

      <p>Price</p>
      <input value={newProduct.price}onChange={handleChangePrice} type='number'/>

      <p>Quantity</p>
      <input value={newProduct.number}onChange={handleChangeNumber} type='number'/>

      <br/>
      <button onClick={handleAdd}>Add product</button>
    </div>
  )
}

export default AddProductForm;

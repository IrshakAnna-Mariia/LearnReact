const ProductTableRow = ({name, price, number, id, onDelete, onCheck}) => {

  const handleDelete = () => onDelete(id);

  const handleChangeCheck = ({ target: { checked } }) => onCheck(id, checked);

  return (
    <tr>
      <td><input defaultChecked={true} onChange={handleChangeCheck} type='checkbox'/></td>
      <td> {name} </td>
      <td> {price} </td>
      <td> {number} </td>
      <td> {price * number} </td>
      <td>
        <button onClick={handleDelete}>Delete product</button>
      </td>
    </tr>
  )
}

export default ProductTableRow;

const ProductTableRow = ({name, price, number, id, onDelete}) => {

  const handleDelete = () => onDelete(id);

  return (
    <tr>
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

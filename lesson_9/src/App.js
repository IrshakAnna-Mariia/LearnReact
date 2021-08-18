import {useState} from 'react';
import AddProductForm from './components/AddProductForm';
import ProductTableRow from './components/ProductTableRow';
import SumPrice from './components/SumPrice';
import productList from './constants/product';

function App() {
  const [products, setProducts] = useState(productList);

  const deleteProdact = (id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  }

  const checkedProduct = (gettedId, isChecked) => {
    setProducts(prevProducts => prevProducts.map(product => {
      const {id, name, price, number} = product;
      return product.id !== gettedId ? product : ({ id, name, price, number, checked: isChecked});
    }));
  }

  const onAddProduct = (newProduct) => {
    setProducts(prevProducts => prevProducts.concat(newProduct));
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td></td>
            <td> Name </td>
            <td> Price </td>
            <td> Number of products </td>
            <td> Sum </td>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductTableRow 
              key={product.id}
              id={product.id}
              name={product.name} 
              price={product.price}
              number={product.number}
              onDelete={deleteProdact}
              onCheck={checkedProduct}
            />
          ))}
        </tbody>
      </table>

      <SumPrice priceArr={products.filter(({checked}) => checked).map(({price, number}) => ({price, number}))}/>

      <AddProductForm onAdd={onAddProduct}/>
    </div>
  );
}

export default App;

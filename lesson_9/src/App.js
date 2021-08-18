import {useState} from 'react';
import ProductTableRow from './components/ProductTableRow';
import productList from './constants/product';

function App() {
  const [products, setProducts] = useState(productList);

  const deleteProdact = (id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

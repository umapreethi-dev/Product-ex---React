import logo from './logo.svg';
import './App.css';
import productData from './vschoolProduct'
import Product from './Product'

function App() {
 const productComponent = productData.map(product =>{
   return (
     <Product key={product.id} name={product.name} price={product.price} description={product.description}/>
   )
 })


  return (
    <div>
      {productComponent}
    </div>
  );
}

export default App;

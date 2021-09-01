import './App.css'

function Product(props){
    return (
      <div class="body">
          <h1>{props.name}</h1>
          <p>${props.price}- {props.description}</p>
          <hr />
       </div>
    )
}

export default Product;
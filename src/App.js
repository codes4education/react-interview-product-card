import React, {useState} from "react";
import "./App.css";
import useFetch from "./utils/useFetch";
import ProductCard from "./component/ProductCard";

function App() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  const { data: products, loading, error } = useFetch(); 

  const handleAddToCart = (product, quantity) => {
    const existingProduct = cart.find((item)=> item.id === product.id);
    let updatedCart;

    if(existingProduct){
      updatedCart = cart.map((item)=> item.id === product.id ? {...item, quantity:item.quantity + quantity} : item)
    }else{
      updatedCart = [...cart, {...product, quantity}];
    }

    setCart(updatedCart);

    const previousQuantity = existingProduct ? existingProduct.quantity : 0;
    const updatedQuantity = previousQuantity + quantity;

    setNotification(
      `You added "${product.name}" to your cart. Quantity: ${updatedQuantity}`
    )

    setTimeout(()=>{
      setNotification("");
    },3000)
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="App">
      {
        notification && <div className="notification">{notification}</div>
      }

      <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={(quantity)=>handleAddToCart(product, quantity)} />
      ))}
      </div> 

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        {cart.map((item)=>(
          <div key={item.id}>
            {item.name}: {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

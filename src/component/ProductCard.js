import {useState} from 'react';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const ProductCard = ({product, onAddToCart}) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (value) => {
        if(quantity + value > 0){
            setQuantity(quantity + value);
        }
    }

    const handleAddToCartClick = () => {
        onAddToCart(quantity)
    }
  return (
    <div className="product-card">
        <img src={product.imageUrl} alt={product.name} className="product-image" />

        <div className="product-content">
            <h2>{product.name}</h2>
            <p>{product.description}</p>

            <div className="price-delivery">
                <div className="price-section">
                    <span>Quantity</span>
                    <div className="quantity-control">
                        <div className="icons" onClick={()=> handleQuantityChange(-1)}><FaMinus/></div>
                        <div className="quantity-value">{quantity}</div>
                        <div className="icons" onClick={() => handleQuantityChange(1)}><FaPlus /></div>
                    </div>
                </div>
                <div className="price-section">
                    <span>Total Price</span> ₹{product.price * quantity}
                </div>
                <div className="price-section">
                    <span>Delivery</span> {product.deliveryTime}
                </div> 
            </div>
            <button className="add-to-cart" onClick={handleAddToCartClick}>Add to Cart</button>
        </div>

    </div>
  )
}

export default ProductCard
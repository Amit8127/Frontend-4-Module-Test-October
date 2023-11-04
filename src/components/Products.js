import React, { useState,useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../actions/cartActions";
import axios from "axios";



const Products = ({handleAddProduct}) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://dummyjson.com/products';
    axios.get(apiUrl)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array makes this effect run once after mounting


      return (
        <div>
      <h2 className="hading">All Items</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddProduct(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
      );










//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products);
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   useEffect(() => {
//     axios.get("https://dummyjson.com/products").then((response) => {
//       dispatch({ type: "SET_PRODUCTS", payload: response.data });
//     });
//   }, [dispatch]);

//   return (
//     <div>
//       <h2>Products</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.title} - ${product.price}
//             {/* {cartItems.find((item) => item.id === product.id) ? (
//               <span> (Added to cart)</span>
//             ) : (
//               <button onClick={() => dispatch(addToCart(product))}>
//                 Add to Cart
//               </button>
//             )} */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
};

export default Products;

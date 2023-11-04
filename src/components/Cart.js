import React from "react";

const Cart = ({ cartItems, handleRemoveProduct }) => {
  return (
    <div className="cart">
      <h2 className="cart-items-header"> Cart Items</h2>
      {cartItems.length === 0 && (
        <div className="cart-items-empty"> Your Cart is Empty...</div>
      )}
      <div className="body">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-list">
              <img src={item.thumbnail} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <div className="cart-item-function">
                <button
                  className="cart-items-remove"
                  onClick={() => handleRemoveProduct(item)}
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="side-cart">
          <h2>Checkout List</h2>
          <div className="list">
            {cartItems.map((item) => (
              <div key={item.id} className="item">
                <p>1.{item.title}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
          <hr></hr>
          <h3>Total</h3>
          <hr></hr>
          <button>Click To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

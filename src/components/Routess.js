import React from 'react'
import Products from './Products';
import Cart from './Cart';
import { Routes ,Route } from 'react-router-dom';

const Routess = ({cartItems, handleAddProduct, handleRemoveProduct}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Products handleAddProduct={handleAddProduct} /> }></Route>
            <Route path='/cart' element={ <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/> }></Route>
        </Routes>
    </div>
  )
}

export default Routess;
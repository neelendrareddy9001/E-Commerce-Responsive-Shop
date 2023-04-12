import React from 'react';
import {MdClose} from 'react-icons/md';
import prod from '../../../assets/Products-Images/earbuds-prod-1.webp';
import './CartItem.scss';

const CartItem = () => {
  return (
    <div className='cart-producuts'>
        <div className='car-product'>
          <img src={prod} alt=""/>
        </div>
        <div className='prod-details'>
          <span className='name'>Product name</span>
          <MdClose className='quantity-buttons' />
          <div className='quantity-buttons'>
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className='text'>
            <span>3</span>
            <span>×</span>
            <span>&#8377;4567</span>
          </div>
        </div>
    </div>
  )
}

export default CartItem
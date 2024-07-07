import React from 'react'
import halterNeck from '../../assets/halterNeck.png'
import 

const Cart = () => {
  return (
    <div className='cart'>
      <div className="cart-item">
        <img src={halterNeck} alt="" />
        <p>Long-Sleeved Body Con</p>
        <div className="color">
          <img src="" alt="" />
        <select name="" id="" disabled="disabled">
          <option value="">Black</option>
        </select>
        </div>
        <div className="color">
          <img src="" alt="" />
        <select name="" id="" disabled="disabled">
          <option value="">Medium</option>
        </select>
        </div>
        <p>12000</p>
        <div>
          <p>-</p>
          <p>2</p>
          <p>+</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Cart
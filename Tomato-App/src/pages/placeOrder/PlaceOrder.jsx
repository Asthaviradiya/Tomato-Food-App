import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'


const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
        <div className='place-order-left'>
          <p className='title'>
            Delivery Information
          </p>
          <div className='multi-fields'>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
          </div>
          <input type="email" placeholder='Email address' />
          <input type="text" placeholder='street'/>
          <div className='multi-fields'>
            <input type="text" placeholder='city'/>
            <input type="text" placeholder='state'/>
          </div>
          <div className='multi-fields'>
            <input type="text" placeholder='zip code'/>
            <input type="text" placeholder='country'/>
          </div>
          <input type="text" placeholder='phone'/>
        </div>
        <div className='place-order-right'>
        <div className='cart-total'>
          <h2 className='title'>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>delivery fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+2}</b>
            </div>
            
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder

import React from 'react';
import './InfoCard.scss';

function InfoCard({image, title, price, oldPrice}) {
  return (
    <div className='info-card'>
      <img src={image} alt={title} />
      <div className="card-content">
        <div className="details">
          <h4>{title}</h4>
          <span className='price'>${price}</span>
          {oldPrice && <span className='old-price'>${oldPrice}</span>}
        </div>
        <button className='cart-btn'>
          <i className='ri-shopping-cart-2-line'></i>
        </button>
      </div>
      
    </div>
  )
}

export default InfoCard

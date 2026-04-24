import React from "react";
import "./ShoppingCard.scss";

const ShoppingCard = ({ image, name, price }) => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={image} alt={name} />
        <div>
          <h5>{name}</h5>
          <p>1 x ${price}</p>
        </div>
      </div>
      <span className="item-total">${price}</span>
    </div>
  );
};

export default ShoppingCard;

import React from "react";
import "./Discount.css";
import { discountLists } from "../../assets/assets";

const Discount = () => {
  return (
    <div className="discountContainer">
      <h2>30% DISCOUNT DEALS</h2>
      <div className="discount-item">
        <div className="discount-display-list">
          {discountLists.map((item, index) => {
            return (
              <div key={index} className="discount-item">
                <div className="discount-img-Wrapper">
                  <img src={item.image} alt="" />
                </div>
                <div className="discountContent">
                  <p className="discount-name">{item.name}</p>
                  <p className="discount-old-price">{item.old_price}</p>
                  <div className="price-add">
                    <p className="discount-price">{item.new_price}</p>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className="discount-last-btn">See More</button>
    </div>
  );
};

export default Discount;

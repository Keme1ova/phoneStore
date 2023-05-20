import React from "react";
import plusSvg from "./../../assets/images/plus.svg";
import minusSvg from "./../../assets/images/minus.svg";
import delSvg from "./../../assets/images/del.svg";

export const CartItem = ({ element, handleRemove, handleAddToCart,handleMinusItem }) => {
  return (
    <div>
      <div className="cart-item d-flex justify-content-between mb-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center justify-content-between">
            <figure className="d-flex align-items-center justify-content-center">
              <img src={element.img} alt={element.title} />
            </figure>
            <div className="d-flex gap-3">
              <img
                src={plusSvg}
                alt=""
                onClick={() => handleAddToCart(element)}
              />
              {element.total}
              <img src={minusSvg} alt="" onClick={() => handleMinusItem(element)}/>
            </div>
          </div>
          <div className="d-flex justify-content-center flex-column">
            <p>{element.title}</p>
            <span>{element.price} ₸</span>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between align-items-end">
          <img src={delSvg} alt="" onClick={() => handleRemove(element)} />
          <span>{element.itemTotalPrice} ₸</span>
        </div>
      </div>
    </div>
  );
};

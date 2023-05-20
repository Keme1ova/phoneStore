/* eslint-disable jsx-a11y/iframe-has-title */

import "./../styles/Cart.scss";
import { CartItem } from "../components/cart/CartItem";
import { CartDelivery } from "../components/cart/CartDelivery";
import { CartTotal } from "../components/cart/CartTotal";
import { EmptyCart } from "./EmptyCart";

export const Cart = ({ emptyCartDb, handleRemove, handleAddToCart,handleMinusItem }) => {
  const deliveryChoose = [
    { id: 1, option: "Доставка курьером" },
    { id: 2, option: "Cамовывоз" },
  ];
  return (
    <>
      {emptyCartDb.length ? (
        <div className="cart-wrapper container">
          <h4>Корзина</h4>
          <div className="row">
            <div className="col">
              <div>
                {emptyCartDb.map((element) => (
                  <CartItem
                    handleMinusItem = {handleMinusItem}
                    handleAddToCart={handleAddToCart}
                    handleRemove={handleRemove}
                    key={element.id}
                    {...element}
                    element={element}
                  />
                ))}

                <CartDelivery data={deliveryChoose} />
              </div>
            </div>
            <CartTotal />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

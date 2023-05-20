import { Link } from "react-router-dom";


export const CartTotal = () => {
  return (
    <div className="col d-flex align-items-start justify-content-end">
      <div className="cart-total">
        <div className="d-flex align-items-center justify-content-between">
          <span>ИТОГО</span>
          <span>₸ 2 927</span>
        </div>
        <Link to="/order">
        <button>Перейти к оформлению</button>
        </Link>
      </div>
    </div>
  );
};

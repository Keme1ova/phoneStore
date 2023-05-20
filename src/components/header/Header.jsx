import React from "react";
import phoneSvg from "./../../assets/images/phone.svg";
import likeSvg from "./../../assets/images/like.svg";
import cartSvg from "./../../assets/images/cart.svg";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.svg";
import { Select } from "../common/select/Select";
import arrowDownSvg from "./../../assets/images/arrowDown.svg";
import person from "./../../assets/images/person.svg";

export const Header = ({
  totalQty,
  favorite,
  db,
  handleSearchData
}) => {
  const phoneModels = [
    { id: 1, model: "Iphone" },
    { id: 2, model: "INOI" },
    { id: 3, model: "Nokia" },
    { id: 4, model: "Apple BYZ S852I" },
    { id: 5, model: "Xiaomi" },
    { id: 6, model: "Realme" },
    { id: 7, model: "Samsung" },
    { id: 8, model: "Sony" },
    { id: 9, model: "Vivo" },
  ];
  return (
    <header className="menu container">
      <div className="menu_time">
        <Link to="/" style={{ marginRight: 20 }}>
          <img src={logo} alt="" />
        </Link>
        <Select
          selectType={phoneSvg}
          text="Выбрать модель телефона"
          data={phoneModels}
          img={arrowDownSvg}
          db={db}
          handleSearchData={handleSearchData}
        />
      </div>
      <div className="menu_top">
        <Link to="/favorites" className="d-flex align-items-center gap-2">
          <img src={likeSvg} alt="" />
          <span>{favorite.length}</span>
        </Link>

        <Link to="/cart">
          <div className="d-flex align-items-center gap-2">
            <img src={cartSvg} alt="" />
            <span>{totalQty}</span>
          </div>
        </Link>
        <Link to="/signup">
          <img src={person} alt="" />
        </Link>
      </div>
    </header>
  );
};

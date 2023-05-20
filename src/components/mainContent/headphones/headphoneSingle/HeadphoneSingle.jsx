import star from "./../../../../assets/images/star.svg";
import fav from "./../../../../assets/images/fav.svg";
import favClick from "./../../../../assets/images/clickFav.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const HeadphoneSingle = ({ item, favorite, setFavorite }) => {
  const [active, setActive] = useState(false);

  //функция добавления в изб
  const handleAddToCart = (item) => {
    const existItem = favorite.find((el) => el.id === item.id);
    if (existItem) {
      const newItem = favorite.map((el) =>
        el.id === item.id ? { ...existItem, total: item.total + 1 } : el
      );
      setFavorite(newItem);
      localStorage.setItem("favoriteStore", JSON.stringify(newItem));
    } else {
      const newItem = [...favorite, { ...item, total: 1 }];
      setFavorite(newItem);
      localStorage.setItem("favoriteStore", JSON.stringify(newItem));
    }
  };
 
  //функция удаления в изб
  const removeFavorites = (itemId) => {
    setFavorite(favorite.filter((f) => f.id !== itemId));
  };

  const selectFavoriteItem = () => {
    setActive(!active);
    if (!active) {
      handleAddToCart(item);
    } else {
      removeFavorites(item.id);
    }
  };
  console.log(favorite);

  

  return (
    <div className="position-relative d-flex align-items-center justify-content-center flex-column">
      {active ? (
        <img
          onClick={selectFavoriteItem}
          src={favClick}
          alt="Избранное"
          className={"favorite position-absolute"}
        />
      ) : (
        <img
          onClick={selectFavoriteItem}
          src={fav}
          alt="Избранное"
          className="favorite position-absolute"
        />
      )}

      <Link to={`/catalog-item/${item.id}/${item.title}`}>
        <figure className="d-flex align-items-center justify-content-center ">
          <img className="w-75" src={item.img} alt={item.title} />
        </figure>
      </Link>

      <div className="headphones-price d-flex justify-content-between w-100">
        <p>{item.title}</p>
        <div className="d-flex flex-column ">
          <span>{item.newPrice} ₸</span>
          <span>{item.oldPrice} ₸</span>
        </div>
      </div>
      <p className="d-flex align-items-center justify-content-start w-100">
        <img className="m-0" src={star} alt="" />
        4.7
      </p>
    </div>
  );
};

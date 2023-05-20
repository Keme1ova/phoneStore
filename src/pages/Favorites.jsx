import { Link } from "react-router-dom";
import star from "./../assets/images/star.svg";
import "./../styles/Favorite.scss";
import delSvg from "./../assets/images/delFav.svg";

export const Favorites = ({ favorite, handleRemoveFav }) => {
  return (
    <>
      {favorite.length ? (
        <div className="favorite-page container">
          <h4>Избранное</h4>
          <div className="headhpones">
            <h4>Наушники</h4>
            <div className="d-flex flex-wrap gap-4 my-5 justify-content-between">
              {favorite.map((item) => (
                <div
                  key={item.id}
                  className="favorite-page__card position-relative d-flex align-items-center justify-content-center flex-column"
                >
                  <img
                    className="closeBtn"
                    src={delSvg}
                    alt=""
                    onClick={() => handleRemoveFav(item)}
                  />
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
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p
          style={{
            fontSize: "30px",
            height: "61vh",
            marginTop: "50px",
            textAlign: "center",
          }}
        >
          EMPTY
        </p>
      )}{" "}
    </>
  );
};

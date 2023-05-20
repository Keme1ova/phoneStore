import React from "react";
import star from "./../../../assets/images/star.svg";
import { Link } from "react-router-dom";
import { dataBase } from "../../../data/db";

const Airpods = ({ db }) => {
  return (
    <div className="airpods">
      {db.length ? (
        <>
          <h4>Беспроводные наушники</h4>
          <div className="airpod d-flex flex-wrap justify-content-between gap-4">
            {db[2].airpods.map((el) => (
              <div
                key={el.id}
                className=" d-flex align-items-center justify-content-center flex-column"
              >
                <Link to={`/catalog-item/${el.id}/${el.title}`}>
                  <figure className="d-flex align-items-center justify-content-center ">
                    <img className="w-100" src={el.img} alt={el.name} />
                  </figure>
                </Link>

                <div className="headphones-price d-flex justify-content-between w-100">
                  <p>{el.name}</p>
                  <div className="d-flex flex-column ">
                    <span>{el.newPrice} ₸</span>
                    <span>{el.oldPrice} ₸</span>
                  </div>
                </div>
                <p className="d-flex align-items-center justify-content-start w-100">
                  <img className="m-0" src={star} alt={el.rating} />
                  {el.rating}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Airpods;

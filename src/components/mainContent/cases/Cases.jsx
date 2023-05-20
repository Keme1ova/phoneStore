import React from "react";
import { Link } from "react-router-dom";
import { dataBase } from "../../../data/db";

export const Cases = ({ db, searchedData }) => {
  console.log(db);
  return (
    <div className="cases">
      {db.length ? (
        <>
          <h4>Чехлы</h4>
          <div className="case d-flex justify-content-between">
            {searchedData.length
              ? searchedData.map((el) => 
                  <div
                    key={el.id}
                    className="d-flex align-items-center justify-content-center flex-column"
                  >
                    <Link to={`/catalog-item/${el.id}/${el.description}`}>
                      <img className="w-75" src={el.img} alt={el.title} />
                      <p>{el.description}</p>
                    </Link>
                  </div>
                )
              : db[1].cases.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex align-items-center justify-content-center flex-column"
                  >
                    <Link to={`/catalog-item/${item.id}/${item.description}`}>
                      <img className="w-75" src={item.img} alt={item.title} />
                      <p>{item.description}</p>
                    </Link>
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

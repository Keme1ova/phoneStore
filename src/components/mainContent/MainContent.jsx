import React from "react";
import "./MainContent.scss";
import { Cases } from "./cases/Cases";
import { Headphones } from "./headphones/Headphones";
import Airpods from "./airpods/Airpods";

export const MainContent = ({
  db,
  favorite,
  setFavorite,
  searchedData,
  headphonesSearchedData,
}) => {
  return (
    <div className="container main-content">
      <Cases db={db} searchedData={searchedData} />
      <Headphones
        db={db}
        favorite={favorite}
        setFavorite={setFavorite}
        setHeadphonesSearchedData={headphonesSearchedData}
      />
      <Airpods db={db} />
    </div>
  );
};

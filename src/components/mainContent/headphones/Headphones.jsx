import { dataBase } from "../../../data/db";
import { HeadphoneSingle } from "./headphoneSingle/HeadphoneSingle";

export const Headphones = ({
  db,
  favorite,
  setFavorite,
  headphonesSearchedData,
}) => {
  return (
    <div className="headphones">
      {db.length ? (
        <>
          <h4>Наушники</h4>
          <div className="headphone d-flex flex-wrap justify-content-between gap-4">
            {headphonesSearchedData
              ? headphonesSearchedData.map((item) => (
                  <HeadphoneSingle
                    key={item.id}
                    {...item}
                    item={item}
                    favorite={favorite}
                    setFavorite={setFavorite}
                  />
                ))
              : db[0].headphones.map((item) => (
                  <HeadphoneSingle
                    key={item.id}
                    {...item}
                    item={item}
                    favorite={favorite}
                    setFavorite={setFavorite}
                  />
                ))}
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

import "./../styles/CatalogItems.scss";
import { useParams } from "react-router-dom";
import CatalogItemImage from "../components/catalogItem/CatalogItemImage";
import CatalogItemBlock from "../components/catalogItem/CatalogItemBlock";

export const CatalogItem = ({ handleAddToCart, db }) => {
  window.scrollTo(0, 0);

  const { id } = useParams();

  const headphonesItems = db[0].headphones.find(
    (item) => item.id === parseInt(id)
  );
  const casesItems = db[1].cases.find((item) => item.id === parseInt(id));
  const airpodsItems = db[2].airpods.find((item) => item.id === parseInt(id));


  return (
    <div className="catalog-item container">
      <h4>Автодержатель</h4>
      <CatalogItemImage
        headphonesItems={headphonesItems}
        casesItems={casesItems}
        airpodsItems={airpodsItems}
      />
      <CatalogItemBlock
        headphonesItems={headphonesItems}
        casesItems={casesItems}
        airpodsItems={airpodsItems}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

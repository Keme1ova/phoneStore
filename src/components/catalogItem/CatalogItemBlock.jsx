import addCart from "./../../assets/images/cart.svg";

const CatalogItemBlock = ({
  headphonesItems,
  casesItems,
  airpodsItems,
  handleAddToCart,
}) => {
  const onAddToCart = () => {
    let newObj = null;
    if (headphonesItems) {
      newObj = {
        id: headphonesItems.id,
        img: headphonesItems.img,
        title: headphonesItems.title,
        price: headphonesItems.newPrice,
        count: 1,
      };
    } else if (casesItems) {
      newObj = {
        id: casesItems.id,
        img: casesItems.img,
        title: casesItems.description,
        price: casesItems.newPrice,
        count: 1,
      };
    } else if (airpodsItems) {
      newObj = {
        id: airpodsItems.id,
        img: airpodsItems.img,
        title: airpodsItems.name,
        price: airpodsItems.newPrice,
        count: 1,
      };
    }

    handleAddToCart(newObj);
  };
  return (
    <div className="description-block row mt-5">
      <div className="description__text p-0 col col-md-9">
        <div className="p-3">
          <h5>Описание и характеристики</h5>
        </div>
        <ul className="">
          {casesItems
            ? casesItems.descriptionText.map((el) => <li>{el.description}</li>)
            : headphonesItems
            ? headphonesItems.descriptionText.map((el) => (
                <li>{el.description}</li>
              ))
            : airpodsItems
            ? airpodsItems.descriptionText.map((el) => (
                <li>{el.description}</li>
              ))
            : ""}
        </ul>
      </div>
      <div className="col col-md-3 d-flex flex-column gap-3">
        <button>Купить!</button>
        <button onClick={onAddToCart}>
          <img src={addCart} alt="" />
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default CatalogItemBlock;

/* eslint-disable no-undef */
const CatalogItemImage = ({ headphonesItems, casesItems, airpodsItems }) => {
  return (
    <div className="catalog-item__images">
      <figure className="d-flex justify-content-between flex-wrap">
        {
          casesItems 
          ?  
          casesItems.casesImg.map((el) => (
          <img className="w-25" src={el.img} alt={el.title} />
        )) 
        :
        headphonesItems 
        ? 
        headphonesItems.headphonesImg.map((el) => (
          <img className="w-25" src={el.img} alt={el.title} />
        )) 
        :
        airpodsItems  
        ? 
        airpodsItems.airpodsImg.map((el) => (
          <img className="w-25" src={el.img} alt={el.title} />
        )) : ''
        }
        
       
       
      </figure>
      <div className="d-flex align-items-center justify-content-between pt-4">
        <h5>BOROFONE BH32</h5>
        <div className="d-flex align-items-center justify-content-between ">
          <div className="d-flex flex-column mx-4">
            <span>2 927 ₸</span>
            <span>3 527 ₸</span>
          </div>
          <span>-20%</span>
        </div>
      </div>
    </div>
  );
};

export default CatalogItemImage;

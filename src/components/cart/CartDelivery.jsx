import deliverySvg from './../../assets/images/delivery.svg';
import { Select } from '../../components/common/select/Select';

export const CartDelivery = ({data}) => {
  return (
    <div className="cart-item">
      <h4>Доставка</h4>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11696.552555433744!2d74.60490565!3d42.86992839999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1681211859217!5m2!1sru!2skg"
        width="600"
        height="173"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <Select selectType={deliverySvg} text="Доставка курьером"  data={data}/>
        <span> 499 ₸</span>
      </div>
    </div>
  );
};

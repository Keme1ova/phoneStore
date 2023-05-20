import "./../styles/Order.scss";
import orderGeo from "./../assets/images/orderGeo.svg";
import { Select } from "./../components/common/select/Select";
import visaSvg from "./../assets/images/visa.svg";
import promoSvg from "./../assets/images/promo.svg";
import arrowRight from "./../assets/images/arrowRight.svg";
import arrowDownSvg from "./../assets/images/arrowDown.svg";
import pen from "./../assets/images/sumPen.svg";
import { Link } from "react-router-dom";

const Order = ({ selectType, text, selectOption }) => {
  const pay = [
    {
      id: 1,
      option: "MasterCard",
    },
    {
      id: 2,
      option: "Kaspi",
    },
    {
      id: 3,
      option: "PayPal",
    },
    {
      id: 4,
      option: "GooglePay",
    },
  ];
  const promo = [
    {
      id: 1,
      option: "da",
    },
    {
      id: 2,
      option: "net",
    },
  ];
  return (
    <div className="order-page">
      <div className="container order-page__section">
        <h4>Оформление заказа</h4>
        <form action="">
          <div className="row gap-4">
            <div className="order-page__block col">
              <div className="d-flex justify-content-between">
                <h3>Доставка курьером</h3>
                <span> 499 com</span>
              </div>
              <div>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11696.552555433744!2d74.60490565!3d42.86992839999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1681211859217!5m2!1sru!2skg"
                  width="550"
                  height="150"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="geo my-3">
                <img src={orderGeo} alt="geolak" />
                <span>Адрес доставки</span>
              </div>
              <div>
                <div className="d-flex flex-column gap-3">
                  <div className="order-page__input">
                    <input type="phone" name="" id="" placeholder="Город " />
                    <img src={pen} alt="number phone" />
                  </div>
                  <div className="order-page__input">
                    <input
                      type="phone"
                      name=""
                      id=""
                      placeholder="Улица / Район"
                    />
                    <img src={pen} alt="number phone" />
                  </div>
                  <div className="d-flex gap-3">
                    <div className="w-50">
                      <div className="order-page__input mb-3">
                        <input type="phone" placeholder="Дом" />
                        <img src={pen} alt="Дом" />
                      </div>
                      <div className="order-page__input mb-3">
                        <input type="phone" placeholder="Подъезд" />
                        <img src={pen} alt="Подъезд" />
                      </div>
                    </div>
                    <div className="w-50">
                      <div className="order-page__input">
                        <input type="phone" placeholder="Квартира" />
                        <img src={pen} alt="Квартира" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-flex flex-column gap-3">
              <div className="order-page__block">
                <div>
                  <h3>Ваш заказ</h3>
                  <div className="d-flex justify-content-between">
                    <span>1х</span>
                    <p>Наушники Apple BYZ S852I</p>
                    <span>2 927 com</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <span></span>
                  <p>Доставка</p>
                  <span>2 927 com</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span></span>
                  <p>К оплате</p>
                  <span>2 927 com</span>
                </div>
              </div>
              <div className="order-page__block">
                <h3>Способ оплаты</h3>
                <Select
                  text="Счет на kaspi.kz"
                  selectType={visaSvg}
                  data={pay}
                  img={arrowDownSvg}
                />
                <Select
                  text="Есть промокод?"
                  selectType={promoSvg}
                  data={promo}
                  img={arrowRight}
                />
              </div>
              <div className="order-page__block">
                <h3>Номер получателя</h3>
                <div className="order-page__input">
                  <input
                    type="phone"
                    name=""
                    id=""
                    placeholder="+996 ___ ___ ___"
                  />
                  <img src={pen} alt="number phone" />
                </div>
              </div>
              <Link to="/ready-order">Закончить оформление</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;

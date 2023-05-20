import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Cart } from "./pages/Cart";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Favorites } from "./pages/Favorites";
import { Service } from "./pages/Service";
import { NotFound } from "./pages/NotFound";
import { CatalogItem } from "./pages/CatalogItem";
import { useEffect, useState } from "react";
import Order from "./pages/Order";
import ReadyOrder from "./pages/ReadyOrder";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import {dataBase} from './data/db.js'
import axios from "axios";

function App() {
  const [db,setDb] = useState([]);
  const [emptyCartDb, setEmptyCartDb] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const totalQty = emptyCartDb.reduce(
    (acc, item) => acc + item.total * item.count,
    0
  );
  const [searchedData,setSearchedData ] = useState([])
  const [headphonesSearchedData,setHeadphonesSearchedData ] = useState([])
console.log(searchedData);
//   const [fakeApi, setfakeApi] = useState([]);
console.log(db);
console.log(emptyCartDb);
  const handleAddToCart = (item) => {
    const existItem = emptyCartDb.find((el) => el.id === item.id);
    if (existItem) {
      const newItem = emptyCartDb.map((el) =>
        el.id === item.id ? { ...existItem, total: item.total + 1 } : el
      );
      setEmptyCartDb(newItem);
      // Local storage
      localStorage.setItem("phoneStore", JSON.stringify(newItem));
    } else {
      const newItem = [...emptyCartDb, { ...item, total: 1 }];
      setEmptyCartDb(newItem);
      localStorage.setItem("phoneStore", JSON.stringify(newItem));
    }
  };

  const handleMinusItem = (item) => {
    const existItem = emptyCartDb.find((el) => el.id === item.id);
    if (existItem.total === 1) {
      const newItem = emptyCartDb.filter((el) => el.id !== item.id);
      setEmptyCartDb(newItem);
      localStorage.setItem("phoneStore", JSON.stringify(newItem));
    } else {
      const newItem = emptyCartDb.map((el) =>
        el.id === item.id ? { ...existItem, total: existItem.total - 1 } : el
      );
      setEmptyCartDb(newItem);
      localStorage.setItem("phoneStore", JSON.stringify(newItem));
    }
  };

  const handleRemove = (item) => {
    const newItem = emptyCartDb.filter((el) => el.id !== item.id);
    setEmptyCartDb(newItem);
    localStorage.setItem("phoneStore", JSON.stringify(newItem));
  };

  const handleRemoveFav = (item) => {
    const newItem = favorite.filter((el) => el.id !== item.id);
    setFavorite(newItem);
    localStorage.setItem("favoriteStore", JSON.stringify(newItem));
  };

  useEffect(() => {
    setEmptyCartDb(JSON.parse(localStorage.getItem("phoneStore")) || []);
    setFavorite(JSON.parse(localStorage.getItem("favoriteStore")) || []);
  }, []);

  useEffect(() => {
    const url = "http://localhost:3001/dataBase"
    axios.get(url).then((data) =>{
      setDb(data.data);
      console.log(data);
    });
  }, [])
    
  //     .then((response) => {
  //       response.json()
  //       console.log(response);
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       // setDb(data);
  //     });
  // }, []);headphonesSearchedData
const handleSearchData = (option) =>{
  const matches = db[1].cases.filter(el=>el.title === option)
  const matchesHeadphones = db[0].headphones.filter(el=>el.title === option)
  setSearchedData(matches)
  setHeadphonesSearchedData(matchesHeadphones)
}
  return (
    <>
      <div className="App ">
        <Header totalQty={totalQty} favorite={favorite} db={db} handleSearchData={handleSearchData} />
        {/* {fakeApi.map((el) => (
          <div>
            <span>{el.userId}</span>
            <input type="checkbox" checked={el.completed} />
            <p>{el.title}</p>
          </div>
        ))} */}
       
        <Routes>
          <Route
            path="/"
            element={
              <HomePage db={db} favorite={favorite} setFavorite={setFavorite}  searchedData={searchedData} headphonesSearchedData={headphonesSearchedData}/>
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                emptyCartDb={emptyCartDb}
                handleRemove={handleRemove}
                handleAddToCart={handleAddToCart}
                handleMinusItem={handleMinusItem}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorite={favorite}
                setFavorite={setFavorite}
                handleRemoveFav={handleRemoveFav}
              />
            }
          />
          <Route path="/service" element={<Service />} />
          <Route
            path="/catalog-item/:id/:title"
            element={<CatalogItem handleAddToCart={handleAddToCart} db={db} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/order" element={<Order />} />
          <Route path="/ready-order" element={<ReadyOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

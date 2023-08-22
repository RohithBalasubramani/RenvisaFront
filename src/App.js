import "./App.css";
import Home from "./Pages/Home";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Solutions from "./Pages/Solutions";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import Bulkquote from "./Pages/Bulkquote";
import Businesslogin from "./Pages/Businesslogin";
import SellersAccount from "./Pages/SellersAccount";
import ProductListing from "./Pages/ProductListing";
import ProductDescription from "./Pages/ProductDescription";
import { Products4, Products5 } from "./data";

import Reviews from "./Backup/Reviews";
import { reviewdatatrail } from "./Components/Homepage/Trail/traildata";

import Toolbar from "./Components/Toolbar/Toolbar";
import TestMenu from "./Components/Toolbar/MenuItems/TestMenu";
import {
  brands,
  Categories,
  menuItems,
  products,
} from "./Components/Toolbar/MenuExample/MenuData";
import MenuItemTwo from "./Components/Toolbar/MenuExample/MenuItemTwo";
import SearchPage from "./Components/Homepage/Trail/SearchTwo";
import ProductListTwo from "./Components/Homepage/Trail/PLPTest";
import MenuDiv from "./Components/Toolbar/MenuExample/MenuDiv";
import Test from "./Pages/test";
import axios from "axios";
import { useEffect, useState } from "react";
import Orders from "./Pages/Orders";

function App() {
  // Get the list of products from your data source
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://renvisa.org/product/");
        setData(response.data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <HashRouter>
      {/* <Header/> */}
      {/* <Toolba/> */}
      {/* <Test/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bulkquote" element={<Bulkquote />} />
        <Route path="/businesslogin" element={<Businesslogin />} />
        <Route path="/sellersaccount" element={<SellersAccount />} />
        {/* <Route path="/test" element={<SearchPage />} /> */}
        {/* <Route path="/product" element={<ProductListTwo products={Products5}/>} /> */}
        <Route
          path="/products/:_id"
          element={<ProductDescription products={data} />}
        />
        <Route exact path="/product" element={<ProductListing />} />
        {/* <Route path="/tt" element={<ProductList products={Products5}/>} /> */}

        {/* <Route path="/tt" element={<Toolbar />} />
        <Route path="/test" element={<Test />} /> */}

        {/* <Route path="/products/:id"><ProductDescription products={Products4} /></Route> */}
        {/* <Route exact path="/products"><ProductListing /></Route> */}
        <Route exact path="/orders" element={<Orders />} />
      </Routes>

      <Footer />
      {/* <BasicSpeedDial/> */}
    </HashRouter>
  );
}

export default App;

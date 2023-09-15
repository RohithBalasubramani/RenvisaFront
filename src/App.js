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
import { fetchData } from "./Redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import ContentLoader from "react-content-loader";
import AboutUs from "./Pages/AboutUs";
import TermsOfService from "./Pages/TermsOfService";
import CookiePolicy from "./Pages/Cookies";
import Disclaimer from "./Pages/Disclaimer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  // Get the list of products from your data source
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);
  console.log(loading);
  console.log(data);
  console.log(error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return (
      <ContentLoader
        speed={10}
        width={1500}
        height={700}
        viewBox="0 0 1500 700"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="95" y="20" rx="16" ry="16" width="110" height="40" />
        <rect x="40" y="100" rx="14" ry="14" width="1400" height="550" />
        <rect x="220" y="20" rx="26" ry="26" width="580" height="40" />
        <circle cx="60" cy="40" r="20" />
      </ContentLoader>
    );
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
        <Route path="/cart" element={<Cart data={data} />} />
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
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/termsofservice" element={<TermsOfService />} />
        <Route exact path="/cookiepolicy" element={<CookiePolicy />} />
        <Route exact path="/disclaimer" element={<Disclaimer />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
      {/* <BasicSpeedDial/> */}
    </HashRouter>
  );
}

export default App;

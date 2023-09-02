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
        speed={2}
        width={2000}
        height={700}
        viewBox="0 0 700 300"
        backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb"
      >
        <rect x="12" y="35" rx="0" ry="0" width="6" height="246" />
        <rect x="14" y="34" rx="0" ry="0" width="408" height="6" />
        <rect x="416" y="34" rx="0" ry="0" width="6" height="246" />
        <rect x="12" y="276" rx="0" ry="0" width="408" height="6" />
        <rect x="150" y="53" rx="6" ry="6" width="127" height="15" />
        <rect x="37" y="77" rx="7" ry="7" width="361" height="139" />
        <rect x="58" y="225" rx="0" ry="0" width="316" height="8" />
        <rect x="86" y="238" rx="0" ry="0" width="267" height="8" />
        <rect x="58" y="252" rx="0" ry="0" width="316" height="8" />
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
      </Routes>

      <Footer />
      {/* <BasicSpeedDial/> */}
    </HashRouter>
  );
}

export default App;

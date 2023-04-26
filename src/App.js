import './App.css';
import Home from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import {
  Routes,
  Route
} from "react-router-dom";
import Solutions from './Pages/Solutions';
import Footer from './Components/Footer';
import Cart from './Pages/Cart';
import Bulkquote from './Pages/Bulkquote';
import Businesslogin from './Pages/Businesslogin';
import SellersAccount from './Pages/SellersAccount';
import Test from './Components/Toolbar/Test';
import ProductListing from './Pages/ProductListing';
import ProductDescription from './Pages/ProductDescription';
import { Products4, Products5 } from './data';

import Reviews from './Backup/Reviews';
import { reviewdatatrail } from './Components/Homepage/Trail/traildata';

import Toolbar from './Components/Toolbar/Toolbar';
import TestMenu from './Components/Toolbar/MenuItems/TestMenu';
import { brands, Categories, menuItems, products } from './Components/Toolbar/MenuExample/MenuData';
import MenuItemTwo from './Components/Toolbar/MenuExample/MenuItemTwo';
import SearchPage from './Components/Homepage/Trail/SearchTwo';
import ProductListTwo from './Components/Homepage/Trail/PLPTest';
import MenuDiv from './Components/Toolbar/MenuExample/MenuDiv';


function App() {

 // Get the list of products from your data source

  return (
    <BrowserRouter>
        {/* <Header/> */}
        {/* <Toolba/> */}
        {/* <Test/> */}

          <Routes>

              <Route path="/" element={<Home/>} />
              <Route path="/solutions" element={<Solutions/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/bulkquote" element={<Bulkquote/>} />
              <Route path="/businesslogin" element={<Businesslogin/>} />
              <Route path="/sellersaccount" element={<SellersAccount/>} />
              <Route path="/test" element={<SearchPage/>} />
              {/* <Route path="/product" element={<ProductListTwo products={Products5}/>} /> */}
              <Route path="/products/:id" element={<ProductDescription products={Products5}/>} />
              <Route exact path="/product" element={<ProductListing/>} />
              {/* <Route path="/tt" element={<ProductList products={Products5}/>} /> */}
              

              <Route path="/tt" element={<Toolbar/>} />
              <Route path="/tits" element={<MenuDiv/>} />


              {/* <Route path="/products/:id"><ProductDescription products={Products4} /></Route> */}
              {/* <Route exact path="/products"><ProductListing /></Route> */}



          </Routes>




        <Footer/>
        {/* <BasicSpeedDial/> */}

    </BrowserRouter>
  );
}

export default App;

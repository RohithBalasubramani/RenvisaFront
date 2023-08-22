import React, { useState } from "react";
import styled from "styled-components";
import MenuItemTwo from "./MenuItemTwo";
import { brands, products } from "./MenuData";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  color: inherit;
`;

function MenuDiv({ colo, arccol }) {
  const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
  const [isSubMenuOpen2, setIsSubMenuOpen2] = useState(false);
  const [isSubMenuOpen3, setIsSubMenuOpen3] = useState(false);
  const [isSubMenuOpen4, setIsSubMenuOpen4] = useState(false);
  const [isSubMenuOpen5, setIsSubMenuOpen5] = useState(false);

  const toggleSubMenu1 = () => {
    setIsSubMenuOpen1(!isSubMenuOpen1);
    setIsSubMenuOpen2(false);
    setIsSubMenuOpen3(false);
    setIsSubMenuOpen4(false);
    setIsSubMenuOpen5(false);
  };

  const toggleSubMenu2 = () => {
    setIsSubMenuOpen2(!isSubMenuOpen2);
    setIsSubMenuOpen1(false);
    setIsSubMenuOpen3(false);
    setIsSubMenuOpen4(false);
    setIsSubMenuOpen5(false);
  };

  const toggleSubMenu3 = () => {
    setIsSubMenuOpen3(!isSubMenuOpen3);
    setIsSubMenuOpen2(false);
    setIsSubMenuOpen1(false);
    setIsSubMenuOpen4(false);
    setIsSubMenuOpen5(false);
  };

  const toggleSubMenu4 = () => {
    setIsSubMenuOpen4(!isSubMenuOpen4);
    setIsSubMenuOpen2(false);
    setIsSubMenuOpen3(false);
    setIsSubMenuOpen1(false);
    setIsSubMenuOpen5(false);
  };

  const toggleSubMenu5 = () => {
    setIsSubMenuOpen5(!isSubMenuOpen5);
    setIsSubMenuOpen2(false);
    setIsSubMenuOpen3(false);
    setIsSubMenuOpen4(false);
    setIsSubMenuOpen1(false);
  };

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

  const allBrands = Array.from(new Set(data.map((product) => product.brand)));
  const jsonBrand = allBrands.map((name, index) => {
    return { id: index + 1, name };
  });

  const jsonBrandfin = jsonBrand.slice(0, 9);

  return (
    <Container>
      <MenuItemTwo
        cat={jsonBrandfin}
        sub={data}
        head="Brands "
        col={colo}
        arccol={arccol}
        toggleSubMenu={toggleSubMenu1}
        isSubMenuOpen={isSubMenuOpen1}
      />
      <MenuItemTwo
        cat={brands}
        sub={products}
        head="Sectors "
        col={colo}
        arccol={arccol}
        toggleSubMenu={toggleSubMenu2}
        isSubMenuOpen={isSubMenuOpen2}
      />
      <MenuItemTwo
        cat={brands}
        sub={products}
        head="Industries "
        col={colo}
        arccol={arccol}
        toggleSubMenu={toggleSubMenu3}
        isSubMenuOpen={isSubMenuOpen3}
      />
      <MenuItemTwo
        cat={brands}
        sub={products}
        head="Section 4 "
        col={colo}
        arccol={arccol}
        toggleSubMenu={toggleSubMenu4}
        isSubMenuOpen={isSubMenuOpen4}
      />
      <MenuItemTwo
        cat={brands}
        sub={products}
        head="Section 5 "
        col={colo}
        arccol={arccol}
        toggleSubMenu={toggleSubMenu5}
        isSubMenuOpen={isSubMenuOpen5}
      />
    </Container>
  );
}

export default MenuDiv;

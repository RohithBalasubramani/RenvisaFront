import React, { useState } from "react";
import styled from "styled-components";
import MenuItemTwo from "./MenuItemTwo";
import { brands, products } from "./MenuData";
import { useEffect } from "react";
import axios from "axios";
import StyledLink from "../../StyLink";

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
    return <p></p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const allBrands = Array.from(new Set(data.map((product) => product.brand)));
  const jsonBrand = allBrands.map((name, index) => {
    return { id: index + 1, name };
  });

  const allIndustries = Array.from(
    new Set(data.map((product) => product.industry))
  );
  const jsonIndustry = allIndustries.map((name, index) => {
    return { id: index + 1, name };
  });

  const allApplication = Array.from(
    new Set(data.map((product) => product.application))
  );
  const jsonApplication = allApplication.map((name, index) => {
    return { id: index + 1, name };
  });

  const allCate = Array.from(new Set(data.map((product) => product.category)));
  const jsonCate = allCate.map((name, index) => {
    return { id: index + 1, name };
  });

  const jsonBrandfin = jsonBrand.slice(0, 9);
  const jsonIndustryfin = jsonIndustry.slice(0, 9);
  const jsonApplicationfin = jsonApplication.slice(0, 9);
  const jsonCatefin = jsonCate.slice(0, 9);
  const selectedField = "brands";

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
        field={"brand"}
      />
      <MenuItemTwo
        cat={jsonIndustryfin}
        sub={data}
        head="Sectors "
        col={colo}
        arccol={arccol}
        toggleSubMenu={toggleSubMenu2}
        isSubMenuOpen={isSubMenuOpen2}
        field={"industry"}
      />
      <MenuItemTwo
        cat={jsonApplicationfin}
        sub={data}
        head="Application "
        col={colo}
        arccol={arccol}
        toggleSubMenu={toggleSubMenu3}
        isSubMenuOpen={isSubMenuOpen3}
        field={"application"}
      />
      <MenuItemTwo
        cat={jsonCatefin}
        sub={data}
        head="Categories "
        col={colo}
        arccol={arccol}
        toggleSubMenu={toggleSubMenu4}
        isSubMenuOpen={isSubMenuOpen4}
        field={"category"}
      />
      <StyledLink to="/sellersaccount">
        <MenuItemTwo
          cat={brands}
          sub={products}
          head="Seller "
          col={colo}
          arccol={arccol}
          field={"brand"}
        />
      </StyledLink>
    </Container>
  );
}

export default MenuDiv;

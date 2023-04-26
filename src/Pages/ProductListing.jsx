import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import styled from 'styled-components'
import ProductCard from '../Components/Homepage/ProductCard/ProductCard'
import { Products5 } from '../data'
import { Box, Checkbox, FormControl, Grid, InputLabel, MenuItem, Select, Slider } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled as sty} from '@mui/material/styles';
import BreadcrumbsPlp from '../Components/PLP/BreadCrumbsPLP'
import { useLocation } from 'react-router-dom';  
import HeaderTwo from '../Components/Header/HeaderTwo'

const Container = styled.div`
background-color: #ffffff;
width: 100%;
height: auto;
color: #333333;


`

const Containerwhole = styled.div`
display: flex;
height: 150vh;
width: 100%;
padding-top: 15vh;
`

const FilterWrap = styled.div`
flex: 1.2;
width: auto;
background: #ffffff;
margin-left: 5vh;
margin-right: 5vh;
position: sticky;
overflow: hidden;

`

const HeadCon = styled.div`
position: sticky;
width: 100vw;
z-index: 100;
`

const Wrapper = styled.div`

    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #ffffff;
    grid-gap: 2.5vh;
    padding: 2vh;
    /* padding-right: 5vh; */

`

const WrapperWhole = styled.div`
background-color: #ffffff;
display: block;
border-left:1px solid #E0E0E0;
flex: 8;
overflow-y: scroll;

`

const WrapperHead = styled.div`
background-color: #ffffff;
width: 100%;
padding-left: 2vh;
border-bottom:1px solid #E0E0E0;
`

const FilterHead = styled.div`
font-family: Lexend;
font-size: 16px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.045em;
text-align: left;
text-transform: uppercase;
padding-top: 3vh;
padding-bottom: 2vh;
border-top: 1px solid #E0E0E0;
margin-top: 2vh;

`

const FilterCont = styled.label`
font-family: Lexend;
font-size: 12px;
font-weight: 400;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
display: block;

`

const WrapperTit = styled.div`
font-family: Lexend;
font-size: 48px;
font-weight: 500;
line-height: 60px;
letter-spacing: 0em;
text-align: left;

`

const WrapperNum = styled.div`
font-family: Lexend;
font-size: 12px;
font-weight: 400;
line-height: 15px;
letter-spacing: 0.02em;
text-align: left;
`

const Sort = styled.div`
margin-left: auto;
margin-right: 5%;
display: flex;
margin-top: auto;
margin-bottom: 0;


`

const SortText = styled.div`
font-family: Lexend;
font-size: 16px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
margin-top: auto;
margin-bottom: auto;

`
const WrapperFlex = styled.div`
width: 100%;
display: flex;
vertical-align: middle;

`



const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';


const IOSSlider = sty(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#c60000' : '#D2D2D2',
  height: 2,
  width:"80%",
  margin:"15px",
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 28,
    width: 28,
    backgroundColor: '#FFBF00',
    boxShadow: iOSBoxShadow,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#1e00ff',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
}));

const marks = [
  {
    value: 10000,
    label: '10k',
  },
  {
    value: 20000,
    label: '20k',

  },
  {
    value: 30000,
    label: '30k',

  },
  {
    value: 40000,
    label: '40k',
  },
  {
    value:50000,
    label: '50k',
  },

];



const ProductListing = () => {


  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProductsOne, setFilteredProductsOne] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search') || '';
    setSearchQuery(search);
    filterProducts(search);
  }, [location.search]);

  const filterProducts = (searchQuery) => {
    const filtered = Products5.filter(product =>
      product.rname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProductsOne(filtered);
  }


  

    //Brand Filtering//

    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceFilter, setPriceFilter] = useState([0, 60000]);
    const [sortOrder, setSortOrder] = useState('asc');


    function handleBrandCheckboxChange(event) {
      const brand = event.target.value;
      if (event.target.checked) {
        setSelectedBrands([...selectedBrands, brand]);
      } 
      else {
        setSelectedBrands(selectedBrands.filter(selectedBrand => selectedBrand !== brand));
      }
    }

    const handlePriceChange = (event, newValue) => {
        setPriceFilter(newValue);
      };
    
  
    const allBrands = Array.from(new Set(Products5.map(product => product.brand)));
  
    const filteredProducts = filteredProductsOne.filter(product => {
      if (selectedBrands.length === 0 &&
        product.price >= priceFilter[0]&&
        product.price <= priceFilter[1]) {
        return true;
      }
      else {

        return (selectedBrands.includes(product.brand)  &&
        product.price >= priceFilter[0] &&
        product.price <= priceFilter[1]

        );


      }
    });

    const count =filteredProducts.length;

    const sortedProducts = filteredProducts.slice().sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        
        return b.price - a.price;
      }
    });

    function valuetext(value) {
      return `₹${value}`;
    }
    


  return (
    <Container>


        <HeadCon>
            <HeaderTwo/>
        </HeadCon> 

        


    <Containerwhole>

    <FilterWrap>
        

        <FilterHead> Brand </FilterHead>


        

         {allBrands.map(brand => (
        <FilterCont key={brand}>
          <Checkbox

            type="checkbox"
            value={brand}
            checked={selectedBrands.includes(brand)}
            onChange={event => handleBrandCheckboxChange(event)}
            sx={{
              color: "#E0E0E0",
              '&.Mui-checked': {
                color: "#F5A91D",
              },
            }}
          />
          {brand}
        </FilterCont>
      ))} 

    <div>
        <FilterHead> Price </FilterHead>  
        <IOSSlider
          id="price-filter"
          value={priceFilter}
          getAriaValueText={valuetext}
          onChange={handlePriceChange}
          marks={marks}
          min={0}
          max={60000}
          step={5000}
          
        />

      </div>

      {/* <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Sort by Price ({sortOrder === 'asc' ? 'Low to High' : 'High to Low'})
      </button> */}

    </FilterWrap>

    <WrapperWhole>
      <WrapperHead>

        <BreadcrumbsPlp PLPText={searchQuery} />
        <WrapperTit>{searchQuery}</WrapperTit>
        <WrapperFlex>
        <WrapperNum>‘{count}’ Results</WrapperNum>

        <Sort>  
         <SortText>Sort by:</SortText>



          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
            <Select
              
              id="demo-simple-select"
              value={sortOrder}
              displayEmpty
              
              
            >
              <MenuItem onClick={() => setSortOrder('desc')} value={"desc"}>High to Low</MenuItem>
              <MenuItem onClick={() => setSortOrder('asc')} value={"asc"}>Low to High</MenuItem>

            </Select>
          </FormControl>
      
       </Sort>
       </WrapperFlex>
        

      </WrapperHead>
      <Wrapper>
    {sortedProducts.map(product => (
      <Link style={{ textDecoration: 'none' }} key={product.id} to={`/products/${product.id}`}>
            <ProductCard item={product}/>
            </Link>
        ))}
        </Wrapper>
      </WrapperWhole>




    </Containerwhole>



    </Container>
  )
}

export default ProductListing

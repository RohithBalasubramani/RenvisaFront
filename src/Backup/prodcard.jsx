// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import { Image, LocalShipping, ShoppingCart } from '@mui/icons-material'

// import { Products4 } from '../../../data'
// import { useDispatch } from 'react-redux';
// import { ADD } from '../../../Redux/actions/action'
// import { Link } from 'react-router-dom';
// import axios from 'axios';
 
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 3vh;
// padding-bottom: 3vh;
//   background: #FFF9EB;

// `
// const Instock = styled.div`

// text-align: center;
// margin-right:5vh;
// display: block;
// z-index: 7;



// `
// const Instocktext = styled.p`
// color: green;
// opacity: 0;
// text-align: center;
// `


// const ContBoxBuy = styled.button`
//   position: absolute;
//   top: 100px;
//   margin-left: 15%;
//   opacity: 0;
//   display: flex;
//   margin-right: 2vh;
//   padding: 10px 30px;
//   margin-top: 50%;
//   width: 22vh;


//   color: #000000;
//   text-decoration: none;
//   background: #ff9471;
//   border-radius: 30px;
//   text-transform: uppercase;
//   font-size: 10px;
//   letter-spacing: 1px;
//   transition: 0.5s;
//   z-index: 7;

//   &:hover {   
//     background: #fe8b64;
//               }

//   &:hover ${Instocktext}{
//     color: green;

//   opacity: 1;
//   }
// `

 
// const Card = styled.div`
//    position: relative;
//   width: 260px;
//   height: 390px;
//   background: #09193D;
//   border-radius: 20px;
//   overflow: hidden;
//   margin: 3vh;

//   &:hover ${ContBoxBuy}{
//                 top: 0;
//               opacity: 1;
//               }
  



//   &:after {
            
//             content: "";
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             font-weight: 600;
//             font-size: 4em;
//             color: rgba(158, 158, 158, 0.1);


    

//     }

//   &:before {

//               content: "Roh";
//               position: absolute;
//               top: -50%;
//               width: 100%;
//               height: 100%;
//               background: #ff9471;
//               transform: skewY(345deg);
//               transition: 0.5s;


        
            
//           }
      
//      &:hover {
//         &:before {
//             top: -70%;
//             transform: skewY(390deg);
//         }
//           }


// `
// const CardImgBox = styled.div`
//   position: relative;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 20px;
//   z-index: 1;
// `

// const CardContBox = styled.div`
//   position: relative;
//   padding: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   z-index: 4;
// `
// const ContBoxHead = styled.div`
//   font-size: 14px;
//   color: white;
//   font-weight: 500;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   height: 12.5vh;
// `
// const ContBoxPrice = styled.h2`
//   font-size: 24px;
//   color: white;
//   font-weight: 700;
//   letter-spacing: 1px;
// `

// const CardImage = styled.img`
//   height: 180px;
//   margin-left: 0;
//   margin-right: auto;
//   width: auto;
// `
// const ProdBotDet = styled.div`
//     overflow: hidden;
//     border-top: 1px solid #eee;
//     padding-top: 10px;
//     margin-top: auto;
//     margin-bottom:15vh;
//     display: flex;
//     align-items: flex-end;
//     margin-left: 1vh;
//     margin-right: auto;


   

// `
// const ProdBotDetDiv = styled.div`
//     float: left;
//     width: 20%;
//     margin-bottom: 3vh;
//     z-index: 5;


// `
// const ProdBotDetDivRight = styled.h2`

//     width: 100%;
//     height: 3vh;
//     position: absolute;
//     font-size: 4vh;
//     padding: 3vh;
//     padding-left:8vh;
//     z-index: 6;
//     background-color: transparent;
//     color: #c0c0c04d;
//     text-transform: uppercase;


    

// `
// const ProdPrice = styled.div`
//   font-size: 14px;
//   color: white;
//   font-weight: 700;
//   letter-spacing: 1px;

// `
// const ProdPriceSmall = styled.small`
//     font-size: 80%;
//     font-weight: 400;
//     text-decoration: line-through;
//     display: inline;
//     margin-right: 5px;
//     color: white;

// `
// const RefNum = styled.div`

//     width: 100%;
//     font-size: small;
//     font-weight: 600;
//     display: flex;
//     text-align: start;
//     color: #b1b1b1;
//     padding: 0%;
//     margin: 0%;


// `


// const ProductCard = () => {

//   const [mydata, setmydata] = useState();
  
  

//   useEffect(() => {

//     axios
//     .get("https://dummyjson.com/products")
//     .then((res) => console.log(res.data.products))
    
  
    
//   }, []);



//   const dispatch = useDispatch();

//   const send = (e)=>{
//     // console.log(e);
//     dispatch(ADD(e));

//   }

//   return (
//     <Container>
//       {Products4.map((item) => (
//         <Card>

//           <Link to="/product">        
//           <CardImgBox>
//             {/* <Image/> */}
//             <CardImage src={item.img}></CardImage>
//           </CardImgBox>
//           </Link>  


//             <CardContBox>
//             {/* <ProdBotDetDivRight>asjkdnjk</ProdBotDetDivRight> */}

//               <RefNum>REF NUMBER:{item.refno}</RefNum>
//                 <ContBoxHead>{item.rname}</ContBoxHead>
//                 {/* <ContBoxPrice> */}
//                 <ProdBotDet>

                  
//                     <ProdBotDetDiv>
//                     <ProdPriceSmall>₹{item.oldprice}</ProdPriceSmall>
//                       <ProdPrice>₹{item.price}</ProdPrice>

//                     </ProdBotDetDiv>
                    
//                     <Instock><Instocktext>In stock </Instocktext>
//                     <ContBoxBuy onClick={()=> send(item)}>
//                     <ShoppingCart/> Add To Cart</ContBoxBuy>
//                     </Instock>
//                     <ProdBotDetDivRight>{item.brand}</ProdBotDetDivRight>
                      

                    
//                   </ProdBotDet>
                  
//                   {/* 61.<small>98</small> €</ContBoxPrice> */}
                
//             </CardContBox>

    

//         </Card>


// ))}
//     </Container>
//   )
// }

// export default ProductCard

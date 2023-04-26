import React, { useState, useEffect } from "react";
// import BackdropGallery from "./BackdropGallery";
import styled from 'styled-components'
  

import prod1 from "../../Assets/Product/p1.png";
import prod2 from "../../Assets/Product/p2.webp";
import prod3 from "../../Assets/Product/p3.jpg";
import prod4 from "../../Assets/Product/p4.png";

import thumb1 from "../../Assets/Product/p1.png";
import thumb2 from "../../Assets/Product/p2.webp";
import thumb3 from "../../Assets/Product/p3.jpg";
import thumb4 from "../../Assets/Product/p4.png";
import Disctag from '../../Assets/Disctag.svg'



const GalleryCon = styled.div`
  /* flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  z-index: 0;
  left: 0vh;
   */

  margin-top: 0%;
  margin-bottom: auto;
  z-index: 0;
  display: flex;
  

  
`

const GalImgdiv = styled.div`
  position: relative;
  background-color: white;
  height: 530px;
  width: 570px;

  @media (max-width: 600px)  {
    height: 450px;
    width: 570px;
  }
`

const GalImg = styled.img`


  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 20px;
  object-fit: contain;
  /* transform: rotate(-90deg); */
  @media (max-width: 992px){
    height: 350px;
  }
`

const ThumbNail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 3vh;


`
const ThumbImgHold = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid #C4C4C4;
  height: 120px;
  padding: 4px;
  margin-bottom: 2vh;
  width: 120px;
  @media (max-width: 992px)  {
    height: 75px;
    width: 75px;
  }
`
const ThumbImg = styled.img`
  
  border-radius: 1px;
  
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  /* transform: rotate(-90deg); */
  @media (max-width: 992px)  {
    height: 75px;
  }
`

const Acti = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99;
  border: 3px solid rgb(121, 148, 169);
  background-color: #bbe6ffab;`

const DiscImg = styled.div`
z-index:5;
position: absolute;
top:0%;
left:0% ;
`



const Gallery = ({items}) => {

  const IMAGES = [prod1, prod2, prod3, prod4];
  const THUMBS = [thumb1, thumb2, thumb3, thumb4];

  const [currentImage, setCurrentImage] = useState(prod1);
  const [currentPassedImage, setCurrentPassedImage] = useState(prod1);

  const [open, setOpen] = useState(false);
  const handleClick = (index) => {
    setCurrentImage(IMAGES[index]);
  };
  const handleToggle = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const removeActivatedClass = (parent) => {
    parent.childNodes.forEach((node) => {
      node.childNodes[0].classList.contains("activated") &&
        node.childNodes[0].classList.remove("activated");
    });
  };
  useEffect(() => {
    setCurrentPassedImage(currentImage);
  }, [currentImage]);

  return (
    
      <GalleryCon>

      <ThumbNail>
          {THUMBS.map((th, index) => {
            return (

              <ThumbImgHold
                key={index}
                onClick={(e) => {
                  handleClick(index);
                  removeActivatedClass(e.currentTarget.parentNode);
                  e.currentTarget.childNodes[0].classList.toggle("activated");
                }}>
                <div className={`outlay ${index === 0 && "activated"}`}></div>
                <ThumbImg src={th} alt={`product-${index + 1}`} />
              </ThumbImgHold>
            );
          })}
        </ThumbNail>

        <GalImgdiv>
          <GalImg src={currentImage} alt="product-1" onClick={handleToggle} />
          <DiscImg>
                        <img src={Disctag}/>
          </DiscImg>
        </GalImgdiv>



      </GalleryCon>
    
  );
};

export default Gallery;

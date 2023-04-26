// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const HalfWidthCarousel = ({ items, interval = 5000 }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleClick = (index) => {
//     setActiveIndex(index);
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [interval, items.length]);

//   return (
//     <Container>
//       <Slides>
//         {items.map((item, index) => (
//           <Slide key={index} active={index === activeIndex}>
//             <img src={item.imageUrl} alt={item.altText} />
//           </Slide>
//         ))}
//       </Slides>
//       <Indicator>
//         {items.map((item, index) => (
//           <SvgIndicator key={index} active={index === activeIndex} onClick={() => handleClick(index)}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={index === activeIndex ? "#FFF" : "rgba(255, 255, 255, 0.5)"} width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
//           </SvgIndicator>
//         ))}
//       </Indicator>
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 50vh;
// `;

// const Slides = styled.div`
//   display: flex;
//   overflow: hidden;
//   width: 50vw;
//   height: 100%;
// `;

// const Slide = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-shrink: 0;
//   width: 50vw;
//   height: 100%;
//   transition: transform 0.5s ease;
//   transform: translateX(${(props) => (props.active ? "0%" : "-100%")});
// `;

// const Indicator = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 1rem;
// `;

// const SvgIndicator = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0 0.5rem;
//   cursor: pointer;
//   transform: ${(props) => (props.active ? "scale(1.2)" : "scale(1)")};
//   transition: transform 0.3s ease;

//   svg path {
//     fill: ${(props) => (props.active ? "#FFF" : "rgba(255, 255, 255, 0.5)")};
//   }
// `;

// export default HalfWidthCarousel;










// // const GreaterThan = styled.div`
// //   width: 0;
// //   height: 0;
// //   border-top: 0.5rem solid transparent;
// //   border-bottom: 0.5rem solid transparent;
// //   border-left: 1rem solid ${(props) => (props.active ? "white" : "rgba(255, 255, 255, 0.5)")};
// //   margin: 0 0.5rem;
// //   cursor: pointer;
// //   transform: ${(props) => (props.active ? "translateX(2px)" : "translateX(0px)")};
// //   transition: transform 0.3s ease;
// // `;

// // export default HalfWidthCarousel;


import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const backgroundColorValue = Math.min(scrollPosition / 100, 1); // divide by 100 to adjust the speed of the color change
    setBackgroundColor(`rgba(255, 0, 0, ${backgroundColorValue})`); // set the background color using rgba to set the alpha channel to the value of backgroundColorValue
  };

  return (
    <div style={{ backgroundColor }}>
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae velit mi. Fusce at ipsum eget justo egestas bibendum.</p>
    </div>
  );
};

export default MyComponent;

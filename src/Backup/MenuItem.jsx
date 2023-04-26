// import React, { useState } from 'react'
// // import "./menusty.css"

// import styled from 'styled-components'
  
 
 
// const Container = styled.li`
// background-color: #c50000;
// display: flex;
// cursor: pointer;
// `

// const Names = styled.a`
// flex: 1;
// height: 100%;
// `

// const NamesTwo = styled.div`
// background-color: #515151;
// height: 100%;
// flex: 1;
// `

// const Wrapper = styled.div`
// position: absolute;
// top: 2.5vh;
// left: 10vh;
// background-color: #00e92b;
// height: 30vh;
// width: 30vh;

// `
// const WrapperTwo = styled.div`
// background-color: #c50000;
// `

// const ContTwo = styled.div`
// background-color: #0007c5;
// display: flex;
// height: 30vh;
// width: 30vh;
// z-index: 1000;
// `

// function MenuItem({ menuItem }) {
//     const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  
//     const toggleSubMenu = () => {
//       setIsSubMenuOpen(!isSubMenuOpen);
//     };
  
//     return (
//       <Container>
//         <Names href={menuItem.url} onClick={menuItem.submenu && toggleSubMenu}>
//           {menuItem.name}
//         </Names>
//         {menuItem.submenu && isSubMenuOpen && (
//           <Wrapper>
//             {menuItem.submenu.map((subMenuItem) => (
//               <ContTwo>
//                 <Names href={subMenuItem.url} onClick={subMenuItem.submenutwo && toggleSubMenu}>
//                     {subMenuItem.name}
//                 </Names>
                
//                 {subMenuItem.submenutwo && (
//                     <WrapperTwo>
//                         {menuItem.submenutwo.map((subMenuItemTT) => (
//                             <NamesTwo href={subMenuItemTT.url} onClick={subMenuItemTT.submenuthree && toggleSubMenu}>
//                                 {subMenuItemTT.name}
//                             </NamesTwo>
//                             ))}
//                     </WrapperTwo>
//                     )}



//               </ContTwo>
//             ))}
//           </Wrapper>
//         )}
//       </Container>
//     );
//   }
  
  
  

// export default MenuItem


import React, { useState } from 'react'
// import "./menusty.css"

import styled from 'styled-components'
import StyledLink from '../../StyLink'
  
 
 
const Container = styled.li`
background-color: #c50000;
/* display: flex; */
cursor: pointer;
`

const Names = styled.a`
color: black;
text-decoration: none;
font-family: Lexend;
font-size: 16px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0.15000000596046448px;
text-align: left;
padding-right: 3vh;
`

const Wrapper = styled.div`
position: absolute;
top: 5vh;
width: 30vh;
height: 40vh;
background-color: #00e92b;

`
const WrapperCont = styled.div`
background-color: #3700ff;
display: flex;
`
const WrapperOne = styled.li`
display: block;
flex: 1;
background-color: #ccff00;
`

const NamesTwo = styled.a`
color: black;
text-decoration: none;
font-family: Lexend;
font-size: 16px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0.15000000596046448px;
text-align: left;
padding-right: 3vh;
`


const WrapperTwo = styled.div`
display: block;
flex: 1;
background-color: brown;
`

const WrapperTwoItems = styled.div`
background-color: #ff00cc;
`


function MenuItem({ menuItem }) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  
    const toggleSubMenu = () => {
      setIsSubMenuOpen(!isSubMenuOpen);
    };

    const [isSubMenuTwoOpen, setIsSubMenuTwoOpen] = useState(false);

    const toggleSubMenuTwo = () => {
      setIsSubMenuTwoOpen(!isSubMenuTwoOpen);
    };
  
    return (
      <Container>
        <Names href={menuItem.url} onClick={menuItem.submenu && toggleSubMenu}>
          
          <StyledLink to={menuItem.url}>
            {menuItem.name}
          </StyledLink>
          
        </Names>
        {menuItem.submenu && isSubMenuOpen && (
          <Wrapper>
            {menuItem.submenu.map((subMenuItem) => (
              // <MenuItem key={subMenuItem.name} menuItem={subMenuItem} />
              <WrapperCont>
              <WrapperOne >
                <NamesTwo href={subMenuItem.url} onClick={subMenuItem.submenuTwo && toggleSubMenuTwo}>
                  {subMenuItem.name}
                </NamesTwo>
                
              </WrapperOne>

              {subMenuItem.submenuTwo && isSubMenuTwoOpen && (
              <WrapperTwo>
                {subMenuItem.submenuTwo.map((subMenuItemTwo) => (
                <WrapperTwoItems>
                  {subMenuItemTwo.name}
                </WrapperTwoItems>
                ))}

              </WrapperTwo>
              )}
              </WrapperCont>
            ))}
          </Wrapper>
        )}
      </Container>
    );
  }
  
  
  

export default MenuItem


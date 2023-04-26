import { Avatar, Rating } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import LC from '../../Assets/lc.jpg'
  
 
 
const Container = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  background-color: #e50000;




`
const Body = styled.div`

`
const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;

  

`
const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;    
  background-color: #6a0000;  
  border-radius:40px;
  

  transform: translateY(100%);
  transition: .2s ease-in-out;

`
const CardHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: 40px 0 0 0;    
  background-color: #6a0000;
  transform: translateY(-100%);
  transition: .2s ease-in-out;
`

const Card = styled.div`
  position: relative;
  display: block;
  height: 100%;  
  border-radius: 40px;
  overflow: hidden;
  text-decoration: none;
  &:hover ${CardOverlay}{
    transform: translateY(0);
  }
  &:hover ${CardHeader}{
    transform: translateY(0);
  }
`
const CardImg = styled.img`
  width: 100%;
  height: auto;
`

const CardArc = styled.svg`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;      
  z-index: 1;


`
const CardThumb = styled.img`
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 50%;   
`
const CardTitle = styled.h3`
  font-size: 1em;
  margin: 0 0 .3em;
  color: #6A515E;
`

const CardTagline = styled.div`
  display: block;
  
`

const CardStatus = styled.span`
  font-size: .8em;
  color: #D7BDCA;
`
const CardDes = styled.p`
  padding: 0 2em 2em;
  margin: 0;
  color: #D7BDCA;
  font-family: "MockFlowFont";   
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  background-color: #6a0000;
`



const Custes = () => {
  return (
    <Container>
        <Cards>
            <li>
                <Card>
                    <CardImg src={LC}/>
                    <CardOverlay>
                        <CardHeader>
                            <CardArc>
                                <path 
                                fill= "#6a0000"
                                d= "M 40 80 c 22 0 40 -22 40 -40 v 40 Z"
                                />
                            </CardArc>
                            <Avatar sx={{  width: "50px",  height: "50px" }}/>
                                <CardTagline>
                                <CardTitle>
                                    Jessica Parker

                                </CardTitle>
                                <CardStatus>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                </CardStatus>
                                </CardTagline>
                            
                        </CardHeader>
                        <CardDes>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum ducimus aut saepe sed,
                             praesentium minus aspernatur, nisi officiis ut odio magnam eaque earum? Quas quae molestiae perspiciatis modi vel.
                        </CardDes>
                    </CardOverlay>
                </Card>
            </li>

            <li>
                <Card>
                    <CardImg src={LC}/>
                    <CardOverlay>
                        <CardHeader>
                            <CardArc>
                                <path 
                                fill= "#6a0000"
                                d= "M 40 80 c 22 0 40 -22 40 -40 v 40 Z"
                                />
                            </CardArc>
                            <Avatar sx={{  width: "50px",  height: "50px" }}/>
                                <CardTagline>
                                <CardTitle>
                                    Jessica Parker

                                </CardTitle>
                                <CardStatus>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                </CardStatus>
                                </CardTagline>
                            
                        </CardHeader>
                        <CardDes>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum ducimus aut saepe sed,
                             praesentium minus aspernatur, nisi officiis ut odio magnam eaque earum? Quas quae molestiae perspiciatis modi vel.
                        </CardDes>
                    </CardOverlay>
                </Card>
            </li>

            <li>
                <Card>
                    <CardImg src={LC}/>
                    <CardOverlay>
                        <CardHeader>
                            <CardArc>
                                <path 
                                fill= "#6a0000"
                                d= "M 40 80 c 22 0 40 -22 40 -40 v 40 Z"
                                />
                            </CardArc>
                            <Avatar sx={{  width: "50px",  height: "50px" }}/>
                                <CardTagline>
                                <CardTitle>
                                    Jessica Parker

                                </CardTitle>
                                <CardStatus>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                </CardStatus>
                                </CardTagline>
                            
                        </CardHeader>
                        <CardDes>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum ducimus aut saepe sed,
                             praesentium minus aspernatur, nisi officiis ut odio magnam eaque earum? Quas quae molestiae perspiciatis modi vel.
                        </CardDes>
                    </CardOverlay>
                </Card>
            </li>

            


        </Cards>
      
    </Container>
  )
}

export default Custes

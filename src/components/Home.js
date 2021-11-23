import React from 'react'
import styled from "styled-components";

function Home( {title,content,leftbuttons,rightbuttons,Backgroundimg}) {
    return (
       <Container bgImage={Backgroundimg}>
         <Title> <h1> {title} </h1></Title>
          <Wrap> <p> {content} </p> </Wrap>
          <ButtonGroup>
              <LeftButtoon>{leftbuttons}</LeftButtoon>
              <RightButton>{rightbuttons}</RightButton>
          </ButtonGroup>
         
       </Container>
    )
}

export default Home

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  height:100vh;
  width:100vw;
  background-image: url(/images/model-s.jpg);
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
  flex-wrap:nowrap;
  background-image: ${props => ` url("images/${props.bgImage}")`}
 
  `
const Title = styled.h1`
font-family: 'Poppins', sans-serif;
   padding-top:100px ;
  text-align: center;
  border: transparent;
  font-size:20px ;
  font-weight:Bold;
  text-align:center;
  @media screen and (max-width:760px) {
    font-size:17px ;
   
  }
`
const Wrap = styled.p `
  padding-top:7px;
  font-size:2rem;
  font-weight:200;
  color:black;
  font-family: 'Poppins', sans-serif;
  text-align:center ;
  @media screen and (max-width:760px) {
    font-size: 1rem;
  }
  
`
 const ButtonGroup = styled.div `
   display: flex;
   justify-content:center;
  padding-top:400px;
  @media screen and (max-width:760px) {
    flex-direction: column;
    padding: 9px 10px 9px 10px ;
   
  }
 `
const LeftButtoon = styled.button `
    display:flex;
   justify-content:center;
   align-items: center;
   padding: 9px 60px 9px 60px ;
   font-size:13px ;  
   border-radius:50px;
   text-transform: uppercase;
   font-family: 'Poppins', sans-serif;
   border :transparent;
   color: black;
   @media screen and (max-width:760px) {
    padding: 9px 10px 9px 10px ;
    margin-bottom:20px;
  }
`
  
const RightButton = styled.button `
  padding: 9px 60px 9px 60px ;
   font-size:13px ;
   border-radius:50px;
   background:#333;
   color:#fff;
   border :transparent;
   margin-left:10px ;
   text-transform: uppercase;
   font-family: 'Poppins', sans-serif;
   @media screen and (max-width:760px) {
    padding: 9px 10px 9px 10px ;
   
  }
`

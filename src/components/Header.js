import React from 'react'
import styled from "styled-components";
function Header() {
    return (
        <Container>
               <img  src="/images/logo.svg" alt=""/>
               <Elements>
                <a href="#">ModelS</a>
                <a href="#">Model3</a>
                <a href="#">ModelX</a>
                <a href="#">ModelY</a>
               </Elements>
               <Rightmenu>
               <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
               </Rightmenu>
        </Container>
    )
}

export default Header

const Container = styled.div `
    min-height:60px;
    position:fixed;
    padding: 0px 20px ;
    display:flex;
    justify-content:space-between;
    top:0;
    right;0;
    left:0;
    align-items:center;
    width:100%;

`
const Elements = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
   flex:1;
   @media screen and (max-width:760px) {
   display:none;
   
  }

   a {
      font-weight:400; 
      flex-wrap:nowrap;
      padding:0px 10px ;
      font-weight:600;
      color:black;
   }

`
const Rightmenu = styled.div `
a {
    font-weight:400; 
    flex-wrap:nowrap;
    padding:0px 10px ;
    font-weight:600;
    color:black;
    font-size:1rem
 }
  


`

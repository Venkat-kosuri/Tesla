import React from 'react'
import Header from './components/Header' 
import styled from "styled-components";
import Home from './components/Home'
function App() {
  return (
    <div>
      <Header/> 
     <Wrapper>
      <Home
         title = "Model S"
         content = 'Order online for Touchless Delivery'
          leftbuttons= "Custom Order"
          rightbuttons= "Existing Inventory"
          Backgroundimg = "model-s.jpg"
      />
      <Home
         title = "Model Y"
         content = 'Order online for Touchless Delivery'
          leftbuttons= "Custom Order"
          rightbuttons= "Existing Inventory"
          Backgroundimg = "model-y.jpg"
      />
      <Home
         title = "Model 3"
         content = 'Order online for Touchless Delivery'
          leftbuttons= "Custom Order"
          rightbuttons= "Existing Inventory"
          Backgroundimg = "model-3.jpg"
      />
      <Home
         title = "Model X"
         content = 'Order online for Touchless Delivery'
          leftbuttons= "Custom Order"
          rightbuttons= "Existing Inventory"
          Backgroundimg= "model-x.jpg"
      />
      <Home
         title = "Solor Panel"
         content = 'Order online for Touchless Delivery'
          leftbuttons= "Custom Order"
          rightbuttons= "Existing Inventory"
          Backgroundimg = "solar-panel.jpg"
      />
      <Home
         title = "Solor Roof"
         content = 'Order online for Touchless Delivery'
          leftbuttons= "Custom Order"
          rightbuttons= "Existing Inventory"
          Backgroundimg = "solar-roof.jpg"
      />
      
     
     </Wrapper>
    </div>
  )
}

export default App

const Wrapper = styled.div `
 width:100%;

`

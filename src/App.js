import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";

import Header from './Components/Header.js'
import "tailwindcss/tailwind.css"
import Navigation from './Components/Navigation.js'
import Footer from './Components/Footer.js'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
import Signup from './Views/Signup'
import { Container } from "react-bootstrap"

function App() {
  return (
       <div> 
          <Router> 
          <Header/>
          <div className= "p-3">
          <Container className="d-flex align-items-center justify-content-center"
              style = {{minHeight: "80vh"}} >
          <Switch>
          <div className= "w-50" style = {{maxWeidth: '400px'}} > 
              <Route exact path="/"> 
                <Signup />
                </Route>
          </div>
             
              <Route path="/about"> 
                <About />
              </Route>
              <Route path="/products/:id">
              <Product />

              </Route>
              </Switch>
              </Container>
          
          </div>
            
              <Footer/>
          </Router>
        
       </div>

  )
}

export default App;

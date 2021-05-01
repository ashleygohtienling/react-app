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


function App() {
  return (
       <div>  
          
          <Router> 
          
          <Header/>
          <div className= "p-3">

          <Switch>
              <Route exact path="/"> 
                <Home />
              </Route>
              <Route path="/about"> 
                <About />
              </Route>
              <Route path="/products/:id">
              <Product />
              </Route>
             

              </Switch>
          </div>
            
              <Footer/>
          </Router>
         
       </div>

  )
}

export default App;

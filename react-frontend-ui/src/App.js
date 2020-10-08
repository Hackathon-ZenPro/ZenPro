import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/Home"
import Shop from "./components/Shop"
import Events from "./components/Events"
import ShoppingCart from "./components/ShoppingCart"
import UserInfo from './components/UserInfo'
import {  Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
<div className="homePage">
<Container fluid>
      <BrowserRouter /*style={{justifyContent: "center",alignItems: "center"}}*/>
        <Navbar/>
        
            <Switch>
              <Route path='/shop' component={Shop}  />
              <Route path='/events' component={Events}/>
              <Route path='/shoppingcart' component={ShoppingCart} />
              <Route path='/userinfo' component={UserInfo}/>
              <Route path='/'  component={Home}/> {/* Right after log in, user will go here, all following paths will be buttons on the home screen  */}
            </Switch>
            
          </BrowserRouter>
          </Container>
      </div>
      
    </>

  );
}

export default App;

//<div /*style ={{ padding: "10px", height:"100%" }}*/>
//<BrowserRouter /*style={{justifyContent: "center",alignItems: "center"}}*/>
//<Switch>
//  <Route path='/home'  component={Home}/> {/* Right after log in, user will go here, all following paths will be buttons on the home screen  */}
//  <Route path='/shop' component={Shop}  />
//
//  <Route path='/userInfo'  />
//  <Route path='/'  />
//</Switch>
//</BrowserRouter>
//</div>

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/Home"
import Shop from "./components/Shop"
import Events from "./components/Events"
import ShoppingCart from "./components/ShoppingCart"
import UserInfo from './components/UserInfo'


function App() {
  return (
    <div>
      <div /*style ={{ padding: "10px", height:"100%" }}*/>
          <BrowserRouter /*style={{justifyContent: "center",alignItems: "center"}}*/>
            <Switch>
              <Route path='/shop' component={Shop}  />
              <Route path='/events' component={Events}/>
              <Route path='/shoppingcart' component={ShoppingCart} />
              <Route path='/userinfo' component={UserInfo}/>
              <Route path='/'  component={Home}/> {/* Right after log in, user will go here, all following paths will be buttons on the home screen  */}
            </Switch>
          </BrowserRouter>
        </div>
     
    </div>
  );
}

export default App;

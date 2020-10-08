import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Router path="/" exact component={Home} />
        </Switch>
      </Router>
      <Hero />
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

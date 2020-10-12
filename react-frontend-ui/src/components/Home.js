import React from "react";
import "../App.css";
import Hero from "./Hero"
import TwitterDiv from "./TwitterDiv"

function Home() {
  return (
    <>
    <div className="home">
      <TwitterDiv/>
      </div>
      <div className="sideBar">
        <h1>Sign up for exclusive deals!</h1>
        <img className="homeImg" src="https://images.unsplash.com/photo-1484482340112-e1e2682b4856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
        <h5>Or view some of our upcoming <a href="/events">Events</a></h5>
      </div>
      <Hero />
      <footer className="myFooter"><span className="foot">Built by ZenPro</span></footer>
    </>
  );
}

export default Home;

// import { logDOM } from '@testing-library/react'
// import React from 'react'
// import {Link} from 'react-router-dom'
// import '../App.css';

// export default class Home extends React.Component{
//     render(){
//         return(
//            <div>
//                 <Link to = '/home'><img src='/zenpro-logo.png' alt='ZenPro Logo' /></Link>
//                 <Link to = '/home'><button>About Us</button></Link>{/* Doesn't work*/}
//                 <Link to = '/shop'><button>Shop</button></Link>
//                 <Link to = '/events'><button>Events</button></Link>
//                 <Link to = '/shoppingcart'><button>Shopping Cart</button></Link>
//                 <Link to = '/'><button></button></Link>
//                 <Link to = '/'><button></button></Link>
//                 <Link to = '/'><button></button></Link>
//             </div>
//         )

//     }
// }

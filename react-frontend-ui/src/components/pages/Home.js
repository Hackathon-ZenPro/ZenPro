import React from "react";
import "../../App.css";
import Hero from "../Hero";

function Home() {
  return (
    <>
      <Hero />
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

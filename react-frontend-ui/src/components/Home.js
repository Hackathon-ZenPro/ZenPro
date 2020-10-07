import React from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../services/TokenService'

export default class Home extends React.Component{

    componentDidMount(){
        TokenService.saveUserId(1)
    }

    render(){
        return(
           <div>
               Home<br/>
                <Link to = '/'><button >Home</button></Link>{/* Going to be a clickable logo*/}
                <Link to = '/'><button>About Us</button></Link>{/* Doesn't work*/}
                <Link to = '/shop'><button>Shop</button></Link>
                <Link to = '/events'><button>Events</button></Link>
                <Link to = '/shoppingcart'><button>Shopping Cart</button></Link>
                <Link to = '/userinfo'><button>User Info</button></Link>

                
                {/*
                <Link to = '/'><button></button></Link>
                <Link to = '/'><button></button></Link>
                <Link to = '/'><button></button></Link>
                */}
            </div> 
        )
        
    }
}

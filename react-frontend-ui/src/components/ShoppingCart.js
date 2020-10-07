import React from 'react'
import {Link} from 'react-router-dom'

export default class ShoppingCart extends React.Component{
    render(){
        return(
           <div>
                Shopping Cart text
                <Link to = '/'><button >Home</button></Link>{/* Going to be a clickable logo*/}
            </div> 
        )
        
    }
}

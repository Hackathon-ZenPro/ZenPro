import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';


export default class Shop extends React.Component{
    render(){
        return(
           <div>
                <Link to = '/home'><img src='/zenpro-logo.png' alt='ZenPro Logo' /></Link>
                Apparel         Shoes       Sports      Gear
            </div> 
        )
        
    }
}

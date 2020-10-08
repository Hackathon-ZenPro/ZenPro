import React from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../services/TokenService'


export default class Events extends React.Component{
    render(){
        return(
           <div>
                Events text
                <Link to = '/'><button >Home</button></Link>{/* Going to be a clickable logo*/}
            </div> 
        )
        
    }
}

import React from 'react'
import axios from 'axios'

export default class TwitterDiv extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            tweets:[]
        }
    }

    componentDidMount(){
        this.findProducts()
    }

    findProducts(){
        var url = "http://localhost:8080/api/products"      ///Insert URL for tweets call
        axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({tweets:data})
                console.log(data)
            })
    }

    render(){
        return(
            <div>
                <h2 style={{color:"rgb(29, 161 ,242)"}}>What do our customers recommend?</h2> 


            </div>
            
        )
    }
}
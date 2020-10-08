import React from 'react'
import axios from 'axios'
import '../App.css';
import TwitterDiv from "./TwitterDiv"



export default class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        this.findProducts()
    }

    findProducts(){
        var url = "http://localhost:8080/api/products"
        axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({products:data})
                console.log(data)
            })
    }

    
    render(){
        return(
            <div>

                <div className="sticky">
                    <TwitterDiv/>
                </div>

                <div style={{marginLeft:"10%", width:"80%"}}>
                <h1>Products</h1>
                
                {this.state.products.map((product) => (
                        <div className="shopDiv" id={product.id}>
                            <div style={{width:"40%", float:"left"}}>
                                <img src={product.imageUrl} alt ="Api error" style ={{height:"250px", margin:"20px"}}/><br/>
                                
                            </div>
                            
                            <div style={{width:"40%",float:"right"}}>
                            {product.productName}<br/>
                                ${(product.price - product.discount).toFixed(2)}
                                    Purchase button <br/>
                                    sizes<br/>
                            </div>
                        </div>
                        ))}
                      
                </div>
                <div style={{visibility:"hidden"}}>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/> hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                </div>
            </div>
        )
    }

}

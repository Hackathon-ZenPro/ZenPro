import React from 'react'
import axios from 'axios'
import '../App.css';
import TwitterDiv from "./TwitterDiv"
import { Alert } from 'react-bootstrap';



export default class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state={
            products:[],
            tweets:[]
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

    displaySizes(){
        return(
            <div>
                <button className="sizeButton">XS</button>
                <button className="sizeButton">S</button>
                <button className="sizeButton">M</button>
                <button className="sizeButton">L</button>
            </div>
        )
    }
    cartOnClick(){
        alert('Added to cart')
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
                                <img src={product.imageUrl} alt ="Api error" style ={{height:"225px", margin:"20px"}}/><br/>
                                
                            </div>
                            <div style={{width:"40%",float:"right"}}>
                                <p>{product.productName}</p>
                                <p>${(product.price - product.discount).toFixed(2)}</p>

                                {(product.gender===null)? null :this.displaySizes()}
                                <button className="cartButton" ><span className="icon"><i class="fas fa-shopping-cart"></i></span> Add to cart </button>
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

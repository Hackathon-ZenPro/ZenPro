import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

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
                <table>
                    <tbody>
                        {/* <th>
                            <td>yo</td>
                            <td>hello</td>
                        </th> */}
                        {this.state.products.map((product) => (
                        <tr key= {product.id}>
                            <td><img src={product.imageUrl} alt ="Api error" style ={{width:"10%"}}/></td>
                            <td>{product.productName}</td>
                            <td>{product.price - product.discount}</td>
                            
                        </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        )
    }

}

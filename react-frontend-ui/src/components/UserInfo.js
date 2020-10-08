import React from 'react'
import TokenService from '../services/TokenService'
import axios from 'axios'

export default class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:{}
        }
    }

    componentDidMount(){
        this.findUser()
    }

    findUser(){
        var url = "http://localhost:8080/api/user/" + TokenService.getUserId()
        axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({user:data})
                console.log(data)
            })
    }

    render(){
        return(
            <div>
                <table className="history" style={{marginLeft:"auto", marginRight:"auto"}}>
					<tr className="history">
						<th className="history">User Id</th>
						<th className="history">First Name</th>
						<th className="history">Last Name</th>
						<th className="history">Address</th>
						<th className="history">Contact Number</th>
						<th className="history">Password</th>
					</tr>
					<tr key = {this.state.user.id}>
						<td className="history">{this.state.user.userId}</td>
						<td className="history">{this.state.user.firstName}</td>
						<td className="history">{this.state.user.lastName}</td>
						<td className="history">{this.state.user.address}</td>
						<td className="history">{this.state.user.contactNumber}</td>
						<td className="history">{this.state.user.userPassword}</td>
					</tr>
				</table >
            </div>
        )
    }

}

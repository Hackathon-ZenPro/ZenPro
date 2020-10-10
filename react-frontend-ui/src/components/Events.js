import React, { Component, useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import 'react-calendar/dist/Calendar.css';
 
class Events extends Component {
    constructor(props){
        super(props)
        this.state={
            date: new Date(),
            events:[],
            isModalOpen: false
        }
    }

    componentDidMount(){
        this.findEvents()
    }

    findEvents(){
        var url = "http://localhost:8080/api/events"
        axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({events:data})
                console.log(data)
            })
    }
 
    onChange = date => this.setState({ date })
    openModal = () => this.setState({ isModalOpen: true})
    closeModal = () => this.setState({ isModalOpen: false})
    
    render() {
        return (
        <div>
            <Modal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal}>
                <button onClick={this.closeModal}>Close</button>
            </Modal>
            <br/>
            <div className="sticky">
                <h4 style={{textAlign:"center"}}>Event Calendar View</h4>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    minDate={new Date()}
                />
                <br/>
                <h6 style={{textAlign:"center"}}>Become apart of the ZenPro family!!</h6>
                <h6 style={{textAlign:"center"}}>Gain access to exclusive deals</h6>
                <h6 style={{textAlign:"center"}}><a href="">Sign Up Now!!</a></h6>

                <img src="https://tinyurl.com/y2stnkt5" alt="Point Up" style={{width:"100%", height:"250px", border:"2px solid #006555"}}/>
            </div>

            <div style={{marginLeft:"5%", width:"80%"}}>
                <h1 style={{textAlign:"center", color:"#006555", fontFamily:"Roboto Slab, serif", textDecoration:"underline"}}>ZenPro Events</h1><br/>

                {this.state.events.map((event) => (
                    <div id={event.eventId}>
                        <table style={{borderBottom:"7px solid #006555"}}>
                            <tbody>
                                <tr>
                                    <td><img src={event.eventImg} alt ="Api error" style ={{height:"250px", width:"450px", border:"3px solid #006555"}}/></td>
                                    <td style={{width:"550px", textAlign:"center"}}>
                                        <h5 style={{textAlign:"center", fontWeight:"bold"}}>{event.eventName}</h5>
                                        <h5 style={{color:"#006555", fontStyle:"italic"}}>{event.eventDescription}For more information on how to join or any other questions please use the following link.</h5>
                                        <button className="btn btn-success" onClick={this.openModal}>Join Now!!</button>
                                        <h5 style={{fontWeight:"bold"}}>Event Details: {event.eventDate}</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
        );
    }
}

export default Events;
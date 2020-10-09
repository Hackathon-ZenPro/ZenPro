import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 
<<<<<<< HEAD
class Event extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          minDate={new Date()}
        />
      </div>
    );
  }
}

export default Event;
=======
class Events extends Component {
    constructor(props){
        super(props)
        this.state={
            date: new Date(),
            events:[]
        }
    }

    // componentDidMount(){
    //     this.findProducts()
    // }

    // findProducts(){
    //     var url = "http://localhost:8080/api/products"
    //     axios.get(url)
    //         .then(response => response.data)
    //         .then((data) => {
    //             this.setState({products:data})
    //             console.log(data)
    //         })
    // }
 
    onChange = date => this.setState({ date })
    
    render() {
        return (
        <div>

            <div className="sticky">
                <h4 style={{textAlign:"center"}}>Event Calendar View</h4>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    minDate={new Date()}
                />
                <h4 style={{textAlign:"center"}}>Become apart of the ZenPro family!!</h4>
                <h4 style={{textAlign:"center"}}>Gain exclusive deals for events</h4>
                <h4 style={{textAlign:"center"}}>Videochat with ZenPro event planners</h4>
                <h4 style={{textAlign:"center"}}>To learn more click the Sign Up button</h4>
            </div>

            <div style={{marginLeft:"5%", width:"80%"}}>
                <h1>Events</h1>
            </div>
        </div>
        );
    }
}

export default Events;
>>>>>>> c9c88600df6179516a2d294aa6ad737a43318240

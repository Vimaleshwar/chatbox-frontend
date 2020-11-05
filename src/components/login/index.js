import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './login.css'

class Join extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             room:""
        }
    }
    
    nameHandler = (e)=>{
        this.setState({
            name:e.target.value
        })
    }
    roomHandler = (e) =>{
        this.setState({
            room:e.target.value
        })
    }
    render() {
        
        return (
            <div className="outerContainer">
            <div className="conatainer">
                <h2 className="heading">Login</h2>
                <h3 className="label">Name</h3>
                <input onChange={this.nameHandler} placeholder="name" value={this.state.name} type="text"/><br></br>
                <h3 className="label">Room Name</h3>
                <input onChange={this.roomHandler} placeholder="roomname" value={this.state.room} type="text"/> <br></br>
                <Link onClick={event =>!this.state.name || !this.state.room ? event.preventDefault() : null} to={`/chatbox?name=${this.state.name}&room=${this.state.room}`}>
                <button onClick={this.submitFunc} type="submit">Login</button>
                </Link>
                </div>
            </div>
        )
    }
}

export default Join



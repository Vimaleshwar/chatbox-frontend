import React,{useEffect,useState} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import Input from './Input'
import Header from './header'
import Scroll from './scroll'
import './style.css'

// endpoint used to connect backend 
const ENDPOINT = 'https://vimal-chat-app-heroku.herokuapp.com/';

let socket;
 
const Chatbox = ({location}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // getting name,room from the url query
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)
    // emitting the join function in backend
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    //socket function in front end will be emmited in backend for storing the message to the message arry
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    // socket function in front end will be emmited in backend sending user inside room
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      // sending message to the array and clearing input
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <div className="leftside">
            {/* header section like back button room name */}
          <Header room={room} />
          </div>
          <div className="rightside">
            {/* messages showing section */}
          <Scroll messages={messages} name={name} />
          </div>
          {/* writting message */}
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        

      </div>
        </div>
    )
}

export default Chatbox

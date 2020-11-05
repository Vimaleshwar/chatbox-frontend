import React from 'react';



const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    
    isSentByCurrentUser
      ? (
        <div className="chat" >
          <div>
          <div className="msg">
            <p>{text}</p>
          </div>
          <div  className="name">
          <p>{trimmedName}</p>
          </div>
          </div>

        </div>
        )
        : (
          <div className="chat-left" >
          <div>
          <div className="msg">
            <p>{text}</p>
          </div>
          <div  className="name__left">
          <p>{user}</p>
          </div>
          </div>

        </div>
        )
    
  );
}

export default Message;
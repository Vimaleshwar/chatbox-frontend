import React from 'react'

const Input = ({ setMessage, sendMessage, message }) => (
    <form>
      <div style={{width:"100%",marginBottom:"14px",borderTop:"1px solid grey"}}>
      <div className="input__div">

      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
      </div>
      </div>

    </form>
  )
  
  export default Input;

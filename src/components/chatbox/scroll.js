import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from'./message'
const Scroll = ({messages, name}) => {
    return (
        <ScrollToBottom>
            <div className="chatarea">
                {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
            </div>
        </ScrollToBottom>
    )
}

export default Scroll

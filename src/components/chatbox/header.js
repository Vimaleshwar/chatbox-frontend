import React from 'react'

function Header({room}) {
    return (
        <div className="top">
            <div className="close">
                <a  href="/">Back</a>
            </div>
            <div className="online__section">
            <h2 className="roomname">{room}</h2>
            </div>
            
        </div>
    )
}

export default Header
